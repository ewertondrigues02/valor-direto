<template>
  <div class="container-fixo">
    <div class="emprestimos-page">
      <h2>Simulador de Financiamentos</h2>

      <!-- Wrapper que controla o layout -->
      <div class="form-result" :class="{ 'with-result': resultado }">
        <!-- Formulário ocupa as duas primeiras colunas -->
        <form class="form-lado" @submit.prevent="calcularFinanciamento">
          <div class="input-group">
            <label for="valorBem">Valor do bem (R$):</label>
            <input id="valorBem" v-model.number="valorBem" placeholder="R$ 50.000" required />
          </div>
          <div class="input-group">
            <label for="entrada">Entrada (R$):</label>
            <input id="entrada" v-model.number="entrada" placeholder="R$10.000" />
          </div>
          <div class="input-group">
            <label for="prazo">Prazo (meses):</label>
            <input id="prazo" v-model.number="prazo" placeholder="36" required />
          </div>
          <div class="input-group">
            <label for="juros">Taxa de juros (% ao mês):</label>
            <input id="juros" v-model.number="juros" placeholder="1,5" required />
          </div>
          <div class="input-group">
            <label for="tipoAmortizacao">Tipo de Amortização:</label>
            <select id="tipoAmortizacao" v-model="tipoAmortizacao">
              <option value="PRICE">Tabela Price</option>
              <option value="SAC">SAC</option>
            </select>
          </div>
          <div class="input-group">
            <label for="tarifasAdicionais">Tarifas Adicionais (R$):</label>
            <input id="tarifasAdicionais" v-model.number="tarifasAdicionais" placeholder="R$ 500" />
          </div>
          <div class="input-group">
            <label for="valorResidual">Valor Residual (R$):</label>
            <input id="valorResidual" v-model.number="valorResidual" placeholder="R$ 2.000" />
          </div>
          <div class="input-group">
            <label for="rendaMensal">Renda Mensal (R$):</label>
            <input id="rendaMensal" v-model.number="rendaMensal" placeholder="R$ 4.000" required />
          </div>
          <div class="input-group">
            <label for="dataInicio">Data de Início:</label>
            <input id="dataInicio" type="date" v-model="dataInicio" required />
          </div>

          <button type="submit">Calcular</button>
        </form>

        <!-- Resultado aparece na terceira coluna -->
        <div v-if="resultado" class="resultado">
          <p><strong>Valor Financiado:</strong> {{ resultado.valorFinanciado }}</p>
          <p><strong>Parcela Média:</strong> {{ resultado.parcelaMedia }}</p>
          <p><strong>Juros Totais:</strong> {{ resultado.jurosTotais }}</p>
          <p><strong>Total a Pagar:</strong> {{ resultado.totalPago }}</p>
          <p><strong>Data Final:</strong> {{ resultado.dataFinal }}</p>
          <p><strong>Comprometimento de Renda:</strong> {{ resultado.comprometimento }}</p>
          <p><strong>Aviso:</strong> {{ resultado.alerta }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';

const formatadorBR = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const state = reactive({
  valorBem: null as number | null,
  entrada: null as number | null,
  prazo: null as number | null,
  juros: null as number | null,
  tipoAmortizacao: 'PRICE',
  tarifasAdicionais: null as number | null,
  valorResidual: null as number | null,
  rendaMensal: null as number | null,
  dataInicio: '',
  resultado: null as null | {
    valorFinanciado: string;
    parcelas: string[];
    parcelaMedia: string;
    jurosTotais: string;
    totalPago: string;
    dataFinal: string;
    comprometimento: string;
    alerta: string;
  },
});

function calcularFinanciamento() {
  const {
    valorBem, entrada, prazo, juros,
    tipoAmortizacao, tarifasAdicionais, valorResidual,
    rendaMensal, dataInicio
  } = state;

  const valorFinanciado = valorBem - entrada;
  const taxa = juros / 100;
  let parcelas: number[] = [];
  let totalPago = 0;
  let jurosTotais = 0;

  if (tipoAmortizacao === 'PRICE') {
    const parcelaFixa = valorFinanciado
      * (taxa * Math.pow(1 + taxa, prazo))
      / (Math.pow(1 + taxa, prazo) - 1);

    parcelas = [];
    for (let i = 0; i < prazo; i++) {
      parcelas.push(parcelaFixa);
    }

    totalPago = parcelaFixa * prazo;
    jurosTotais = totalPago - valorFinanciado;
  }

  else {
    const amortizacao = valorFinanciado / prazo;
    let saldo = valorFinanciado;
    for (let i = 0; i < prazo; i++) {
      const parcela = amortizacao + saldo * taxa;
      parcelas.push(parcela);
      jurosTotais += saldo * taxa;
      saldo -= amortizacao;
    }
    totalPago = parcelas.reduce((a, b) => a + b, 0);
  }

  totalPago += tarifasAdicionais + valorResidual;

  const dt = new Date(dataInicio);
  dt.setMonth(dt.getMonth() + prazo);
  const dataFinal = dt.toISOString().split('T')[0];

  const maiorParcela = parcelas.length ? Math.max(...parcelas) : 0;
  const comprometimento = rendaMensal
    ? (maiorParcela / rendaMensal) * 100
    : 0;

  state.resultado = {
    valorFinanciado: formatadorBR.format(valorFinanciado),
    parcelas: parcelas.map(p => formatadorBR.format(p)),
    parcelaMedia: formatadorBR.format(totalPago / prazo),
    jurosTotais: formatadorBR.format(jurosTotais),
    totalPago: formatadorBR.format(totalPago),
    dataFinal,
    comprometimento: `${comprometimento.toFixed(1)}% da renda`,
    alerta: comprometimento > 30
      ? '🚨 Comprometimento superior a 30% da renda!'
      : '✅ Dentro do limite saudável',
  };
}

const { resultado } = toRefs(state);
const { valorBem, entrada, prazo, juros, tipoAmortizacao, tarifasAdicionais, valorResidual, rendaMensal, dataInicio } = toRefs(state);
</script>

<style scoped>
.container-fixo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: var(--bg-page);
  padding: 1rem;
  box-sizing: border-box;

  
}

.emprestimos-page {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  background-color: transparent;
  color: var(--text-color, #333);
  border: 1px solid var(--text-color, #333);
  border-radius: 20px;
  box-shadow: var(--box-shadow, 0 2px 8px rgba(0,0,0,0.1));
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
  margin-left: 8rem;
  
}

h2 {
  text-align: center;
  margin-bottom: 16px;
}

.form-result {
  display: block;
}

.form-result.with-result {
  display: flex;
  gap: 20px;
}

.form-lado {
  width: 100%;
  transition: width 0.3s ease;
}

.form-result.with-result .form-lado {
  width: 70%;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

input,
select {
  width: 80%;
  padding: 6px;
  font-size: 0.9rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #7a7a7a;
  border-radius: 0 0 8px 8px;
  outline: none;
  transition: border-color 0.3s ease;
  color: var(--text-color, #333);
}

input:focus,
select:focus {
  border-bottom-color: var(--text-color, #333);
}

select {
  border-bottom: 2px solid var(--text-color, #333);
  border-radius: 12px 12px 8px 8px;
  text-align: center;
  height: 30px;
  color: var(--hover-color, #36be3f);
}

select:hover {
  cursor: pointer;
}

button {
  width: 40%;
  padding: 8px;
  background-color: var(--primary, #36be3f);
  color: #fff;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  grid-column: 1 / -1;
  transition: background-color 0.3s ease;
  align-items: center;
  text-align: center;
  margin-left: 30%;

}

button:hover {
  background-color: var(--primary-hover, #28d831);
}

.resultado {
  display: flex;
}

.form-result.with-result .resultado {
  display: block;
  width: 50%;
  overflow-y: auto;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1.5px solid var(--text-color, #ccc);
  border-radius: 20px;
  background: transparent;
}

.resultado {
  margin-top: 20px;
  padding: 16px;
  border-radius: 20px;
  background: transparent;
  line-height: 1.5;
}

.resultado p + p {
  margin-top: 8px;
}

.mensagem-explicativa {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 220px;
  background-color: #fff8e1;
  color: #a67c00;
  padding: 10px;
  border: 1px solid #ffe082;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  max-width: 100%;
}

@media (max-width: 480px) {
  form {
    grid-template-columns: 1fr;
  }
}
</style>
