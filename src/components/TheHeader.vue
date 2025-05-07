<template>
    <header class="header glass">
        <div class="logo">
            <img class="img-logo" src="/src/assets/app-1.png" alt="Logo Valor Direto" />
            <span>Valor Direto</span>
        </div>
        <nav class="menu">
            <div v-for="item in menuItems" :key="item.title" class="menu-item" role="button" tabindex="0"
                @click="toggleSideMenu(item)">
                {{ item.title }}
            </div>
        </nav>
    </header>

    <!-- Menu lateral (abre à esquerda) -->
    <aside class="side-menu glass" v-if="activeMenu">
        <button class="close-btn" @click="activeMenu = null">&times;</button>
        <h3>{{ activeMenu.title }}</h3>
        <ul>
            <li v-for="option in activeMenu.options" :key="option.label">
                <router-link :to="option.path">{{ option.label }}</router-link>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
    title: string
    options: { label: string; path: string }[]
}

const menuItems: MenuItem[] = [
    {
        title: 'Simulador',
        options: [
            { label: 'Empréstimos', path: '/emprestimos' },
            { label: 'Financiamentos', path: '/financiamentos' },
        ],
    },
    {
        title: 'Calculadora',
        options: [
            { label: 'Cálculo Rescisão', path: '/rescisao' },
            { label: 'Seguro Desemprego', path: '/seguro' },
            { label: 'Valor de Horas Extras', path: '/horasExtras' },
            { label: 'Décimo Terceiro', path: '/decimo' },
            { label: 'Férias', path: '/ferias' },
        ],
    },
    {
        title: 'Conversor',
        options: [
            { label: 'Conversor de Moedas', path: '/moedas' },
            { label: 'Conversor de Unidades de Medida', path: '/unidades' },
        ],
    },
    {
        title: 'Contato',
        options: [
            { label: 'LinkedIn', path: 'https://www.linkedin.com/in/ewerton-rodrigues/' },
            { label: 'Instagram', path: 'https://www.instagram.com/ewertonrrodrigues/' },
            { label: 'GitHub', path: 'https://github.com/ewertondrigues02' },
            { label: 'YouTube - XeretaSound', path: 'https://www.youtube.com/channel/UCH4G9KvLac6-1MkF_gOwRzQ' },
            { label: 'YouTube - NerdXereta', path: 'https://www.youtube.com/@nerdxereta' },
            { label: 'YouTube - iClassCode', path: 'https://www.youtube.com/@iclasscode6274' },
        ],
    },
]

const activeMenu = ref<MenuItem | null>(null)

function toggleSideMenu(item: MenuItem) {
    activeMenu.value = activeMenu.value?.title === item.title ? null : item
}
</script>

<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    box-shadow: var(--box-shadow);
    transition: background 0.3s ease-in-out;
    box-sizing: border-box;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    gap: 0.75rem;
    letter-spacing: 0.5px;
}

.img-logo {
    height: 36px;
    width: auto;
    object-fit: contain;
    border-radius: 8px;
    border: 1px solid var(--text-color);
    background-color: var(--text-color);
}

/* Menu principal */
.menu {
    display: flex;
    gap: 2rem;
}

.menu-item {
    cursor: pointer;
    font-weight: 500;
    color: var(--text-color);
    transition: color 0.3s;
    border-bottom: 1px solid #ddd;
    border-radius: 9px;
    text-decoration: none;
    border-color: var(--text-color);
    width: 7rem;
    padding-bottom: 3px;

}

.menu-item:hover {
    color: var(--hover-color);
    box-shadow: var(--box-shadow);

}

/* Menu lateral */
.side-menu {
    position: fixed;
    top: 90px;
    left: 0;
    bottom: 110px;
    width: 250px;
    background-color: transparent;
    padding: 1rem;
    box-shadow: var(--box-shadow);
    z-index: 1100;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border-radius: 0 10px 10px 0;
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
}

.side-menu h3 {
    margin-top: 0;
    color: var(--text-color);
}

.side-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.side-menu li {
    padding: 0.5rem 0;
    color: var(--text-color);
    border-bottom: 1px solid #ddd;
    border-radius: 9px;
    text-decoration: none;
    border-color: var(--text-color);
    margin-bottom: 0.6rem;

}

.side-menu li:last-child {
    border-bottom: 1px solid #ddd;
    border-color: var(--text-color);
    border-radius: 9px;
}

.side-menu li:hover {
    color: var(--hover-color);
    background-color: var(--menu-hover-bg);
    cursor: pointer;
    box-shadow: var(--box-shadow);
}

.side-menu a {
    color: var(--menu-hover-bg);
    text-decoration: none;

}

.side-menu a:visited {
    color: var(--text-color);
}

.side-menu a:hover {
    color: var(--hover-color);
    background: none;
}

.side-menu a:focus,
.side-menu a:active {
    color: var(--active-color);
    outline: none;
}

.close-btn {
    align-self: flex-end;
    background: transparent;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--text-color);
    border-radius: 50%;
    border: none;
    padding: 0;
    margin-bottom: 1rem;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: var(--box-shadow);
    line-height: 1;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

.close-btn:hover {
    color: var(--hover-color);
    border: none;
}
</style>