import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Amplify from 'aws-amplify';
Amplify.configure({
    Auth: {
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',

        oauth: {
            domain: 'XXX.auth.us-east-1.amazoncognito.com',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://www.uol.com.br/',
            redirectSignOut: 'https://www.amazon.com.br/',
            responseType: 'code' 
        }
    }
});


createApp(App).use(router).mount('#app')
