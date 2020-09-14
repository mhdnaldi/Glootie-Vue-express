import axios from 'axios'
export default {
  state: {
    products: [],
    page: 1,
    limit: 100
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
    }
  },
  actions: {
    getAllMenu(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}menu?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(res => {
            context.commit('setProduct', res.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    addMenu(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}menu`, payload)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    editMenu(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}menu/${payload.menu_id}`,
            payload.form
          )
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    deleteMenu(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}menu/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getProduct(state) {
      return state.products
    }
  }
}
