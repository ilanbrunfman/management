import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home Page'
            },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/About.vue'),
            meta: {
              title: 'About'
            }
        },
        {
            path: '/teams',
            name: 'team',
            component: () => import('@/pages/team/Teams.vue'),
            meta: {
              title: 'Teams'
            }
        },
        {
            path: '/add-user',
            name: 'add-user',
            component: () => import('@/pages/user/AddUser.vue'),
            meta: {
              title: 'Add new user'
            }
        },
        {
            path: '/add-meet',
            name: 'add-meet',
            component: () => import('@/pages/meet/AddMeet.vue'),
            meta: {
              title: 'Add new meet'
            }
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: () => import("@/pages/PageNotFound.vue"),
            meta: {
              title: 'Page not found'
            }
        },
    ],
})

//Dynamically Change Page Title
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Default Title'
  })

export default router