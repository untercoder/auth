import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#797c7f',
                secondary: '#64b5f6',
                accent: '#78002e',
                error: '#d50000',
            },
        }
    }
}

export default new Vuetify(opts)