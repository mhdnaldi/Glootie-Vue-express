<template>
  <div class="home">
    <!-- 2 menerima data gettext dari navbar.vue -->
    <Navbar @dataText="text = $event" :count="count" />
    <b-row>
      <Aside />
      <!-- 3 cart dari data == $event / this.cart -->
      <Menu @dataCart="setCart" :dataText="text" />
      <Cart :dataCart="cart" />
    </b-row>
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
      // 2. buat variabel baru yg menampung dari data emit
      cart: [],
      text: '',
      count: 0
    }
  },
  methods: {
    setCart(data) {
      // trigger data
      this.cart = data.cart
      this.count += data.count
    }
  }
}
</script>
