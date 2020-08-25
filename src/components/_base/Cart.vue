<template>
  <b-col cols lg="4" sm="12" xs="12" class="card-image">
    <div v-if="dataCart.length < 1">
      <img src="../../assets/icons/cart.png" alt class="cart-img" />
      <h3>Your cart is empty</h3>
      <h5 style="color:darkgrey">Please add some items from the menu</h5>
    </div>
    <div class="carts" v-for="(value, index) in dataCart" :key="index">
      <div>
        <img src="../../assets/img/bear.png" alt />
      </div>
      <div class="info">
        <h5>{{value.menu_name}}</h5>
        <div class="desc" v-if="value.qty > 1" @click="desc(value)">-</div>
        <div class="num">{{value.qty}}</div>
        <div class="asc" @click="asc(value)">+</div>
      </div>
      <div class="price">
        <h6>Rp. {{value.menu_price}}</h6>
      </div>
    </div>
    <div class="Total:" style="text-align: center" v-if="dataCart.length > 0">
      <b-button @click="checkTotal()">Total</b-button>
    </div>
    <div class="totalPrice" v-if="totalPrice > 0">
      <div>
        <h6>Total Price:</h6>
      </div>
      <div>Rp. {{totalPrice}}</div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      qty: 1,
      newQty: 0,
      tax: 0,
      totalPrice: 0
    }
  },
  // 4 props itu gunanya untuk menerima data dari file Home.js
  props: ['dataCart'],
  methods: {
    checkTotal() {
      const price = this.dataCart.map((value, i) => {
        return value.menu_price
      })
      // console.log(price)
      const totalPrice = price.reduce((value, i) => {
        return value + i
      })
      this.totalPrice = totalPrice
      console.log(totalPrice)
    },
    asc(data) {
      data.qty++
      console.log(data.qty)
    },
    desc(data) {
      data.qty--
    }
  }
}
</script>

<style scoped>
.totalPrice {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
}

.cart-img {
  animation: anim 3s infinite;
}

@keyframes anim {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  110% {
    transform: scale(1);
  }
}
/* carts */
.carts {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.info {
  padding-top: 15px;
}

.price {
  padding-top: 70px;
  padding-right: 80px;
}

.carts img {
  width: 120px;
}

.desc,
.num,
.asc {
  display: inline-block;
  width: 25px;
  background-color: greenyellow;
  text-align: center;
  margin-right: 5px;
  color: black;
}

.info h5 {
  font-size: 16px;
}

img {
  width: 200px;
}

div {
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 991.98px) {
  div {
    text-align: center;
    width: 100%;
  }
  img {
    width: 250px;
  }
}
</style>
