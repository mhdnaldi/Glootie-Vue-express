<template>
  <b-col cols="12" style="background-color: #111">
    <div class="login-form">
      <h1 align="center" class="pt-4" style="margin-bottom: -120px">LOGIN</h1>
      <form>
        <b-alert v-bind:show="alert">{{ isMsg }}</b-alert>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="form.user_email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="form.user_password"
            required
          />
        </div>
        <div class="login-button">
          <button type="submit" class="btn login" @click.prevent="onSubmit">Login</button>
          <button type="button" class="btn reset" @click.prevent="onReset">Reset</button>
          <p class="nb">
            Don't have an account? please sign-up first
            <router-link to="/register" class="nb-1">Register</router-link>
          </p>
        </div>
      </form>
    </div>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      },
      isMsg: '',
      alert: false
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then((res) => {
          this.alert = true
          this.isMsg = res
          this.getAllMenu()
          setTimeout(() => {
            this.alert = false
          }, 3000)
          this.$router.push('/')
        })
        .catch((err) => {
          this.alert = true
          this.isMsg = err.data.msg
          setTimeout(() => {
            this.alert = false
          }, 3000)
        })
    },
    onReset() {
      this.form = {
        user_name: '',
        user_password: ''
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  height: 500px;
  margin: 100px auto;
  background-color: #7ea04d;
  border-radius: 40px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
}

form {
  padding: 150px 30px;
  box-sizing: border-box;
}

form input {
  border-radius: 10px;
}

.login-button {
  text-align: right;
}

.login {
  margin: 0 10px;
  font-size: 14px;
  border: 1px solid #fe7171;
  background-color: #fe7171;
  padding: 5px 20px;
  border-radius: 20px;
  color: #111;
}
.reset {
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid #ffb0b0;
  background-color: #ffb0b0;
  padding: 5px 20px;
  border-radius: 20px;
  color: #111;
}
.nb {
  text-align: left;
  margin-top: 20px;
  font-size: 11px;
}

.nb-1 {
  color: white;
}
</style>
