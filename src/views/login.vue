<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="min-height: 70vh"
  >
    <div class="card" style="width: 400px">
      <div class="card-header bg-primary text-white">
        <h2>Login</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Email address..."
            />
            <input
              type="password"
              class="form-control mt-2"
              v-model="password"
              placeholder="password..."
            />
          </div>
          <div v-if="!showSpinner">
            <button class="btn btn-primary" >Login</button>
          </div>
          <div v-else>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      showSpinner: false,
    }
  },
  methods: {
    async login() {
      this.showSpinner = true

      try {
        await Auth.signIn(this.email, this.password)
        alert('Successfully logged in')
      } catch (error) {
        alert(error.message)
        console.log(error)
      }

      this.showSpinner = false
    },
  },
}
</script>

<style>
</style>