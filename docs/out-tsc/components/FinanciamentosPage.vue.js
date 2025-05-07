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
var formatadorBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
var state = (0, vue_1.reactive)({
    valorBem: null,
    entrada: null,
    prazo: null,
    juros: null,
    tipoAmortizacao: 'PRICE',
    tarifasAdicionais: null,
    valorResidual: null,
    rendaMensal: null,
    dataInicio: '',
    resultado: null,
});
function calcularFinanciamento() {
    var valorBem = state.valorBem, entrada = state.entrada, prazo = state.prazo, juros = state.juros, tipoAmortizacao = state.tipoAmortizacao, tarifasAdicionais = state.tarifasAdicionais, valorResidual = state.valorResidual, rendaMensal = state.rendaMensal, dataInicio = state.dataInicio;
    var valorFinanciado = valorBem - entrada;
    var taxa = juros / 100;
    var parcelas = [];
    var totalPago = 0;
    var jurosTotais = 0;
    if (tipoAmortizacao === 'PRICE') {
        var parcelaFixa = valorFinanciado
            * (taxa * Math.pow(1 + taxa, prazo))
            / (Math.pow(1 + taxa, prazo) - 1);
        parcelas = [];
        for (var i = 0; i < prazo; i++) {
            parcelas.push(parcelaFixa);
        }
        totalPago = parcelaFixa * prazo;
        jurosTotais = totalPago - valorFinanciado;
    }
    else {
        var amortizacao = valorFinanciado / prazo;
        var saldo = valorFinanciado;
        for (var i = 0; i < prazo; i++) {
            var parcela = amortizacao + saldo * taxa;
            parcelas.push(parcela);
            jurosTotais += saldo * taxa;
            saldo -= amortizacao;
        }
        totalPago = parcelas.reduce(function (a, b) { return a + b; }, 0);
    }
    totalPago += tarifasAdicionais + valorResidual;
    var dt = new Date(dataInicio);
    dt.setMonth(dt.getMonth() + prazo);
    var dataFinal = dt.toISOString().split('T')[0];
    var maiorParcela = parcelas.length ? Math.max.apply(Math, parcelas) : 0;
    var comprometimento = rendaMensal
        ? (maiorParcela / rendaMensal) * 100
        : 0;
    state.resultado = {
        valorFinanciado: formatadorBR.format(valorFinanciado),
        parcelas: parcelas.map(function (p) { return formatadorBR.format(p); }),
        parcelaMedia: formatadorBR.format(totalPago / prazo),
        jurosTotais: formatadorBR.format(jurosTotais),
        totalPago: formatadorBR.format(totalPago),
        dataFinal: dataFinal,
        comprometimento: "".concat(comprometimento.toFixed(1), "% da renda"),
        alerta: comprometimento > 30
            ? '🚨 Comprometimento superior a 30% da renda!'
            : '✅ Dentro do limite saudável',
    };
}
var resultado = (0, vue_1.toRefs)(state).resultado;
var _a = (0, vue_1.toRefs)(state), valorBem = _a.valorBem, entrada = _a.entrada, prazo = _a.prazo, juros = _a.juros, tipoAmortizacao = _a.tipoAmortizacao, tarifasAdicionais = _a.tarifasAdicionais, valorResidual = _a.valorResidual, rendaMensal = _a.rendaMensal, dataInicio = _a.dataInicio;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container-fixo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "emprestimos-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "form-result" }, { class: ({ 'with-result': __VLS_ctx.resultado }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.calcularFinanciamento) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "valorBem",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "valorBem",
    placeholder: "R$ 50.000",
    required: true,
});
(__VLS_ctx.valorBem);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "entrada",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "entrada",
    placeholder: "R$10.000",
});
(__VLS_ctx.entrada);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "prazo",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "prazo",
    placeholder: "36",
    required: true,
});
(__VLS_ctx.prazo);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "juros",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "juros",
    placeholder: "1,5",
    required: true,
});
(__VLS_ctx.juros);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "tipoAmortizacao",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    id: "tipoAmortizacao",
    value: (__VLS_ctx.tipoAmortizacao),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "PRICE",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "SAC",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "tarifasAdicionais",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "tarifasAdicionais",
    placeholder: "R$ 500",
});
(__VLS_ctx.tarifasAdicionais);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "valorResidual",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "valorResidual",
    placeholder: "R$ 2.000",
});
(__VLS_ctx.valorResidual);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "rendaMensal",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "rendaMensal",
    placeholder: "R$ 4.000",
    required: true,
});
(__VLS_ctx.rendaMensal);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "dataInicio",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "dataInicio",
    type: "date",
    required: true,
});
(__VLS_ctx.dataInicio);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.resultado) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "resultado" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.valorFinanciado);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.parcelaMedia);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.jurosTotais);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.totalPago);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.dataFinal);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.comprometimento);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.alerta);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['emprestimos-page']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            calcularFinanciamento: calcularFinanciamento,
            resultado: resultado,
            valorBem: valorBem,
            entrada: entrada,
            prazo: prazo,
            juros: juros,
            tipoAmortizacao: tipoAmortizacao,
            tarifasAdicionais: tarifasAdicionais,
            valorResidual: valorResidual,
            rendaMensal: rendaMensal,
            dataInicio: dataInicio,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
