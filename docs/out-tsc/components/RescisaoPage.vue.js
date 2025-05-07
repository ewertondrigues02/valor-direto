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
var formatBRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
var tipoRescisao = (0, vue_1.ref)('semJusta');
var dataAdmissao = (0, vue_1.ref)('');
var dataDemissao = (0, vue_1.ref)('');
var salario = (0, vue_1.ref)(null);
var feriasVencidas = (0, vue_1.ref)(null);
var feriasProporcionais = (0, vue_1.ref)(null);
var decimoProporcional = (0, vue_1.ref)(null);
var resultado = (0, vue_1.ref)(null);
function calcularRescisao() {
    if (!dataAdmissao.value || !dataDemissao.value || salario.value === null)
        return;
    var dtDem = new Date(dataDemissao.value);
    var diasTrabalhados = dtDem.getDate();
    var saldoSal = (diasTrabalhados / 30) * salario.value;
    var feriasVenc = feriasVencidas.value * (salario.value / 12);
    var feriasVencCom = feriasVenc * (4 / 3);
    var feriasProp = feriasProporcionais.value * (salario.value / 12);
    var feriasPropCom = feriasProp * (4 / 3);
    var decimo = decimoProporcional.value * (salario.value / 12);
    var avisoPrev = 0;
    switch (tipoRescisao.value) {
        case 'semJusta':
            avisoPrev = salario.value;
            break;
        case 'comJusta':
            avisoPrev = 0;
            break;
        case 'pedidoEmpregado':
            avisoPrev = salario.value * 0.5;
            break; // meio aviso
        case 'experiencia':
            avisoPrev = 0;
            break;
    }
    var totalBruto = saldoSal + feriasVencCom + feriasPropCom + decimo + avisoPrev;
    resultado.value = {
        saldoSalario: formatBRL.format(saldoSal),
        feriasVencidas: formatBRL.format(feriasVencCom),
        feriasProp: formatBRL.format(feriasPropCom),
        decimo: formatBRL.format(decimo),
        avisoPrevio: formatBRL.format(avisoPrev),
        totalBruto: formatBRL.format(totalBruto),
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "recisao-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "form-result" }, { class: ({ 'with-result': __VLS_ctx.resultado }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.calcularRescisao) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: "tipoRescisao" }, { class: "tipo-recisao" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    id: "tipoRescisao",
    value: (__VLS_ctx.tipoRescisao),
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "semJusta",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "comJusta",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "pedidoEmpregado",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "experiencia",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "dataAdmissao",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "dataAdmissao",
    type: "date",
    required: true,
});
(__VLS_ctx.dataAdmissao);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "dataDemissao",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "dataDemissao",
    type: "date",
    required: true,
});
(__VLS_ctx.dataDemissao);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "salario",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "salario",
    type: "number",
    step: "0.01",
    placeholder: "R$ 3.000,00",
    required: true,
});
(__VLS_ctx.salario);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "feriasVencidas",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "feriasVencidas",
    type: "number",
    placeholder: "12 meses",
    required: true,
});
(__VLS_ctx.feriasVencidas);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "feriasProporcionais",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "feriasProporcionais",
    type: "number",
    placeholder: "4 meses",
    required: true,
});
(__VLS_ctx.feriasProporcionais);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "decimoProporcional",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "decimoProporcional",
    type: "number",
    placeholder: "6 meses",
    required: true,
});
(__VLS_ctx.decimoProporcional);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.resultado) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "resultado" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.saldoSalario);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.feriasVencidas);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.feriasProp);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.decimo);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.avisoPrevio);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.totalBruto);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['recisao-page']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['tipo-recisao']} */ ;
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
            tipoRescisao: tipoRescisao,
            dataAdmissao: dataAdmissao,
            dataDemissao: dataDemissao,
            salario: salario,
            feriasVencidas: feriasVencidas,
            feriasProporcionais: feriasProporcionais,
            decimoProporcional: decimoProporcional,
            resultado: resultado,
            calcularRescisao: calcularRescisao,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
