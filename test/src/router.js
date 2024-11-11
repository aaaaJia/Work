import { createRouter,createWebHashHistory } from "vue-router";
import Table from "./components/Table.vue";

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/Table',component:()=>import('./components/Table.vue')},
        {path:'/Select',component:()=>import('./components/Select.vue')},
        {path:'/Check',component:()=>import('./components/Check.vue')},


    ]
})

export default router;