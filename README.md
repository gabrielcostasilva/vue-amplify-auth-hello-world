# Vue + Amplify Auth Hello World
This project is based on [Jennifer Bland's](https://www.freecodecamp.org/news/how-to-add-authentication-to-a-vue-app-using-aws-amplify/) tutorial on adding authentication to a Vue app with Amplify.

This branch adds Bootstrap 4.6.0 to improve register and login pages. In addition, we changed the `logout` button to a link in order to keep the layout consistency. Checkout the new figures below.

The name of `login` and `register` _Views_ were also changed for consistency purposes.

## Project Overview
This project is entirely built on top the default Vue App created by Vue CLI. `login.vue` and `register.vue` _Views_ are added to respectively enable user login and signup. The main branch does not have any CSS style.

### Login Screen

<img src="./pics/LoginScreen.png" />

This screen just shows two input boxes that enable user to inform email and password for login. In the case of a successful login, a `alert` message is shown.

### Register Screen

<img src="./pics/RegisterScreen.png" />

This screen enables user to signup to the service. A message is shown in case of success.

### Navbar

<img src="./pics/Navbar.png" />

A final change was adding a `logout` link in the navbar. It does not return anything. It just shows a message in case of error.

## Dependencies

In addition to Vue Router that is added when the project is created, we also need Amplify libraries (`aws-amplify`).

This branch adds three new dependencies related to Bootstrap: bootstrap@4.6.0, jquery & popper.js.

## Project setup


* Installing libraries

```
yarn install
```

* Compiles and hot-reloads for development

```
yarn serve
```
