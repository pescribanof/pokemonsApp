import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";


const app = createApp(App)

const queryClient = new QueryClient({
    defaultOptions: { 
        queries: { 
            staleTime: 1000 * 120 // 2 minutos 
        } 
    },
  })
  const options = { queryClient }

app.use(VueQueryPlugin, options);

//VueQueryPlugin.install(app, {
//    queryClientConfig: {
//        defaultOptions: {
//            queries: {
//                queries: {
//                  cacheTime: 1000 * 120, // 2 minutos
//              }
//            }
//
//        }
//    }
//});

app.use(createPinia())
app.use(router)

app.mount('#app')
