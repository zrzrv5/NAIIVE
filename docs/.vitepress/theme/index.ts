import DefaultTheme from 'vitepress/theme'
import './style.css'
import Home from '../../components/Home.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Home', Home)
    }
}
