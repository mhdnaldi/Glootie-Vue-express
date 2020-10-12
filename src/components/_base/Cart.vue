<template>
  <b-col cols lg="4" sm="12" xs="12" class="card-image">
    <div v-if="getCart.length < 1">
      <img src="../../assets/icons/cart.png" alt class="cart-img" />
      <h3>Your cart is empty</h3>
      <h5 style="color:darkgrey">Please add some items from the menu</h5>
    </div>
    <div class="carts" v-for="(value, index) in getCart" :key="index">
      <div>
        <img :src="port + value.menu_image" alt />
      </div>
      <div class="info">
        <h5>{{ value.menu_name }}</h5>
        <div class="desc" v-if="value.qty > 1" @click="desc(value)">-</div>
        <div class="num">{{ value.qty }}</div>
        <div class="asc" @click="asc(value)">+</div>
      </div>
      <div class="price">
        <h6>Rp. {{ value.menu_price * value.qty }}</h6>
      </div>
    </div>
    <div class="total" style="text-align: center" v-if="getCart.length > 0">
      <b-button @click="checkTotal()">Total</b-button>
    </div>
    <div class="totalPrice" v-if="totalPrice > 0">
      <div>
        <h6>Total Price:</h6>
      </div>
      <div>Rp. {{ totalPrice }}</div>
    </div>
    <h6
      style="text-align: left; text-indent: 20px; font-weight: bold; margin-top: 10px; font-size: 14px"
      v-if="totalPrice > 0"
    >The Price Does Not Include Additional Taxes</h6>
    <div class="checkout" v-if="totalPrice > 0" @click="postOrder">
      <b-button v-b-modal.modal-1>CHECKOUT</b-button>

      <b-modal id="modal-1" title="Checkout" hide-footer>
        <div class="modal-invoice">
          <div>
            <h6>Cashier: {{user.user_name}}</h6>
          </div>
          <div>
            <h6>Receipt no: #{{ invoice }}</h6>
          </div>
        </div>
        <div class="total-modal">
          <div>
            <p v-for="(value, index) in nameModal" :key="index">{{ value }}</p>
          </div>
          <div>
            <p v-for="(value, index) in qtyModal" :key="index">{{ value }} x</p>
          </div>
          <div>
            <p
              style="text-align: right"
              v-for="(value, index) in priceModal"
              :key="index"
            >:Rp. {{ value }}</p>

            <p style="text-align: right">Tax 10%: Rp. {{ taxes }}</p>
            <p style="text-align: right">Total: Rp. {{ subTotal }}</p>
          </div>
        </div>
        <div class="modal-button">
          <button class="btn" style="background-color: aqua" width="100%" @click="cancel">OK</button>
          <p style="line-height: 30px; margin-bottom: -2px">OR</p>
          <button class="btn" style="background-color: pink" width="100%" @click="cancel">SEND EMAIL</button>
        </div>
      </b-modal>
    </div>
    <div class="cancel" v-if="totalPrice > 0">
      <button @click="cancel">CANCEL</button>
    </div>
  </b-col>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
// import axios from 'axios'
export default {
  name: 'cart',
  data() {
    return {
      qty: 1,
      port: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters(['getCart']),
    ...mapGetters({
      priceModal: 'getPriceModal',
      qtyModal: 'getQtyModal',
      nameModal: 'getNameModal',
      taxes: 'getTaxes',
      invoice: 'getInvoice',
      subTotal: 'getSubtotal',
      totalPrice: 'getTotalPrice',
      user: 'userLogin'
    })
  },
  methods: {
    ...mapActions(['postOrder']),
    ...mapMutations(['cancel', 'checkTotal']),
    asc(data) {
      data.qty++
    },
    desc(data) {
      data.qty--
    }
  }
}
</script>

<style scoped>
.modal-button {
  display: grid;
  grid-template-columns: 3fr;
}

.total-modal,
.modal-invoice {
  display: flex;
  justify-content: space-between;
}

.checkout button {
  background-color: #29dfff;
  color: #111;
  border-color: #29dfff;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* border-radius: 20px; */
  width: 90%;
}

.total button {
  background-color: aqua;
  color: #111;
  text-transform: uppercase;
  border-color: aqua;
  /* border-radius: 20px; */
  width: 20%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}

.cancel button {
  background-color: #fbb2b4;
  color: #111;
  border-color: #fbb2b4;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* border-radius: 20px; */
  width: 90%;
  padding: 5px;
}

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
  background-color: aqua;
  text-align: center;
  margin-right: 5px;
  color: black;
  cursor: pointer;
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

  .totalPrice {
    margin: 20px;
  }
  .totalPrice div:nth-child(even) {
    text-align: right;
    margin-right: 50px;
  }
  .totalPrice div:nth-child(odd) {
    text-align: left;
  }
}
</style>
