import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import InsightsView from '../views/InsightsView.vue'
import ScheduleView from '../views/ScheduleView.vue' // 🌟 新增這一行：把時程表檔案引進來

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/schedule', name: 'schedule', component: ScheduleView }, // 🌟 新增這一行：設定時程表的專屬網址
    { path: '/tasks', name: 'tasks', component: TasksView },
    { path: '/insights', name: 'insights', component: InsightsView }
  ]
})

export default router