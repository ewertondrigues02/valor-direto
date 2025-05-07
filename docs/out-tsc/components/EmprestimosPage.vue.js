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
exports.default = (0, vue_1.defineComponent)({
    name: 'EmprestimosPage',
    setup: function () {
        var formatadorBR = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        var state = (0, vue_1.reactive)({
            valor: null,
            juros: null,
            prazo: null,
            tipoJuros: 'composto',
            dataInicio: '',
            resultado: null,
        });
        var mostrarMensagem = (0, vue_1.ref)(false);
        function calcularEmprestimo() {
            var valor = state.valor, juros = state.juros, prazo = state.prazo, tipoJuros = state.tipoJuros, dataInicio = state.dataInicio;
            if (!valor || !prazo)
                return;
            var taxa = juros / 100;
            var parcela = 0;
            var valorTotal = 0;
            if (tipoJuros === 'composto') {
                parcela =
                    valor *
                        (taxa * Math.pow(1 + taxa, prazo)) /
                        (Math.pow(1 + taxa, prazo) - 1);
                valorTotal = parcela * prazo;
            }
            else {
                valorTotal = valor * (1 + taxa * prazo);
                parcela = valorTotal / prazo;
            }
            var jurosTotais = valorTotal - valor;
            var dtIni = new Date(dataInicio);
            dtIni.setMonth(dtIni.getMonth() + prazo);
            var dataFinal = dtIni.toISOString().split('T')[0];
            state.resultado = {
                parcela: parseFloat(parcela.toFixed(2)),
                jurosTotais: parseFloat(jurosTotais.toFixed(2)),
                valorTotal: parseFloat(valorTotal.toFixed(2)),
                dataFinal: dataFinal,
                parcelaFmt: formatadorBR.format(parcela),
                jurosTotaisFmt: formatadorBR.format(jurosTotais),
                valorTotalFmt: formatadorBR.format(valorTotal),
            };
            mostrarMensagem.value = true;
        }
        return __assign(__assign({}, (0, vue_1.toRefs)(state)), { calcularEmprestimo: calcularEmprestimo, mostrarMensagem: mostrarMensagem });
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
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
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "container-fixo" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "emprestimos-page" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
if (__VLS_ctx.mostrarMensagem) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mensagem-explicativa" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (['form-result', { 'with-result': __VLS_ctx.resultado }]) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.calcularEmprestimo) }, { class: "form-lado" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "valor",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    id: "valor",
    placeholder: "R$ 10.000",
    required: true,
});
(__VLS_ctx.valor);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "prazo",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    id: "prazo",
    placeholder: "Ex: 24",
    required: true,
});
(__VLS_ctx.prazo);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "juros",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    step: "0.01",
    id: "juros",
    placeholder: "Ex: 2.5",
    required: true,
});
(__VLS_ctx.juros);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "tipoJuros",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: (__VLS_ctx.tipoJuros),
    id: "tipoJuros",
    required: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "composto",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "simples",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "input-group" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "dataInicio",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "date",
    id: "dataInicio",
    required: true,
});
(__VLS_ctx.dataInicio);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.resultado) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "resultado" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.parcelaFmt);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.jurosTotaisFmt);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.valorTotalFmt);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.resultado.dataFinal);
}
/** @type {__VLS_StyleScopedClasses['container-fixo']} */ ;
/** @type {__VLS_StyleScopedClasses['emprestimos-page']} */ ;
/** @type {__VLS_StyleScopedClasses['mensagem-explicativa']} */ ;
/** @type {__VLS_StyleScopedClasses['form-result']} */ ;
/** @type {__VLS_StyleScopedClasses['with-result']} */ ;
/** @type {__VLS_StyleScopedClasses['form-lado']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['resultado']} */ ;
var __VLS_dollars;
var __VLS_self;
