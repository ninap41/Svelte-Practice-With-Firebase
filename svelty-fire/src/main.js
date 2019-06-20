import App from './App.svelte';
import { Router } from 'svelte-easyroute-rollup'
import About from './components/todos/About.svelte';
import Page2 from './components/todos/Page2.svelte';
import Home from './components/todos/Home.svelte';

var router = new Router({
	base: "/", // NOT required. You can specify it in any format: with or without slashes in the beginning and in the end.
	mode: "hash", // "hash" or "history"
	routes:[
		{
			path: '/about',
			component: About,
			name: 'About',
		},
		  {
			  path: '/',
			  component: Home,
			  name: 'Home'
		  },
		  {
			path: '/page2',
			component: Page2,
			name: 'Page2'
		}
		]
  })

const app = new App({
	target: document.body,
	props: {
		name: 'Sveltey-Fire 🔥',
		router,
	},

});



export default app;