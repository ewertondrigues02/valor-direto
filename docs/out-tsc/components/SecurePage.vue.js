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
var formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
var numSolicitacoes = (0, vue_1.ref)(null);
var mesesTrabalhados = (0, vue_1.ref)(null);
var salario1 = (0, vue_1.ref)(null);
var salario2 = (0, vue_1.ref)(null);
var salario3 = (0, vue_1.ref)(null);
var salarioMinimo = (0, vue_1.ref)(null);
var tetoSeguro = (0, vue_1.ref)(null);
var resultado = (0, vue_1.ref)(null);
function calcularSeguro() {
    // carência não implementada, apenas cálculo de valores
    var media = (salario1.value + salario2.value + salario3.value) / 3;
    var parcela = 0;
    if (media <= salarioMinimo.value) {
        parcela = media * 0.8;
    }
    else if (media <= 1.5 * salarioMinimo.value) {
        parcela = salarioMinimo.value + (media - salarioMinimo.value) * 0.5;
    }
    else {
        parcela = Math.min(media, tetoSeguro.value);
    }
    var numParc = 0;
    if (mesesTrabalhados.value >= 12 && mesesTrabalhados.value < 24)
        numParc = 4;
    else if (mesesTrabalhados.value < 36)
        numParc = 5;
    else if (mesesTrabalhados.value >= 36)
        numParc = 6;
    resultado.value = {
        mediaFmt: formatBRL.format(media),
        parcelaFmt: formatBRL.format(parcela),
        numParcelas: numParc,
    };
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container-fixo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "secure-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "form-result" }, { class: ({ 'with-result': __VLS_ctx.resultado }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.calcularSeguro) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "numSolicitacoes",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "numSolicitacoes",
    type: "number",
    placeholder: "Ex: 1",
    required: true,
});
(__VLS_ctx.numSolicitacoes);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "mesesTrabalhados",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "mesesTrabalhados",
    type: "number",
    placeholder: "Ex: 24",
    required: true,
});
(__VLS_ctx.mesesTrabalhados);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "salario1",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "salario1",
    type: "number",
    step: "0.01",
    placeholder: "Ex: R$ 3.000",
    required: true,
});
(__VLS_ctx.salario1);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "salario2",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "salario2",
    type: "number",
    step: "0.01",
    placeholder: "Ex: R$ 3.200",
    required: true,
});
(__VLS_ctx.salario2);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "salario3",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "salario3",
    type: "number",
    step: "0.01",
    placeholder: "Ex: R$ 3.100",
    required: true,
});
(__VLS_ctx.salario3);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "salarioMinimo",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "salarioMinimo",
    type: "number",
    step: "0.01",
    placeholder: "Ex: R$ 1.212",
    required: true,
});
(__VLS_ctx.salarioMinimo);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "tetoSeguro",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "tetoSeguro",
    type: "number",
    step: "0.01",
    placeholder: "Ex: R$ 2.200",
    required: true,
});
(__VLS_ctx.tetoSeguro);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.resultado) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "resultado" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.mediaFmt);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.parcelaFmt);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.numParcelas);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['secure-page']} */ ;
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
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
var __VLS_dollars;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            numSolicitacoes: numSolicitacoes,
            mesesTrabalhados: mesesTrabalhados,
            salario1: salario1,
            salario2: salario2,
            salario3: salario3,
            salarioMinimo: salarioMinimo,
            tetoSeguro: tetoSeguro,
            resultado: resultado,
            calcularSeguro: calcularSeguro,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
