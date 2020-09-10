import axios from 'axios'
export default {
  actions: {
    getAllMenu(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/menu?page=${context.state.page}&limit=${context.state.limit}`
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
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/menu', payload)
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
          .patch(`http://localhost:3000/menu/${payload.menu_id}`, payload.form)
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
          .delete(`http://localhost:3000/menu/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
    }
  },
  state: {
    products: [],
    page: 1,
    limit: 100
  },
  getters: {}
}
