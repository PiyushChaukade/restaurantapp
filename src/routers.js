import HomePage from "./components/HomePage.vue"
import SignUp from "./components/SignUp.vue"
import LogIn from  './components/LogIn.vue'
import AddRes from './components/AddRes.vue'
import UpdateRes from './components/UpdateRes.vue'
import { createRouter, createWebHashHistory} from 'vue-router'


const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'AddRes',
        component:AddRes,
        path:'/addres'
    },
      {
        name:'UpdateRes',
        component:UpdateRes,
        path:'/updateres/:id'
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;