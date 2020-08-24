<template>
  <div class="home">
    <Navbar />
    <b-row>
      <Aside />
      <!-- 3 cart dari data == $event / this.cart -->
      <Menu @dataCart="cart = $event" />
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
      // 2. buat variabel baru yg sama seperti this.cart dihalaman menu
      cart: []
    }
  }
}
</script>
