<template>
  <b-col cols="12">
    <div class="login-form">
      <h1 align="center" class="pt-4" style="margin-bottom: -120px">LOGIN</h1>
      <form>
        <b-alert v-bind:show="alert">{{ isMsg }}</b-alert>
        <b-alert v-bind:show="alertErr" variant="danger">{{ isMsg }}</b-alert>
        <div class="form-group">
          <input
            v-focus
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
          <button
            type="submit"
            class="btn login"
            @click.prevent="onSubmit"
            v-fontsize:small
          >
            Login
          </button>
          <button type="button" class="btn reset" @click.prevent="onReset">
            Reset
          </button>
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
      alert: false,
      alertErr: false
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then((res) => {
          this.alert = true
          this.isMsg = res
          setTimeout(() => {
            this.alert = false
            this.$router.push('/')
          }, 2000)
        })
        .catch((err) => {
          this.alertErr = true
          this.isMsg = err.data.msg
          setTimeout(() => {
            this.alertErr = false
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
  height: 450px;
  margin: 100px auto;
  background-color: #3282b8;
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
  border: 1px solid #0f4c75;
  background-color: #0f4c75;
  padding: 5px 20px;
  border-radius: 20px;
  color: #bbe1fa;
}
.login:hover {
  color: white;
}
.reset {
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid #1b262c;
  background-color: #1b262c;
  padding: 5px 20px;
  border-radius: 20px;
  color: #bbe1fa;
}

.reset:hover {
  color: white;
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
