import axios from 'axios'
import router from '../../router/index'

export default {
  actions: {
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}users/register`, payload)
          .then(res => {
            context.commit('regUser', res.data.data)
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}users/login`, payload)
          .then(res => {
            context.commit('setUser', res.data.data) // mengirim data ke payload setUser
            localStorage.setItem('token', res.data.data.token) // set token ke localstorage
            resolve(res.data.msg)
          })
          .catch(err => {
            console.log(err)
            reject(err.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorRequest(context) {
      console.log('Interceptor works')
      axios.interceptors.request.use(
        function(config) {
          // Do something before request is sent
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          if (error.response.status === 403) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature'
            ) {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Salah token woy')
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Masa berlaku token telah abis, login lagi woy')
            }
          }
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error)
        }
      )
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    regUser(state, payload) {
      state.user = payload
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  state: {
    user: {},
    token: localStorage.getItem('token') || null // mengambil token dari localstorage
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    }
  }
}
