<template>
  <div class="container-fixo">
    <div class="decimo-page">
      <h2>Simulador de 13º Salário</h2>

      <div class="form-result" :class="{ 'with-result': resultado }">
        <form class="form-lado" @submit.prevent="calcularDecimo">
          <div class="input-group">
            <label for="salarioBase">
              Salário Base (R$):
              <small>Salário mensal completo</small>
            </label>
            <input id="salarioBase" type="number" step="0.01" v-model.number="salarioBase" placeholder="Ex: R$ 3.000"
              required />
          </div>
          <div class="input-group">
            <label for="mesesTrabalhados">
              Meses Trabalhados no Ano:
              <small>De 1 a 12 meses</small>
            </label>
            <input id="mesesTrabalhados" type="number" v-model.number="mesesTrabalhados" min="1" max="12"
              placeholder="Ex: 8" required />
          </div>
          <div class="input-group checkbox-group">
            <input id="adicional" type="checkbox" v-model="incluirAdicional" />
            <label for="adicional" class="custom-checkbox-label">
              <span class="custom-checkbox"></span>
              <div class="checkbox-text">
                Adicional 1/12 (R$)
                <small>1/12 do salário</small>
              </div>
            </label>
          </div>
          <button type="submit">Calcular 13º</button>
        </form>

        <div v-if="resultado" class="resultado">
          <h3>Resultado do 13º</h3>
          <p><strong>13º Proporcional:</strong> {{ resultado.decimoProporcionalFmt }}</p>
          <p v-if="incluirAdicional">
            <strong>Adicional 1/12:</strong> {{ resultado.adicionalFmt }}
          </p>
          <p><strong>Total 13º:</strong> {{ resultado.totalFmt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const salarioBase = ref<number | null>(null);
const mesesTrabalhados = ref<number>(null);
const incluirAdicional = ref<boolean>(false);

const resultado = ref<null | {
  decimoProporcionalFmt: string;
  adicionalFmt: string;
  totalFmt: string;
}>(null);

function calcularDecimo() {
  if (salarioBase.value === null) return;
  const proporcional = (salarioBase.value / 12) * mesesTrabalhados.value;
  const adicional = incluirAdicional.value ? salarioBase.value / 12 : 0;
  const total = proporcional + adicional;

  resultado.value = {
    decimoProporcionalFmt: formatBRL.format(proporcional),
    adicionalFmt: formatBRL.format(adicional),
    totalFmt: formatBRL.format(total)
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

.decimo-page {
  width: 100%;
  max-width: 600px;
  padding: 20px;
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
  width: 100%;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  
}

.input-group label {
  font-weight: bold;
  font-size: 0.9rem;
}

.input-group small {
  font-size: 0.75rem;
  color: #666;
  margin-top: 2px;
}
input[type="number"] {
  margin-top: 4px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #7a7a7a;
  border-radius: 0 0 8px 8px;
  color: var(--text-color);
  padding: 4px 0;
  
}

input[type="number"]:focus {
  outline: none;
  border-color: var(--text-color);
}

.checkbox-group {
  position: relative;
  padding-left: 40px;
  margin-bottom: 12px;
}

.checkbox-group input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;
  position: relative;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--text-color);
  border-radius: 50%;
  background: transparent;
  transition: background 0.2s, border-color 0.2s;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.custom-checkbox::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: scale(0) rotate(45deg);
  transition: transform 0.2s ease;
}

.checkbox-text {
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  line-height: 1.2;
}

.checkbox-group input:checked+.custom-checkbox-label .custom-checkbox {
  background: #36be3f;
  border-color: #36be3f;
}

.checkbox-group input:checked+.custom-checkbox-label .custom-checkbox::after {
  transform: scale(1) rotate(45deg);
}


button {
  padding: 12px;
  background: #36be3f;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: var(--primary-hover, #28d831);
}

.resultado {
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
  background: transparent;
  line-height: 1.5;
  border: 1px solid var(--text-color);
  width: 100%;
}

.resultado p+p {
  margin-top: 8px;
}

@media (max-width: 480px) {
  .decimo-page {
    max-width: 100%;
  }
}
</style>
