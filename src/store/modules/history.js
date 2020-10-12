import axios from 'axios'

export default {
  state: {
    recentProduct: [],
    todaysIncome: '',
    weeksOrders: '',
    yearsIncome: '',
    chartData: []
  },
  mutations: {
    setRecent(state, payload) {
      state.recentProduct = payload
    },
    setTodaysIncome(state, payload) {
      state.todaysIncome = payload
    },
    setOrdersPerWeek(state, payload) {
      state.weeksOrders = payload
    },
    setYearsIncome(state, payload) {
      state.yearsIncome = payload
    },
    setChart(state, payload) {
      state.chartData = payload
    }
  },
  actions: {
    recentOrdersHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/recent-orders`, payload)
          .then(res => {
            context.commit('setRecent', res.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    todaysIncomeHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/total-today`)
          .then(res => {
            context.commit('setTodaysIncome', res.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    weeksOrdersHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}order/this-week-order`)
          .then(res => {
            context.commit('setOrdersPerWeek', res.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    yearsIncome(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/total-yearly`)
          .then(res => {
            context.commit('setYearsIncome', res.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    chart(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/chart`)
          .then(res => {
            const chartKick = res.data.data
            const charts = []
            chartKick.map(value => {
              charts.push([value.date.slice(0, 10), value.total])
            })
            context.commit('setChart', charts)
          })
          .catch(err => {
            console.lo(err)
          })
      })
    }
  },
  getters: {
    recentProduct(state) {
      return state.recentProduct
    },
    todaysIncome(state) {
      return state.todaysIncome
    },
    weeksOrder(state) {
      return state.weeksOrders
    },
    yearsIncome(state) {
      return state.yearsIncome
    },
    chartsData(state) {
      return state.chartData
    }
  }
}
