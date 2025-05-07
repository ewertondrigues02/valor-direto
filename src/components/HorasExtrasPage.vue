<template>
  <div class="container-fixo">
    <div class="horas-extras-page">
      <h2>Calculadora de Horas Extras</h2>

      <div class="form-result" :class="{ 'with-result': resultado }">
        <form class="form-lado" @submit.prevent="calcularHorasExtras">

          <div class="input-group">
            <label for="salarioMensal">
              Salário Mensal (R$):
              <small>Para cálculo da hora base /220h</small>
            </label>
            <input id="salarioMensal" type="number" step="0.01" v-model.number="salarioMensal" placeholder="R$ 3.000.00"
              required />
          </div>

          <div class="input-group">
            <label for="he50">
              Horas Extras 50%
              <small>Acresce 50% sobre a hora normal</small>
            </label>
            <input id="he50" type="number" step="0.1" v-model.number="he50" placeholder="Qtde HE 50%" required />
          </div>

          <div class="input-group">
            <label for="heNoturna">
              Horas Noturnas 60%
              <small>Intervalo 22h–5h: +60% de adicional</small>
            </label>
            <input id="heNoturna" type="number" step="0.1" v-model.number="heNoturna" placeholder="Qtde HE Noturna"
              required />
          </div>

          <div class="input-group">
            <label for="he100">
              Horas em Feriado/Repouso 100%
              <small>Hora em domingos/feriados dobra valor</small>
            </label>
            <input id="he100" type="number" step="0.1" v-model.number="he100" placeholder="Qtde HE 100%" required />
          </div>

          <div class="input-group">
            <label for="bancoHoras">
              Banco de Horas (h):
              <small>Compensação em folgas (opcional)</small>
            </label>
            <input id="bancoHoras" type="number" step="0.1" v-model.number="bancoHoras"
              placeholder="Qtde a compensar" />
          </div>

          <button type="submit">Calcular Valor</button>
        </form>

        <div v-if="resultado" class="resultado">
          <h3>Resultado</h3>
          <p><strong>Hora Normal (base):</strong> {{ resultado.horaNormalFmt }}</p>
          <p><strong>Total HE 50%:</strong> {{ resultado.total50Fmt }}</p>
          <p><strong>Total HE Noturna 60%:</strong> {{ resultado.totalNoturnaFmt }}</p>
          <p><strong>Total HE 100%:</strong> {{ resultado.total100Fmt }}</p>
          <p><strong>Total Horas Extras Pagas:</strong> {{ resultado.totalGeralFmt }}</p>
          <p><strong>Total Horas Trabalhadas:</strong> {{ resultado.totalHoras }}h</p>
          <p v-if="bancoHoras"><strong>Banco de Horas a Compensar:</strong> {{ bancoHoras }}h</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const salarioMensal = ref<number | null>(null);
const he50 = ref<number>(null);
const heNoturna = ref<number>(null);
const he100 = ref<number>(null);
const bancoHoras = ref<number>(null);

const resultado = ref<null | {
  horaNormalFmt: string;
  total50Fmt: string;
  totalNoturnaFmt: string;
  total100Fmt: string;
  totalGeralFmt: string;
  totalHoras: number;
}>(null);

function calcularHorasExtras() {
  if (salarioMensal.value === null) return;
  const baseHoras = 220;
  const horaNormal = salarioMensal.value / baseHoras;

  const valor50 = horaNormal * 1.5 * he50.value;
  const valorNoturna = horaNormal * 1.6 * heNoturna.value;
  const valor100 = horaNormal * 2 * he100.value;

  const totalGeral = valor50 + valorNoturna + valor100;
  const totalHoras = he50.value + heNoturna.value + he100.value;

  resultado.value = {
    horaNormalFmt: formatBRL.format(horaNormal),
    total50Fmt: formatBRL.format(valor50),
    totalNoturnaFmt: formatBRL.format(valorNoturna),
    total100Fmt: formatBRL.format(valor100),
    totalGeralFmt: formatBRL.format(totalGeral),
    totalHoras
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

.horas-extras-page {
  width: 100%;
  max-width: 700px;
  padding: 18px;
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
  transition: width 0.3s ease;
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
  margin-left: 1rem;
}

.input-group label {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

input {
  width: 100%;
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

input:focus {
  border-bottom-color: var(--text-color);
}

button {
  grid-column: 1 / -1;
  padding: 12px;
  background:  #36be3f;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 50%;
  margin-left: 25%;
}

button:hover {
  background:  #28d831;
}

.resultado {
  margin-top: 20px;
  padding: 16px;
  border-radius: 20px;
  background: transparent;
  line-height: 1.5;
  border: 1.5px solid var(--text-color);
  width: 30%;
  font-size: 14px;
  margin-bottom: 4rem;
  margin-left: 3rem;
}

.resultado p+p {
  margin-top: 8px;
}

@media (max-width: 480px) {
  form {
    grid-template-columns: 1fr;
  }

  .resultado {
    width: 100%;
  }
}
</style>