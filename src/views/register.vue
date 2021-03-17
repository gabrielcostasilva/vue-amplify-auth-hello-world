<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="min-height: 70vh"
  >
    <div class="card" style="width: 400px">
      <div class="card-header bg-secondary text-white">
        <h2>Register</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="register">
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

          <button class="btn btn-secondary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      try {
        await Auth.signUp({
          username: this.email,
          password: this.password,
        })
        alert('User successfully registered. Please login')
      } catch (error) {
        alert(error.message)
      }
    },
  },
}
</script>

<style>
</style>