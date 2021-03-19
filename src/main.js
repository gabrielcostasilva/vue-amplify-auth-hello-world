import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

import Amplify from 'aws-amplify';
Amplify.configure({
    Auth: {
        region: process.env.VUE_APP_AUTH_REGION,
        userPoolId: process.env.VUE_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.VUE_APP_USER_POOL_WEB_CLIENT_ID,

        oauth: {
            domain: process.env.VUE_APP_OAUTH_DOMAIN,
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://www.uol.com.br/',
            redirectSignOut: 'https://www.amazon.com.br/',
            responseType: 'code' 
        }
    }
});


createApp(App).use(router).mount('#app')
