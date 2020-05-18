import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Events from '../views/Events.vue'
import Athletes from '../views/Athletes.vue'
import EventArticle from '../views/events/index.vue'
import NewArticle from '../views/news/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/events',
    name: 'Events',
    component: Events 
  },
  {
    path: '/athletes',
    name: 'Athletes',
    component: Athletes
  },
  {
    path: '/events/:slug',
    name: 'Event',
    component: EventArticle
  },
  {
    path: '/news/:slug',
    name: 'New',
    component: NewArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
