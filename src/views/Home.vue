<template>
  <div class="home">
    <!-- 2 menerima data gettext dari navbar.vue -->
    <Navbar @dataText="text = $event" :count="count" />
    <b-row>
      <Aside @sortItem="setSort" />
      <!-- 3 cart dari data == $event / this.cart -->
      <Menu @dataCart="setCart" :dataText="text" :sortItem="sort" />
      <Cart :dataCart="cart" />
    </b-row>
    <!-- <p style="text-align: center">{{sort}}</p> -->
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Aside from '../components/_base/Aside'
import Menu from '../components/_base/Menu'
import Cart from '../components/_base/Cart'

export default {
  name: 'Home',
  components: {
    Navbar,
    Aside,
    Menu,
    Cart
  },
  data() {
    return {
      // 2. buat variabel baru utk menampung dari data emit
      cart: [],
      text: '',
      count: 0,
      sort: ''
    }
  },
  methods: {
    // method untuk memasukkan data dari child ke parent
    setCart(data) {
      this.cart = data.cart
      this.count += data.count
    },
    setSort(data) {
      this.sort = data
    }
  }
}
</script>
