<template>
  <b-col cols lg="7" md="12" sm="12" xs="12" class="menu-items">
    <div
      v-for="(value, index) in products"
      :key="index"
      class="cards"
      style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3) inset; margin: 10px;  background-color: darkgrey;"
    >
      <div class="img-check">
        <img src="../../assets/img/bear.png" alt />
        <div class="check" v-if="check(value)">
          <img src="../../assets/icons/check.png" alt />
        </div>
      </div>
      <h5 style="color: #eee">{{ value.menu_name }}</h5>
      <div class="flex">
        <h6 style="color: #111">Rp. {{ value.menu_price }}</h6>
        <b-button class="btn" variant="primary" size="sm" @click="addToCart(value)">ADD</b-button>
      </div>
    </div>
    <div>
      <b-pagination
        class="pgn"
        v-model="page"
        :total-rows="rows"
        :per-page="limit"
        align="center"
        @change="getMenu"
      ></b-pagination>
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      page: 1,
      limit: 9,
      products: [],
      cart: [],
      count: 1,
      pagination: {}
    }
  },
  computed: {
    rows() {
      return this.pagination.totalData
    }
  },
  created() {
    this.getMenu()
  },
  // mengubah props dataText menjadi sebuah string
  props: {
    dataText: {
      type: String
    },
    sortItem: {
      type: String
    }
  },
  watch: {
    dataText() {
      // search method
      this.searchMenu()
    },
    sortItem() {
      this.getMenu()
    }
  },
  methods: {
    getMenu() {
      const str = this.sortItem.split(' ')
      axios // 1. MENGAMBIL SEMUA DATA
        .get(
          `http://localhost:3000/menu?page=${this.page}&limit=${this.limit}&sort=${str[0]}&asc_desc=${str[1]}`
        )
        .then((res) => {
          this.pagination = res.data.pagination
          this.products = res.data.data
        })
        .catch((err) => console.log(err))
    },
    // end point search
    searchMenu() {
      axios
        .get(`http://localhost:3000/menu/search?name=${this.dataText}`)
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => console.log(err))
    },
    sortMenu() {
      // ENDPOINT SORT
    },
    addToCart(data) {
      const setCart = {
        menu_name: data.menu_name,
        menu_id: data.menu_id,
        menu_price: data.menu_price,
        qty: 1
      }
      this.cart = [...this.cart, setCart]
      //  1OBJECT YG DIKIRIM KE HOME.VUE
      const setData = {
        cart: this.cart,
        count: this.count
      }
      this.$emit('dataCart', setData) /* 1 */
      // this.$emit('count', 1)
    },
    check(data) {
      // check data berdasarkan id terus di some jika idnya sama maka bernilai true
      return this.cart.some((value) => value.menu_id === data.menu_id)
      // console.log(this.sortData)
    }
  }
}
</script>

<style scoped>
.pgn {
  margin: auto;
}
.cards {
  border-radius: 20px;
  margin: 5px 1px;
  box-sizing: border-box;
}
.img-check {
  width: 220px;
  position: relative;
  top: 0;
}

.check {
  border-radius: 10px 10px 0 0;
  top: 10px;
  left: 10px;
  position: absolute;
  width: 200px;
  height: 161px;
  background-color: rgba(0, 0, 0, 0.5);
}

.check img {
  width: 35px;
  position: absolute;
  top: 60px;
  left: 82px;
}

.menu-items {
  box-sizing: border-box;
  background-color: #cecece;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

div {
  padding: 10px;
  box-sizing: border-box;
}

img {
  width: 200px;
}

h5 {
  margin-top: 5px;
}

h6 {
  margin-top: -10px;
  margin-left: -10px;
}

.btn {
  margin-top: -16px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}

.flex {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1024.98px) {
  .check {
    width: 220px;
    height: 176px;
  }

  .check img {
    width: 35px;
    top: 67px;
    left: 94px;
  }

  .img-check {
    text-align: center;
    margin: auto;
    width: 240px;
    height: 206px;
  }

  .menu-items {
    grid-template-columns: 1fr 1fr;
    gap: 5px;
  }
  h5 {
    margin-top: 0px;
    text-align: center;
  }
  h6 {
    text-align: center;
  }
  div {
    text-align: center;
  }
  img {
    width: 220px;
  }

  .flex {
    display: block;
  }

  .btn {
    margin-top: 5px;
  }

  .cards {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) inset;
    margin: 10px 20px;
    background-color: darkgrey;
  }
}

@media (max-width: 575.98px) {
  .img-check {
    width: 280px;
    height: 231px;
    margin: auto;
  }
  .check {
    left: 15px;
    width: 250px;
    height: 201px;
  }

  .check img {
    left: 108px;
    top: 80px;
  }
  h5 {
    margin-top: 0px;
    text-align: center;
  }
  h6 {
    text-align: center;
  }
  .menu-items {
    grid-template-columns: 1fr;
    gap: 5px;
  }
  div {
    text-align: center;
  }
  img {
    width: 250px;
  }

  .flex {
    display: block;
  }

  .cards {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) inset;
    margin: 10px 40px;
    background-color: darkgrey;
    text-align: center;
  }
}
</style>
