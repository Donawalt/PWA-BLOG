import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Events from "../views/Events.vue";
import Athletes from "../views/Athletes.vue";
import Rules from "../views/Rules.vue";
import EventArticle from "../views/events/index.vue";
import NewArticle from "../views/news/index.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: 'World Chase Tag'
		}
	},
	{
		path: "/news",
		name: "News",
		component: News,
		meta: {
			title: 'World Chase Tag || Actualités'
		}
	},
	{
		path: "/events",
		name: "Events",
		component: Events,
		meta: {
			title: 'World Chase Tag || Événements'
		}
	},
	{
		path: "/athletes",
		name: "Athletes",
		component: Athletes,
		meta: {
			title: 'World Chase Tag || Les Athlètes'
		}
	},
	{
		path: "/rules",
		name: "Rules",
		component: Rules,
		meta: {
			title: 'World Chase Tag || Les Règles'
		}
	},
	{
		path: "/events/:slug",
		name: "Event",
		component: EventArticle,
		meta: {
			title: 'World Chase Tag || Article'
		}
	},
	{
		path: "/news/:slug",
		name: "New",
		component: NewArticle,
		meta: {
			title: 'World Chase Tag || Article'
		}
	},
];

const router = new VueRouter({
	routes,
});

export default router;
