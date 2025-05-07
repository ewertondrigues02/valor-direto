<template>
  <div class="layout" :class="theme">

    <div class="circle-wrapper">
      <div class="circle circle-red"></div>
      <div class="circle circle-green"></div>
      <div class="circle circle-blue"></div>
    </div>

    <!-- Conteúdo principal -->
    <TheHeader />
    <main class="content">
      <router-view />
    </main>

    <!-- Botão de troca de tema -->
    <button class="theme-toggle" @click="toggleTheme">
      <span v-if="theme === 'dark'">🌙</span>
      <span v-if="theme === 'light'">🌞</span>
    </button>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

const theme = ref('light')

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  if (localStorage.getItem('theme')) {
    theme.value = localStorage.getItem('theme')!
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
})

watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme)
  document.body.className = newTheme
})
</script>

<style>
#app,
body,
.layout {
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;

}

.circle-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}

.circle {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  opacity: 0.3;
  transition: all 0.3s ease;
}

.dark .circle {
  backdrop-filter: blur(10px) saturate(180%) brightness(1.1);
  -webkit-backdrop-filter: blur(10px) saturate(180%) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.6;
  filter: blur(60px);
}


.circle-red {
  background-color: rgba(255, 0, 0, 0.4);
  top: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}


.circle-green {
  background-color: rgba(0, 255, 0, 0.4);
  top: 40%;
  left: 25%;
  transform: translateX(-50%) translateY(-50%);
}


.circle-blue {
  background-color: rgba(0, 0, 255, 0.4);
  top: 40%;
  left: 75%;
  transform: translateX(-50%) translateY(-50%);
}


main {
  flex: 1;
  padding-bottom: 120px;
  box-sizing: border-box;
}

.theme-toggle {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: transparent;
  color: var(--text-color);
  border: none;
  padding: 8px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2000;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: var(--box-shadow);
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.theme-toggle:hover {
  background-color: #0fff63;
  border: none;
}

.light {
  --header-bg: #00D04A;
  --text-color: #000;
  --footer-bg: #00D04A;
  --footer-text: #000;
  --bg-color: #ffffff;
  --hover-color: #00D04A;
  --box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  --background-glass: rgba(0, 0, 0, 0.1);
  --border-color: rgba(0, 0, 0, 0.1);
}

.dark {
  --header-bg: #333;
  --text-color: #fff;
  --footer-bg: #1e1e1e;
  --footer-text: #f0f0f0;
  --bg-color: #000000;
  --box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
  --background-glass: rgba(255, 255, 255, 0.1);
  --border-color: rgba(255, 255, 255, 0.1);
  --hover-color: #00D04A;
}
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  background: none;
}

.content {
  flex: 1;
}
</style>
