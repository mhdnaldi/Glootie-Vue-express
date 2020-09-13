import axios from 'axios'

export default {
  state: {
    products: [],
    page: 1,
    limit: 9,
    sort: '',
    asc_desc: '',
    search: '',
    pagination: {},
    totalData: '',
    // ---------------- add to cart
    cart: [],
    count: 0,
    // for modal
    priceModal: [],
    qtyModal: [],
    nameModal: [],
    taxes: [],
    invoice: '',
    subTotal: [],
    totalPrice: 0
  },
  mutations: {
    cancel(state, payload) {
      state.cart = []
      state.count = 0
      state.totalPrice = 0
    },
    setItem(state, payload) {
      state.products = payload.data
      state.pagination = payload.pagination
      state.totalData = payload.pagination.totalData
    },
    setSort(state, payload) {
      const sorting = payload.split(' ')
      state.sort = sorting[0]
      state.asc_desc = sorting[1]
    },
    setSearchItem(state, payload) {
      state.search = payload
    },
    setPagination(state, payload) {
      state.page = payload
    },
    addToCart(state, payload) {
      const setCart = {
        menu_name: payload.menu_name,
        menu_id: payload.menu_id,
        menu_price: payload.menu_price,
        menu_image: payload.menu_image,
        qty: 1
      }
      state.cart = [...state.cart, setCart]
      state.count++
    },
    checkTotal(state, payload) {
      const price = state.cart.map((value, i) => {
        return value.menu_price * value.qty
      })

      state.totalPrice = price.reduce((value, i) => {
        return value + i
      })
    }
  },
  actions: {
    postOrder(context, payload) {
      const price = context.state.cart.map((value, i) => {
        return value.menu_price * value.qty
      })
      const name = context.state.cart.map((value, i) => {
        return value.menu_name
      })
      const quantity = context.state.cart.map((value, i) => {
        return value.qty
      })

      context.state.priceModal = price
      context.state.nameModal = name
      context.state.qtyModal = quantity
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/order', context.state.cart)
          .then(res => {
            context.state.taxes = res.data.data.tax
            context.state.invoice = res.data.data.updateHistory.invoice
            context.state.subTotal =
              res.data.data.updateHistory.history_subtotal
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    searchItem(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/menu/search?name=${context.state.search}`)
          .then(res => {
            context.commit('setItem', res.data)
          })
          .catch(err => {
            reject(err)
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
            context.commit('setItem', res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getItems(state) {
      return state.products
    },
    getPagination(state) {
      return state.pagination
    },
    getLimit(state) {
      return state.limit
    },
    getTotalData(state) {
      return state.totalData
    },
    getPage(state) {
      return state.page
    },
    getCart(state) {
      return state.cart
    },
    getCount(state) {
      return state.count
    },
    getPriceModal(state) {
      return state.priceModal
    },
    getQtyModal(state) {
      return state.qtyModal
    },
    getNameModal(state) {
      return state.nameModal
    },
    getTaxes(state) {
      return state.taxes
    },
    getInvoice(state) {
      return state.invoice
    },
    getSubtotal(state) {
      return state.subTotal
    },
    getTotalPrice(state) {
      return state.totalPrice
    }
  }
}
