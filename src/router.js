
import { createRouter, createWebHistory } from 'vue-router'
//import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
/* Paginas de navegação */
import Home from '@/views/HomeInicial.vue'
import Projetos from '@/components/ProjetosDesenvolvidos.vue'
import Sobre from '@/components/SobreMim.vue'
import Contato from '@/components/ContatoInicial.vue'
const routes = [

   
            {
                path: '/', component: Home, children: [
                    { path: '', component: Projetos, name: 'Projetos' },
                    { path: 'Sobre', component: Sobre, name: 'Sobre' },
                    { path: 'Contato', component: Contato, name: 'Contato' }
                ]
            }
   

]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
