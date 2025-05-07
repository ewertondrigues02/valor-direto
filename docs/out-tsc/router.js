"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var EmprestimosPage_vue_1 = require("./components/EmprestimosPage.vue");
var FinanciamentosPage_vue_1 = require("./components/FinanciamentosPage.vue");
var RescisaoPage_vue_1 = require("./components/RescisaoPage.vue");
var SecurePage_vue_1 = require("./components/SecurePage.vue");
var HorasExtrasPage_vue_1 = require("./components/HorasExtrasPage.vue");
var DecimoPage_vue_1 = require("./components/DecimoPage.vue");
var FeriasPage_vue_1 = require("./components/FeriasPage.vue");
var MoedasPage_vue_1 = require("./components/MoedasPage.vue");
var UnidadesPage_vue_1 = require("./components/UnidadesPage.vue");
var ContatoPage_vue_1 = require("./components/ContatoPage.vue");
var routes = [
    { path: '/emprestimos', name: 'emprestimos', component: EmprestimosPage_vue_1.default },
    { path: '/financiamentos', name: 'financiamentos', component: FinanciamentosPage_vue_1.default },
    { path: '/rescisao', name: 'rescisao', component: RescisaoPage_vue_1.default },
    { path: '/seguro', name: 'seguro', component: SecurePage_vue_1.default },
    { path: '/horasExtras', name: 'horasExtras', component: HorasExtrasPage_vue_1.default },
    { path: '/decimo', name: 'decimo', component: DecimoPage_vue_1.default },
    { path: '/ferias', name: 'ferias', component: FeriasPage_vue_1.default },
    { path: '/moedas', name: 'moedas', component: MoedasPage_vue_1.default },
    { path: '/unidades', name: 'unidades', component: UnidadesPage_vue_1.default },
    { path: '/contato', name: 'contato', component: ContatoPage_vue_1.default },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
exports.default = router;
