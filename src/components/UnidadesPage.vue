<template>
  <div class="container-fixo">
    <div class="unidades-page">
      <h2>Conversor de Unidades de Medida</h2>

      <div :class="['form-result', { 'with-result': resultado }]">
        <!-- Formulário -->
        <form @submit.prevent="converterUnidade" class="form-lado">
          <div class="input-group">
            <label for="valor">Valor:</label>
            <input type="number" v-model.number="valor" id="valor" placeholder="Ex: 10" required />
          </div>

          <div class="input-group">
            <label for="unidadeOrigem">Unidade de Origem:</label>
            <select v-model="unidadeOrigem" id="unidadeOrigem" required>
              <option v-for="unidade in unidadesDisponiveis" :key="unidade" :value="unidade">{{ unidade }}</option>
            </select>
          </div>

          <div class="input-group">
            <label for="unidadeDestino">Unidade de Destino:</label>
            <select v-model="unidadeDestino" id="unidadeDestino" required>
              <option v-for="unidade in unidadesDisponiveis" :key="unidade" :value="unidade">{{ unidade }}</option>
            </select>
          </div>

          <button type="submit">Converter</button>
        </form>

        <!-- Resultado -->
        <div v-if="resultado" class="resultado">
          <h3>Resultado</h3>
          <p><strong>{{ valor }} {{ unidadeOrigem }} equivalem a:</strong> {{ resultado }} {{ unidadeDestino }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'UnidadesPage',
  setup() {
    const state = reactive({
      valor: null as number | null,
      unidadeOrigem: 'metros',
      unidadeDestino: 'quilômetros',
      resultado: null as string | null,
      unidadesDisponiveis: [
        'metros', 'quilômetros', 'centímetros', 'milímetros', 'gramas', 'quilos', 'litros', 'mililitros', 'segundos', 'minutos', 'horas', 'dias'
      ],
      conversaoUnidades: {
        metros: { metros: 1, quilômetros: 0.001, centímetros: 100, milímetros: 1000 },
        quilômetros: { metros: 1000, quilômetros: 1, centímetros: 100000, milímetros: 1000000 },
        centímetros: { metros: 0.01, quilômetros: 0.00001, centímetros: 1, milímetros: 10 },
        milímetros: { metros: 0.001, quilômetros: 0.000001, centímetros: 0.1, milímetros: 1 },
        gramas: { gramas: 1, quilos: 0.001 },
        quilos: { gramas: 1000, quilos: 1 },
        litros: { litros: 1, mililitros: 1000 },
        mililitros: { litros: 0.001, mililitros: 1 },
        segundos: { segundos: 1, minutos: 1 / 60, horas: 1 / 3600, dias: 1 / 86400 },
        minutos: { segundos: 60, minutos: 1, horas: 1 / 60, dias: 1 / 1440 },
        horas: { segundos: 3600, minutos: 60, horas: 1, dias: 1 / 24 },
        dias: { segundos: 86400, minutos: 1440, horas: 24, dias: 1 },
      },
    });

    // Função para realizar a conversão de unidade
    function converterUnidade() {
      if (!state.valor || state.valor <= 0) {
        state.resultado = 'Informe um valor válido para conversão.';
        return;
      }

      const taxaConversao = state.conversaoUnidades[state.unidadeOrigem]?.[state.unidadeDestino];

      if (taxaConversao !== undefined) {
        const resultado = state.valor * taxaConversao;
        state.resultado = resultado.toFixed(2);
      } else {
        state.resultado = 'Conversão indisponível.';
      }
    }

    return {
      ...toRefs(state),
      converterUnidade,
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

.unidades-page {
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

select {
  background-color: transparent;
  border-radius: 12px;
  width: 150px;
  text-align: center;
  height: 25px;
  border: 1px solid var(--text-color);
  color: var(--hover-color);
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
</style>
