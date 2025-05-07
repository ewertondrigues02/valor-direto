<template>
  <div class="container-fixo">
    <div class="emprestimos-page">
      <h2>Simulador de Empréstimos</h2>

      <!-- MENSAGEM EXPLICATIVA -->
      <div v-if="mostrarMensagem" class="mensagem-explicativa">
        O cálculo foi feito com base no sistema de amortização Price (juros compostos mensais),
        a menos que você tenha escolhido juros simples.
      </div>

      <div :class="['form-result', { 'with-result': resultado }]">
        <!-- Formulário -->
        <form @submit.prevent="calcularEmprestimo" class="form-lado">
          <div class="input-group">
            <label for="valor">Valor do Empréstimo:</label>
            <input type="number" v-model.number="valor" id="valor" placeholder="R$ 10.000" required />
          </div>

          <div class="input-group">
            <label for="prazo">Prazo (em meses):</label>
            <input type="number" v-model.number="prazo" id="prazo" placeholder="Ex: 24" required />
          </div>

          <div class="input-group">
            <label for="juros">Taxa de Juros (% ao mês):</label>
            <input type="number" step="0.01" v-model.number="juros" id="juros" placeholder="Ex: 2.5" required />
          </div>

          <div class="input-group">
            <label for="tipoJuros">Tipo de Juros:</label>
            <select v-model="tipoJuros" id="tipoJuros" required>
              <option value="composto">Compostos</option>
              <option value="simples">Simples</option>
            </select>
          </div>

          <div class="input-group">
            <label for="dataInicio">Data de Início:</label>
            <input type="date" v-model="dataInicio" id="dataInicio" required />
          </div>

          <button type="submit">Calcular</button>
        </form>

        <!-- Resultado -->
        <div v-if="resultado" class="resultado">
          <h3>Resultado</h3>
          <p><strong>Parcela Mensal:</strong> R$ {{ resultado.parcelaFmt }}</p>
          <p><strong>Total em Juros:</strong> R$ {{ resultado.jurosTotaisFmt }}</p>
          <p><strong>Valor Total a Pagar:</strong> R$ {{ resultado.valorTotalFmt }}</p>
          <p><strong>Data Final:</strong> {{ resultado.dataFinal }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'EmprestimosPage',
  setup() {
    const formatadorBR = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const state = reactive({
      valor: null as number | null,
      juros: null as number | null,
      prazo: null as number | null,
      tipoJuros: 'composto',
      dataInicio: '',
      resultado: null as {
        parcela: number;
        jurosTotais: number;
        valorTotal: number;
        dataFinal: string;
        parcelaFmt: string;
        jurosTotaisFmt: string;
        valorTotalFmt: string;
      } | null,
    });

    const mostrarMensagem = ref(false);

    function calcularEmprestimo() {
      const { valor, juros, prazo, tipoJuros, dataInicio } = state;
      if (!valor || !prazo) return;
      const taxa = juros / 100;
      let parcela = 0;
      let valorTotal = 0;
      if (tipoJuros === 'composto') {
        parcela =
          valor *
          (taxa * Math.pow(1 + taxa, prazo)) /
          (Math.pow(1 + taxa, prazo) - 1);
        valorTotal = parcela * prazo;
      } else {
        valorTotal = valor * (1 + taxa * prazo);
        parcela = valorTotal / prazo;
      }
      const jurosTotais = valorTotal - valor;

      const dtIni = new Date(dataInicio);
      dtIni.setMonth(dtIni.getMonth() + prazo);
      const dataFinal = dtIni.toISOString().split('T')[0];

      state.resultado = {
        parcela: parseFloat(parcela.toFixed(2)),
        jurosTotais: parseFloat(jurosTotais.toFixed(2)),
        valorTotal: parseFloat(valorTotal.toFixed(2)),
        dataFinal,
        parcelaFmt: formatadorBR.format(parcela),
        jurosTotaisFmt: formatadorBR.format(jurosTotais),
        valorTotalFmt: formatadorBR.format(valorTotal),
      };

      mostrarMensagem.value = true;
    }

    return {
      ...toRefs(state),
      calcularEmprestimo,
      mostrarMensagem,
    };
  },
});
</script>

<style scoped>
.container-fixo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.emprestimos-page {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
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
  width: 50%;
}

.resultado {
  display: none;
}

.form-result.with-result .resultado {
  display: block;
  width: 50%;
  overflow-y: auto;
  padding-right: 10px;
  box-sizing: border-box;
  border: 1.5px solid var(--text-color);
  border-radius: 20px;
  background: transparent;

}

.input-group {
  margin-bottom: 12px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
  font-size: 0.9rem;
}

select#tipoJuros {
  background-color: transparent;
  border-radius: 12px;
  width: 150px;
  text-align: center;
  height: 25px;
  border: 1px solid var(--text-color);
  color: var(--hover-color);
}

#tipoJuros:hover {
  cursor: pointer;
}

input {
  width: 100%;
  padding: 6px;
  font-size: 0.9rem;
  border: none;
  border-bottom: 2px solid #7a7a7a;
  border-radius: 0 0 8px 8px;
  background: transparent;
  outline: none;
  transition: border-color 0.3s ease;
  color: var(--text-color);
}

input:focus {
  border-bottom: 2px solid var(--text-color);
}

button {
  width: 100%;
  padding: 8px;
  background-color: #36be3f;
  color: #fff;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #28d831;
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  max-width: 100%;
}
</style>