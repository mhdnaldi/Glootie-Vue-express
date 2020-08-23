<template>
  <div class="home">
    <Navbar />
    <b-row>
      <Aside />
      <Menu />
      <Cart />
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
  }
}
</script>
