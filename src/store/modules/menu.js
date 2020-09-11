import axios from 'axios'

export default {
  state: {
    products: [],
    page: 1,
    limit: 9
  },
  mutations: {
    setItem(state, payload) {
      state.products = payload
    },
    searchItem(state, payload) {
      state.products = payload
    }
  },
  actions: {
    searchItem(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/menu/search?name=${payload}`)
      })
        .then(res => {
          context.commit('searchItem', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getItem(context, payload) {
      const sort = payload.split(' ')
      console.log(sort)
      return new Promise((resolve, reject) => {
        axios.get(
          `http://localhost:3000/menu?page=${context.state.page}&limit=${context.state.limit}&sort=${sort[0]}&asc_desc=${sort[1]}`
        )
      })
        .then(res => {
          console.log(res)
          context.commit('setItem', res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    getItems(state) {
      return state.products
    },
    searchingItem(state) {
      return state.products
    }
  }
}
