// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    typescript: {
        strict: true
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css:['@/assets/global.css'],
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/_color.scss" as *;'
            }
          }
        }
    },
})


