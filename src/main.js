import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import intersection from './directives/intersection'

const app = createApp(App)

app.directive('intersection', intersection);

app.mount('#app')
