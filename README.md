
# Simulador Financeiro e Trabalhista

Um conjunto de **aplicativos web** construídos com **Vue 3** e **TypeScript** para facilitar cálculos financeiros e trabalhistas do dia a dia. Inclui:

* **Empréstimos** (Price e Juros Simples)
* **Financiamentos** (Price/SAC + tarifas, residual, comprometimento de renda)
* **Décimo Terceiro Salário** (proporcional + 1/12 opcional)
* **Férias** (remuneração proporcional + 1/3 constitucional)
* **Horas Extras** (50%, noturna 60%, feriado 100%, banco de horas)
* **Rescisão** (várias modalidades: sem justa, com justa, pedido, experiência)
* **Seguro-Desemprego** (média salarial, parcelas, faixas)
* **Conversor de Moedas** (lista de 27 moedas, taxa fixa)
* **Conversor de Unidades** (distância, massa, volume, tempo)
* **Header & Footer** responsivos e temáticos

---

## 🚀 Execução

1. **Clone** o repositório

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```
2. **Instale** dependências

   ```bash
   npm install
   ```
3. **Inicie** o servidor de desenvolvimento

   ```bash
   npm run serve
   ```
4. **Acesse** em `http://localhost:8080/`

---

## 📁 Estrutura

```
src/
├── assets/               # Logos, imagens
├── components/
│   ├── EmpréstimosPage.vue
│   ├── FinanciamentosPage.vue
│   ├── DecimoPage.vue
│   ├── FeriasPage.vue
│   ├── HorasExtrasPage.vue
│   ├── RescisaoPage.vue
│   ├── SecurePage.vue
│   ├── MoedasPage.vue
│   ├── UnidadesPage.vue
│   ├── Header.vue
│   └── Footer.vue
├── router/               # Rotas Vue Router
├── App.vue
└── main.ts
```

---

## 🔧 Componentes

### 1. EmpréstimosPage

* **Inputs**: valor, prazo, juros (simples/composto), data início
* **Output**: parcela mensal, juros totais, valor total, data final

### 2. FinanciamentosPage

* **Inputs**: valor do bem, entrada, prazo, juros, sistema (PRICE/SAC), tarifas, residual, renda, data
* **Output**: valor financiado, parcelas (array), média, juros totais, total, data final, comprometimento de renda, alerta

### 3. DecimoPage

* **Inputs**: salário base, meses trabalhados (1–12), incluir 1/12 (checkbox)
* **Output**: décimo proporcional, adicional 1/12, total

### 4. FeriasPage

* **Inputs**: salário mensal, dias de férias, incluir adicional 1/3 (checkbox)
* **Output**: remuneração proporcional, adicional 1/3, total

### 5. HorasExtrasPage

* **Inputs**: salário mensal, horas extras 50%, noturna 60%, feriado 100%, banco de horas (opcional)
* **Output**: valor hora normal, totais por modalidade, total geral, total horas, banco horas

### 6. RescisaoPage

* **Inputs**: tipo de rescisão, datas admissão/demissão, salário, férias vencidas/proporcionais, 13º proporcional
* **Output**: saldo de salário, férias +1/3, férias proporcionais +1/3, 13º, aviso prévio, total bruto

### 7. SecurePage (Seguro-Desemprego)

* **Inputs**: nº solicitações, meses trabalhados, últimos 3 salários, salário mínimo, teto do seguro
* **Output**: média salarial, valor parcela, número de parcelas

### 8. MoedasPage

* **Inputs**: valor, moeda origem, moeda destino
* **Output**: resultado formatado em reais e moeda de destino

### 9. UnidadesPage

* **Inputs**: valor, unidade origem, unidade destino
* **Output**: resultado numérico convertido

### 10. Header.vue & Footer.vue

* Cabeçalho fixo com navegação lateral por categoria
* Rodapé com links sociais (LinkedIn, GitHub, YouTube, Instagram)

---

## 🎨 Estilos e UX

* **Glassmorphism**, transparências e sombras suaves
* **Inputs** com bordas apenas na parte inferior e cantos arredondados
* **Checkboxes** customizados, redondos e animados
* Layout responsivo (grid/flex + media queries)

---

## 🤝 Contribuição

1. Fork este repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m "feat: …"`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
