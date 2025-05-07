<template>
  <div class="container-fixo">
    <div class="secure-page">
      <h2>Simulador de Seguro-Desemprego</h2>
      <div class="form-result" :class="{ 'with-result': resultado }">
        <form class="form-lado" @submit.prevent="calcularSeguro">
          <div class="input-group">
            <label for="numSolicitacoes">Número de Solicitações Já Feitas:</label>
            <input id="numSolicitacoes" type="number" v-model.number="numSolicitacoes" placeholder="Ex: 1" required />
          </div>
          <div class="input-group">
            <label for="mesesTrabalhados">Meses Trabalhados (últimos 36m):</label>
            <input id="mesesTrabalhados" type="number" v-model.number="mesesTrabalhados" placeholder="Ex: 24"
              required />
          </div>
          <div class="input-group">
            <label for="salario1">Salário Mês 1 (R$):</label>
            <input id="salario1" type="number" step="0.01" v-model.number="salario1" placeholder="Ex: R$ 3.000" required />
          </div>
          <div class="input-group">
            <label for="salario2">Salário Mês 2 (R$):</label>
            <input id="salario2" type="number" step="0.01" v-model.number="salario2" placeholder="Ex: R$ 3.200" required />
          </div>
          <div class="input-group">
            <label for="salario3">Salário Mês 3 (R$):</label>
            <input id="salario3" type="number" step="0.01" v-model.number="salario3" placeholder="Ex: R$ 3.100" required />
          </div>
          <div class="input-group">
            <label for="salarioMinimo">Salário Mínimo Atual (R$):</label>
            <input id="salarioMinimo" type="number" step="0.01" v-model.number="salarioMinimo" placeholder="Ex: R$ 1.212"
              required />
          </div>
          <div class="input-group">
            <label for="tetoSeguro">Teto do Seguro (R$):</label>
            <input id="tetoSeguro" type="number" step="0.01" v-model.number="tetoSeguro" placeholder="Ex: R$ 2.200"
              required />
          </div>
          <button type="submit">Calcular Seguro</button>
        </form>
        <div v-if="resultado" class="resultado">
          <h3>Resultado</h3>
          <p><strong>Salário-Média:</strong> {{ resultado.mediaFmt }}</p>
          <p><strong>Valor da Parcela:</strong> {{ resultado.parcelaFmt }}</p>
          <p><strong>Número de Parcelas:</strong> {{ resultado.numParcelas }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const numSolicitacoes = ref<number>(null);
const mesesTrabalhados = ref<number>(null);
const salario1 = ref<number>(null);
const salario2 = ref<number>(null);
const salario3 = ref<number>(null);
const salarioMinimo = ref<number>(null);
const tetoSeguro = ref<number>(null);
const resultado = ref<null | { mediaFmt: string; parcelaFmt: string; numParcelas: number }>(null);

function calcularSeguro() {
  // carência não implementada, apenas cálculo de valores
  const media = (salario1.value + salario2.value + salario3.value) / 3;
  let parcela = 0;
  if (media <= salarioMinimo.value) {
    parcela = media * 0.8;
  } else if (media <= 1.5 * salarioMinimo.value) {
    parcela = salarioMinimo.value + (media - salarioMinimo.value) * 0.5;
  } else {
    parcela = Math.min(media, tetoSeguro.value);
  }
  let numParc = 0;
  if (mesesTrabalhados.value >= 12 && mesesTrabalhados.value < 24) numParc = 4;
  else if (mesesTrabalhados.value < 36) numParc = 5;
  else if (mesesTrabalhados.value >= 36) numParc = 6;

  resultado.value = {
    mediaFmt: formatBRL.format(media),
    parcelaFmt: formatBRL.format(parcela),
    numParcelas: numParc,
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
  padding: 0;
  
}

.secure-page {
  width: 100%;
  max-width: 1000px;
  padding: 15px;
  background: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
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
  transition: width .3s;
}

.form-result.with-result .form-lado {
  width: 50%;
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
  font-size: .9rem;
  margin-bottom: 4px;
}

input {
  width: 100%;
  padding: 6px;
  font-size: .9rem;
  border: none;
  border-bottom: 2px solid #7a7a7a;
  border-radius: 0 0 8px 8px;
  background: transparent;
  outline: none;
  transition: border-color .3s;
  color: var(--text-color);
  
}

input:focus {
  border-bottom-color: var(--text-color);
}

button {
  grid-column: 1/-1;
  padding: 12px;
  background: var(--hover-color);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background .3s;
  width: 50%;
  margin-left: 25%;
}

button:hover {
  background-color: #3eee49;
}

.resultado {
  margin-top: 20px;
  margin-left: 2rem;
  padding: 14px;
  border-radius: 20px;
  background: transparent;
  line-height: 1.5;
  border: 1.5px solid var(--text-color);
  width: 30%;
  margin-bottom: 1rem;
}

@media(max-width:480px) {
  form {
    grid-template-columns: 1fr;
  }

  .resultado {
    width: 100%;
  }
}
</style>
