import { createRouter, createWebHistory } from 'vue-router';
import EmprestimosPage from './components/EmprestimosPage.vue'; 
import FinanciamentosPage from './components/FinanciamentosPage.vue';
import RescisaoPage from './components/RescisaoPage.vue'; 
import SeguroPage from './components/SecurePage.vue'; 
import HorasExtrasPage from './components/HorasExtrasPage.vue'; 
import DecimoPage from './components/DecimoPage.vue'; 
import FeriasPage from './components/FeriasPage.vue'; 
import MoedasPage from './components/MoedasPage.vue'; 
import UnidadesPage from './components/UnidadesPage.vue'; 
import ContatoPage from './components/ContatoPage.vue'; 

const routes = [
  { path: '/emprestimos', name: 'emprestimos', component: EmprestimosPage },
  { path: '/financiamentos', name: 'financiamentos', component: FinanciamentosPage },
  { path: '/rescisao', name: 'rescisao', component: RescisaoPage },
  { path: '/seguro', name: 'seguro', component: SeguroPage },
  { path: '/horasExtras', name: 'horasExtras', component: HorasExtrasPage },
  { path: '/decimo', name: 'decimo', component: DecimoPage },
  { path: '/ferias', name: 'ferias', component: FeriasPage },
  { path: '/moedas', name: 'moedas', component: MoedasPage },
  { path: '/unidades', name: 'unidades', component: UnidadesPage },
  { path: '/contato', name: 'contato', component: ContatoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
