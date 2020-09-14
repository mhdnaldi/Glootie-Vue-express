import axios from 'axios'

export default {
  state: {
    user: []
  },
  mutations: {
    setAllUsers(state, payload) {
      state.user = payload
    }
  },
  actions: {
    getAllUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}users/`)
          .then(res => {
            console.log(res.data.data)
            context.commit('setAllUsers', res.data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    editUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}users/${payload.user_id}`,
            payload.form
          )
          .then(res => {
            resolve(res.data.msg)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    deleteUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}users/${payload}`)
          .then(res => {
            console.log(res)
            resolve(res.data.msg)
          })
          .catch(err => {
            console.log(err)
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  }
}
