<template>
  <div class="container-fixo">
    <div class="recisao-page">
      <h2>Simulador de Rescisão</h2>

      <div class="form-result" :class="{ 'with-result': resultado }">
        <form class="form-lado" @submit.prevent="calcularRescisao">
          <div class="input-group">
            <label for="tipoRescisao" class="tipo-recisao">Tipo de Rescisão:</label>
            <select id="tipoRescisao" v-model="tipoRescisao" required>
              <option value="semJusta">Sem Justa Causa</option>
              <option value="comJusta">Com Justa Causa</option>
              <option value="pedidoEmpregado">Pedido de Demissão</option>
              <option value="experiencia">Término de Experiência</option>
            </select>
          </div>
          <div class="input-group">
            <label for="dataAdmissao">Data de Admissão:</label>
            <input id="dataAdmissao" type="date" v-model="dataAdmissao" required />
          </div>
          <div class="input-group">
            <label for="dataDemissao">Data de Demissão:</label>
            <input id="dataDemissao" type="date" v-model="dataDemissao" required />
          </div>
          <div class="input-group">
            <label for="salario">Salário Mensal (R$):</label>
            <input id="salario" type="number" step="0.01" v-model.number="salario" placeholder="R$ 3.000,00" required />
          </div>
          <div class="input-group">
            <label for="feriasVencidas">Férias Vencidas (meses):</label>
            <input id="feriasVencidas" type="number" v-model.number="feriasVencidas" placeholder="12 meses" required />
          </div>
          <div class="input-group">
            <label for="feriasProporcionais">Férias Proporcionais (meses):</label>
            <input id="feriasProporcionais" type="number" v-model.number="feriasProporcionais" placeholder="4 meses" required />
          </div>
          <div class="input-group">
            <label for="decimoProporcional">13º Proporcional (meses):</label>
            <input id="decimoProporcional" type="number" v-model.number="decimoProporcional" placeholder="6 meses" required />
          </div>

          <button type="submit">Calcular Rescisão</button>
        </form>

        <div v-if="resultado" class="resultado">
          <h3>Resultado da Rescisão</h3>
          <p><strong>Saldo de Salário:</strong> {{ resultado.saldoSalario }}</p>
          <p><strong>Férias Vencidas +1/3:</strong> {{ resultado.feriasVencidas }}</p>
          <p><strong>Férias Proporcionais +1/3:</strong> {{ resultado.feriasProp }}</p>
          <p><strong>13º Proporcional:</strong> {{ resultado.decimo }}</p>
          <p><strong>Aviso Prévio:</strong> {{ resultado.avisoPrevio }}</p>
          <p><strong>Total Bruto:</strong> {{ resultado.totalBruto }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formatBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const tipoRescisao = ref<'semJusta'|'comJusta'|'pedidoEmpregado'|'experiencia'>('semJusta');
const dataAdmissao = ref('');
const dataDemissao = ref('');
const salario = ref<number | null>(null);
const feriasVencidas = ref<number>(null);
const feriasProporcionais = ref<number>(null);
const decimoProporcional = ref<number>(null);
const resultado = ref<null | {
  saldoSalario: string;
  feriasVencidas: string;
  feriasProp: string;
  decimo: string;
  avisoPrevio: string;
  totalBruto: string;
}>(null);

function calcularRescisao() {
  if (!dataAdmissao.value || !dataDemissao.value || salario.value === null) return;

  const dtDem = new Date(dataDemissao.value);
  const diasTrabalhados = dtDem.getDate();
  const saldoSal = (diasTrabalhados/30) * salario.value;

  const feriasVenc = feriasVencidas.value*(salario.value/12);
  const feriasVencCom = feriasVenc*(4/3);

  const feriasProp = feriasProporcionais.value*(salario.value/12);
  const feriasPropCom = feriasProp*(4/3);

  const decimo = decimoProporcional.value*(salario.value/12);

  let avisoPrev = 0;
  switch(tipoRescisao.value) {
    case 'semJusta': avisoPrev = salario.value; break;
    case 'comJusta': avisoPrev = 0; break;
    case 'pedidoEmpregado': avisoPrev = salario.value * 0.5; break; // meio aviso
    case 'experiencia': avisoPrev = 0; break;
  }

  const totalBruto = saldoSal + feriasVencCom + feriasPropCom + decimo + avisoPrev;

  resultado.value = {
    saldoSalario: formatBRL.format(saldoSal),
    feriasVencidas: formatBRL.format(feriasVencCom),
    feriasProp: formatBRL.format(feriasPropCom),
    decimo: formatBRL.format(decimo),
    avisoPrevio: formatBRL.format(avisoPrev),
    totalBruto: formatBRL.format(totalBruto),
  };
}
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

.recisao-page {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow, 0 2px 8px rgba(0,0,0,0.1));
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
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

.input-group {
  display: flex;
  flex-direction: column;
  
}

.input-group label {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 4px;
 
}

input,
select {
  width: 100%;
  padding: 6px;
  font-size: 0.9rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid #7a7a7a;
  border-radius:12px;
  outline: none;
  transition: border-color 0.3s ease;
  color: var(--text-color);

}

select {

   color: var(--hover-color);
}

input:focus,
select:focus {
  border-bottom-color: var(--text-color);
  
}

button {
  grid-column: 1 / -1;
  padding: 12px;
  background-color: var(--hover-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 50%;
  margin-left: 25%;
}

button:hover {
  background-color: #2ee437;
}

.resultado {
  margin-top: 20px;
  padding: 16px;
  border-radius: 20px;
  background: transparent;
  line-height: 1.5;
  border: 1.5px solid var(--text-color);
  border-radius: 20px;
  
}

.resultado p + p {
  margin-top: 8px;
  border:  var(--text-color);
}

@media (max-width: 480px) {
  form {
    grid-template-columns: 1fr;
  }
}
</style>
