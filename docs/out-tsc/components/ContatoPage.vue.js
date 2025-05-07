"use strict";
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var socialLinks = (0, vue_1.ref)([
    { href: 'https://www.linkedin.com/in/ewerton-rodrigues/', icon: 'fab fa-linkedin', title: 'LinkedIn' },
    { href: 'https://ewertondrigues02.github.io/meu-portifolio/', icon: 'fas fa-globe', title: 'Portfólio' },
    { href: 'https://github.com/ewertondrigues02', icon: 'fab fa-github', title: 'GitHub' },
    { href: 'https://www.youtube.com/channel/UCH4G9KvLac6-1MkF_gOwRzQ', icon: 'fab fa-youtube', title: 'YouTube - XeretaSound' },
    { href: 'https://www.youtube.com/@nerdxereta', icon: 'fab fa-youtube', title: 'YouTube - NerdXereta' },
    { href: 'https://www.youtube.com/@iclasscode6274', icon: 'fab fa-youtube', title: 'YouTube - iClassCode' },
    { href: 'https://www.instagram.com/ewertonrrodrigues/', icon: 'fab fa-instagram', title: 'Instagram' },
]);
var projects = (0, vue_1.ref)([
    { id: 1, name: "Java", description: "Projetos diversos em Java.", link: "https://github.com/ewertondrigues02/java", iconClass: "fas fa-book" },
    { id: 2, name: "Site Salário", description: "Simulador de cálculo salarial em Vue.", link: "https://github.com/ewertondrigues02/site-salario", iconClass: "fas fa-coins" },
    { id: 3, name: "Banco Digital", description: "Aplicação Java para simular um banco digital.", link: "https://github.com/ewertondrigues02/banco-digital", iconClass: "fas fa-money-check-alt" },
    { id: 4, name: "Site Anime", description: "Site com catálogo de animes.", link: "https://github.com/ewertondrigues02/site-anime", iconClass: "fas fa-film" },
    { id: 5, name: "Microserviço: Criação de Pedido", description: "Microserviço com Spring Boot para pedidos.", link: "https://github.com/ewertondrigues02/micro-service-criacao-de-pedido", iconClass: "fas fa-box" },
    { id: 6, name: "Microserviço: Agendamento de Consultas", description: "Agendamento médico com Spring Boot.", link: "https://github.com/ewertondrigues02/agendamento-consultas", iconClass: "fas fa-calendar-check" },
    { id: 7, name: "MongoDB Workshop", description: "API com MongoDB + Spring Boot.", link: "https://github.com/ewertondrigues02/workshopp-spring-boot-mongodb", iconClass: "fas fa-database" },
    { id: 8, name: "Web Services com Spring Boot", description: "Serviços escaláveis com Spring Boot e JPA.", link: "https://github.com/ewertondrigues02/web-services-escalaveis-com-spring-boot-jpa-e-hibernate", iconClass: "fas fa-server" },
    { id: 9, name: "Conversão de Moedas", description: "Conversor de moedas com microserviço.", link: "https://github.com/ewertondrigues02/micro-services-conversao", iconClass: "fas fa-exchange-alt" },
    { id: 10, name: "Loja de Livros", description: "Loja virtual usando Thymeleaf.", link: "https://github.com/ewertondrigues02/loja-livros-projeto-fullstack", iconClass: "fas fa-book-open" },
    { id: 11, name: "Gestão de Pessoas", description: "API para cadastro de pessoas.", link: "https://github.com/ewertondrigues02/gestao-pessoas", iconClass: "fas fa-users" },
    { id: 12, name: "Previsão de Vendas", description: "Sistema para previsão de vendas.", link: "https://github.com/ewertondrigues02/previsao-de-vendas", iconClass: "fas fa-chart-line" },
    { id: 13, name: "Análise de Crédito", description: "Analisador de crédito para clientes.", link: "https://github.com/ewertondrigues02/analise-de-credito", iconClass: "fas fa-credit-card" },
    { id: 14, name: "Site Adote um Animal", description: "Site para adoção de animais.", link: "https://github.com/ewertondrigues02/site-adote-um-animal", iconClass: "fas fa-paw" },
    { id: 15, name: "Calculadora Java", description: "Calculadora simples em Java.", link: "https://github.com/ewertondrigues02/calculadora-java", iconClass: "fas fa-calculator" },
    { id: 16, name: "Gerador de CPF", description: "Geração de CPFs válidos.", link: "https://github.com/ewertondrigues02/gerador-de-cpf", iconClass: "fas fa-id-card" },
    { id: 17, name: 'Paleta de Cores', description: 'Gera uma nova paleta de cores aleatória com seus respectivos códigos HEX.', link: 'https://github.com/ewertondrigues02/paleta-de-cores', iconClass: "fas fa-palette" },
    { id: 18, name: 'Formulário com Validação', description: 'Formulário em JavaScript com mensagens de erro e campos destacados.', link: 'https://github.com/ewertondrigues02/formulario-com-validacao', iconClass: "fas fa-file-alt" },
    { id: 19, name: 'Automação em Python', description: 'Web scraping, automação de formulários, e-mails e tarefas com Python.', link: 'https://github.com/ewertondrigues02/automacao-em-python', iconClass: "fab fa-python" },
    { id: 20, name: 'Engenharia de Dados', description: 'Projetos com Airflow, Snowflake, dbt, PostgreSQL, Power BI e mais.', link: 'https://github.com/ewertondrigues02/Engenharia-de-Dados', iconClass: "fas fa-database" },
    { id: 21, name: 'Web Scraping - SpaceMoney', description: 'Coleta automatizada de notícias econômicas com Selenium e Python.', link: 'https://github.com/ewertondrigues02/web-scraping', iconClass: "fas fa-globe" },
    { id: 22, name: 'Análise - Banco Contoso', description: 'Análise de 15 milhões de linhas do Banco Contoso com SQL Server e Excel.', link: 'https://github.com/ewertondrigues02/Analise-de-Dados-Banco-Contoso', iconClass: "fas fa-chart-bar" },
    { id: 23, name: 'Análise - Telecomunicação', description: 'Desafio e insights com dados reais de uma empresa de telecom.', link: 'https://github.com/ewertondrigues02/Analise-de-Dados-Empresa-de-Telecomunicacao', iconClass: "fas fa-building" },
    { id: 24, name: 'Análise - Imóveis', description: 'Exploração de dados de uma seguradora fictícia com Python.', link: 'https://github.com/ewertondrigues02/Analise-de-Dados-de-Imoveis', iconClass: "fas fa-home" },
    { id: 25, name: 'Dados do COVID-19', description: 'Estudo do impacto da COVID-19 em 188 países com Python, Excel e BI.', link: 'https://github.com/ewertondrigues02/Dados-do-COVID-19', iconClass: "fas fa-syringe" },
    { id: 26, name: 'Java Design Patterns (Fork)', description: 'Padrões de projeto em Java implementados em um repositório modelo.', link: 'https://github.com/ewertondrigues02/java-design-patterns', iconClass: "fas fa-cogs" },
    { id: 27, name: 'Spring Boot (Fork)', description: 'Fork oficial do projeto Spring Boot da Spring Team.', link: 'https://github.com/ewertondrigues02/spring-boot', iconClass: "fas fa-file-code" },
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['footer-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['project-info']} */ ;
/** @type {__VLS_StyleScopedClasses['project-info']} */ ;
/** @type {__VLS_StyleScopedClasses['project-info']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container-fixo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "contato-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "descricao" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "footer-icons" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.socialLinks)); _i < _a.length; _i++) {
    var link = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        key: (link.title),
        href: (link.href),
        target: "_blank",
        title: (link.title),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)(__assign({ class: (link.icon) }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "subtitulo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "projects-grid" }));
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.projects)); _b < _c.length; _b++) {
    var project = _c[_b][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (project.id) }, { class: "project-card" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)(__assign({ class: (project.iconClass + ' project-icon') }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "project-info" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (project.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (project.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (project.link),
        target: "_blank",
    });
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['contato-page']} */ ;
/** @type {__VLS_StyleScopedClasses['descricao']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-icons']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitulo']} */ ;
/** @type {__VLS_StyleScopedClasses['projects-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['project-info']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            socialLinks: socialLinks,
            projects: projects,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
