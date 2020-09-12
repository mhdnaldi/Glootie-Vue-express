import axios from 'axios'

export default {
  state: {
    products: [],
    page: 1,
    limit: 9,
    sort: '',
    asc_desc: '',
    search: ''
  },
  mutations: {
    setItem(state, payload) {
      state.products = payload
    },
    setSort(state, payload) {
      const sorting = payload.split(' ')
      state.sort = sorting[0]
      state.asc_desc = sorting[1]
    },
    setSearchItem(state, payload) {
      state.search = payload
      console.log(payload)
    }
  },
  actions: {
    searchItem(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/menu/search?name=${context.state.search}`)
          .then(res => {
            console.log(res)
            context.commit('setItem', res.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    getItem(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/menu?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}&asc_desc=${context.state.asc_desc}`
          )
          .then(res => {
            context.commit('setItem', res.data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  },
  getters: {
    getItems(state) {
      return state.products
    }
  }
}
