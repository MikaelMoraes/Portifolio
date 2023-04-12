<template>
    <div>
        <nav class="navbar navbar-dark bg-menu border-menu ">
            <div class="container-fluid">
                <router-link class="navbar-brand " to="/">
                    <img src="@/assets/logo-portifolio.png" alt="Logo" width="60" height="70">
                    MIKAEL VITOR</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end menu-color " tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <router-link class="nav-link " to="/Home/Projetos" active-class="ativo"
                                    exact-active-class="ativado"> Projetos</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link " to="/Home/Sobre" active-class="ativo"
                                    exact-active-class="ativado"> Sobre</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link " to="/Home/Contato" active-class="ativo"
                                    exact-active-class="ativado"> Contato</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <rodapeHome class="posicao" />
    </div>
</template>
<script>
import rodapeHome from '@/components/rodapeHome.vue'
export default {
    name: 'homeInicial',
    components: {
        rodapeHome
    }
}
</script>
<style scoped>
.menu-color {
    background-color: #303030;
}

.bg-menu {
    background-color: rgb(27, 27, 27);
}

.border-menu {
    border-bottom: dashed 2px #777777;
}

.ativo {
    color: rgb(59, 57, 59);
    background-color: rgb(0, 0, 0);
}

.ativado {

    color: rgb(255, 255, 255);
    background-color: rgb(27, 27, 27);
    border: dashed 2px #777777;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.posicao {
    position: bottom;
}
</style>