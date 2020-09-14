<template>
  <b-col cols="12">
    <div class="register-form">
      <h1 align="center" class="pt-4" style="margin-bottom: -120px">SIGN UP</h1>
      <form>
        <b-alert v-bind:show="alert">{{ isMsg }}</b-alert>
        <b-alert v-bind:show="alertErr" variant="danger">{{ isMsg }}</b-alert>
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
          <input type="text" class="form-control" placeholder="Username" v-model="form.user_name" />
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
          <button type="submit" class="btn login" @click.prevent="onSubmit">Register</button>
          <button type="button" class="btn reset" @click.prevent="onReset">Reset</button>
          <p class="nb">
            Already have an account? please login here
            <router-link to="/login" class="nb-1">Login</router-link>
          </p>
        </div>
      </form>
    </div>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      form: {
        user_email: '',
        user_password: '',
        user_name: ''
      },
      isMsg: '',
      alert: false,
      alertErr: false
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form)
        .then((res) => {
          this.alert = true
          this.isMsg = res
          setTimeout(() => {
            this.alert = false
            this.$router.push('/login')
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
        user_email: '',
        user_password: '',
        user_name: ''
      }
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  height: 450px;
  margin: 100px auto;
  background-color: #3282b8;
  border-radius: 40px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.4);
}

form input {
  border-radius: 10px;
}

form {
  padding: 150px 30px;
  box-sizing: border-box;
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
