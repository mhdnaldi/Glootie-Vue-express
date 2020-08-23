<template>
  <b-col cols lg="4" sm="12" xs="12" class="card-image">
    <div class="carts">
      <div>
        <img src="../../assets/img/bear.png" alt />
      </div>
      <div class="info">
        <h5>Coffe latte</h5>
        <div class="desc">-</div>
        <div class="num">1</div>
        <div class="asc">+</div>
      </div>
      <div class="price">
        <h6>Rp. 20000</h6>
      </div>
    </div>
    <div class="carts">
      <div>
        <img src="../../assets/img/bear.png" alt />
      </div>
      <div class="info">
        <h5>Coffe latte</h5>
        <div class="desc">-</div>
        <div class="num">1</div>
        <div class="asc">+</div>
      </div>
      <div class="price">
        <h6>Rp. 20000</h6>
      </div>
    </div>
    <div v-show="false">
      <img src="../../assets/icons/cart.png" alt />
      <h3>Your cart is empty</h3>
      <h5>Please add some items from the menu</h5>
    </div>
  </b-col>
</template>

<style scoped>
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
