
import { createRouter, createWebHistory } from 'vue-router'
//import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
/* Paginas de navegação */
//import Site from '@/views/Site.vue'
import Home from '@/views/HomeInicial.vue'
import PaginaInicial from '@/views/PaginaInicial.vue'
import Projetos from '@/components/ProjetosDesenvolvidos.vue'
import Sobre from '@/components/SobreMim.vue'
import Contato from '@/components/ContatoInicial.vue'
/* opção de menu - Dashboard */
//import Dashboard from '@/components/dashboard/Dashboard.vue'
/* opção de menu - Vendas */
//import Vendas from '@/components/vendas/Vendas.vue'
//import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
//import Leads from '@/components/vendas/Leads.vue'
//import Lead from '@/components/vendas/Lead.vue'
/* opção de menu - Contratos */
//import Contratos from '@/components/vendas/Contratos.vue'
/* opção de menu - Servicos */
//import Servicos from '@/components/servicos/Servicos.vue'
//import Servico from '@/components/servicos/Servico.vue'
////import Opcoes from '@/components/servicos/Opcoes.vue'
//import Indicadores from '@/components/servicos/Indicadores.vue'
const routes = [

    {
        path: '/',
        component: PaginaInicial
    },
            {
                path: '/Home', component: Home, children: [
                    { path: 'Projetos', component: Projetos, name: 'Projetos' },
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
