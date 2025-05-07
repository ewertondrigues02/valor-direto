<template>
  <div class="container-fixo">
    <div class="moedas-page">
      <h2>Conversor de Moedas</h2>

      <div class="form-result" :class="{ 'with-result': resultado }">
        <form @submit.prevent="converterMoeda" class="form-lado">
          <div class="input-group">
            <label for="valor">Valor:</label>
            <input type="number" v-model.number="valor" id="valor" placeholder="Ex: 100" step="0.01" min="0.01"
              required />

          </div>

          <div class="input-group">
            <label for="moedaOrigem">Moeda de Origem:</label>
            <select v-model="moedaOrigem" id="moedaOrigem" required>
              <option v-for="moeda in moedasDisponiveis" :key="moeda" :value="moeda">{{ moeda }}</option>
            </select>
          </div>

          <div class="input-group">
            <label for="moedaDestino">Moeda de Destino:</label>
            <select v-model="moedaDestino" id="moedaDestino" required>
              <option v-for="moeda in moedasDisponiveis" :key="moeda" :value="moeda">{{ moeda }}</option>
            </select>
          </div>

          <button type="submit">Converter</button>
        </form>

        <div v-if="resultado" class="resultado">
          <h3>Resultado</h3>
          <p><strong>{{ valor }} {{ moedaOrigem }}</strong> equivalem a:</p>
          <p><strong>{{ resultado }}</strong></p>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'MoedasPage',
  setup() {

    const state = reactive({
      valor: 0 as number,
      moedaOrigem: 'USD',
      moedaDestino: 'BRL',
      resultado: null as string | null,
      moedasDisponiveis: [
        'USD', 'EUR', 'BRL', 'GBP', 'JPY', 'ARS', 'AUD', 'CAD', 'CHF', 'CNY',
        'INR', 'MXN', 'ZAR', 'NOK', 'SEK', 'DKK', 'NZD', 'CLP', 'COP', 'TRY',
        'RUB', 'PLN', 'HKD', 'SGD', 'ILS', 'KRW', 'AED',
      ],
      taxasDeCambio: {
        USD: 1.00,
        EUR: 0.94,
        BRL: 5.35,
        GBP: 0.81,
        JPY: 133.30,
        ARS: 350.50,
        AUD: 1.53,
        CAD: 1.36,
        CHF: 0.92,
        CNY: 7.14,
        INR: 83.14,
        MXN: 18.17,
        ZAR: 19.31,
        NOK: 10.20,
        SEK: 10.90,
        DKK: 7.04,
        NZD: 1.64,
        CLP: 823.56,
        COP: 4683.99,
        TRY: 18.90,
        RUB: 74.79,
        PLN: 4.56,
        HKD: 7.85,
        SGD: 1.35,
        ILS: 3.69,
        KRW: 1313.14,
        AED: 3.67
      }
    });

    const formatar = (valor: number, moeda: string) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: moeda,
      }).format(valor);

    function converterMoeda() {
      if (state.valor === null || state.valor <= 0 || !state.moedaOrigem || !state.moedaDestino) {
        state.resultado = 'Informe um valor válido para conversão.';
        return;
      }

      const taxaOrigem = state.taxasDeCambio[state.moedaOrigem];
      const taxaDestino = state.taxasDeCambio[state.moedaDestino];

      if (taxaOrigem === undefined || taxaDestino === undefined) {
        state.resultado = 'Conversão indisponível.';
        return;
      }

      const conversao = (state.valor * taxaDestino) / taxaOrigem;
      state.resultado = `${state.valor} ${state.moedaOrigem} equivalem a: ${conversao.toFixed(2)} ${state.moedaDestino}`;
    }

    return {
      ...toRefs(state),
      converterMoeda,
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

.moedas-page {
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
  display: block;
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

select,
input {
  width: 100%;
  padding: 6px;
  font-size: 0.9rem;
  border: 1px solid var(--text-color);
  border-radius: 8px;
  background: transparent;
  color: var(--hover-color);
  outline: none;
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
</style>
