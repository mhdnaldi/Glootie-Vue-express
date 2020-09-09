// export default {
//   actions: {
//     getMenu(context, payload) {
//       const str = this.sortItem.split(' ')
//         axios // 1. MENGAMBIL SEMUA DATA
//           .get(
//             `http://localhost:3000/menu?page=${context.state.page}&limit=${context.state.limit}&sort=${str[0]}&asc_desc=${str[1]}`
//           )
//           .then((res) => {
//             this.$router.push(
//               `?page=${this.page}&limit=${this.limit}&sort=${str[0]}&asc_desc=${str[1]}`
//             )
//             this.pagination = res.data.pagination
//             this.products = res.data.data
//           })
//           .catch((err) => console.log(err))
//     }
//   },
//   mutations: {},
//   state: {
//     products: [],
//     page: 1,
//     limit: 9,
//   },
//   getters: {}
// }
