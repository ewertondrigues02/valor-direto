<template>
  <footer class="footer glass">
    <div class="footer-content">
      <span>© {{ currentYear }} Ewerton Rodrigues -  Todos os direitos reservados.</span>
      <span>•</span>
      <a href="#" class="footer-link">Política de Privacidade</a>
      <span>•</span>
      <a href="#" class="footer-link">Contato</a>
      <span>•</span>

      <!-- Ícones sociais -->
      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/ewerton-rodrigues/" target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://ewertondrigues02.github.io/meu-portifolio/" target="_blank" title="Portfólio">
          <i class="fas fa-globe"></i>
        </a>
        <a href="https://github.com/ewertondrigues02" target="_blank" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCH4G9KvLac6-1MkF_gOwRzQ" target="_blank" title="YouTube - XeretaSound">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.youtube.com/@nerdxereta" target="_blank" title="YouTube - NerdXereta">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.youtube.com/@iclasscode6274" target="_blank" title="YouTube - iClassCode">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/ewertonrrodrigues/" target="_blank" title="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>


<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: transparent;
  color: var(--footer-text);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem 1rem;
  z-index: 1000;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-size: 0.9rem;
  flex-direction: row;

}

.footer-link {
  color: var(--footer-text);
  text-decoration: none;
}

.footer-icons {
  display: flex;
  gap: 0.6rem;
  font-size: 1.2rem;
}

.footer-icons a {
  color: var(--footer-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-icons a:hover {
  color: var(--hover-color);
}
</style>

