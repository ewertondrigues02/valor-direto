<template>
  <div class="container-fixo">
    <div class="contato-page">
      <h2>Entre em Contato</h2>
      <p class="descricao">
        Acompanhe meus projetos, redes e canais através dos links abaixo:
      </p>

      <!-- Ícones sociais -->
      <div class="footer-icons">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :href="link.href"
          target="_blank"
          :title="link.title"
        >
          <i :class="link.icon"></i>
        </a>
      </div>

      <!-- Projetos GitHub -->
      <h3 class="subtitulo">Meus Projetos no GitHub</h3>
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
        >
          <i :class="project.iconClass + ' project-icon'"></i>
          <div class="project-info">
            <h4>{{ project.name }}</h4>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank">Ver no GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const socialLinks = ref([
  { href: 'https://www.linkedin.com/in/ewerton-rodrigues/', icon: 'fab fa-linkedin', title: 'LinkedIn' },
  { href: 'https://ewertondrigues02.github.io/meu-portifolio/', icon: 'fas fa-globe', title: 'Portfólio' },
  { href: 'https://github.com/ewertondrigues02', icon: 'fab fa-github', title: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCH4G9KvLac6-1MkF_gOwRzQ', icon: 'fab fa-youtube', title: 'YouTube - XeretaSound' },
  { href: 'https://www.youtube.com/@nerdxereta', icon: 'fab fa-youtube', title: 'YouTube - NerdXereta' },
  { href: 'https://www.youtube.com/@iclasscode6274', icon: 'fab fa-youtube', title: 'YouTube - iClassCode' },
  { href: 'https://www.instagram.com/ewertonrrodrigues/', icon: 'fab fa-instagram', title: 'Instagram' },
]);

const projects = ref([
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
</script>

<style scoped>
.container-fixo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.contato-page {
  width: 100%;
  max-width: 1000px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  padding: 20px;
  box-sizing: border-box;
  margin-top: 143rem;
  margin-bottom: 3rem;
  z-index: 1;
 
}

.descricao {
  text-align: center;
  margin-bottom: 24px;
  color: var(--hover-color);
}

.footer-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.footer-icons a {
  font-size: 2rem;
  color: var(--text-color);
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer-icons a:hover {
  transform: scale(1.1);
  color: var(--hover-color);
  
}

.subtitulo {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.project-card {
  background: transparent;
  border: 1px solid var(--text-color);
  border-radius: 20px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--box-shadow);
}

.project-icon {
  font-size: 2rem;
  color: var(--hover-color);
}

.project-info h4 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-color);
}

.project-info p {
  font-size: 0.9rem;
  color: var(--text-color);
  margin: 4px 0 8px;
}

.project-info a {
  font-size: 0.9rem;
  color: var(--hover-color);
  text-decoration: none;
  font-weight: bold;
}

.project-info a:hover {
  text-decoration: none;
  color: #2afe75;
  
}
</style>
