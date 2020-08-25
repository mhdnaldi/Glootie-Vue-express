<template>
  <b-row>
    <b-col cols lg="8" sm="12" xs="12" class="navbar">
      <div class="one">
        <img src="../../assets/icons/menu.png" alt />
      </div>
      <div>
        <h2 class="title">Glootie</h2>
      </div>
      <div class="two">
        <form v-on:submit.prevent="getInfo">
          <input type="text" v-model="form" placeholder=" Search..." />
          <b-button
            type="submit"
            style="border-radius: 5px; margin-top: -5px"
            size="sm"
            @click="getInfo"
          >
            <img style="width: 15px" src="../../assets/icons/magnifying-glass.png" alt />
          </b-button>
        </form>
      </div>
      <!-- <div class="three">
        <b-dropdown id="dropdown-1" text="Price" size="sm" class="m-md-2">
          <b-dropdown-item>High to Low</b-dropdown-item>
          <b-dropdown-item>Low to High</b-dropdown-item>
        </b-dropdown>
      </div>-->
    </b-col>
    <b-col cols lg="4" sm="12" xs="12" justified class="nav-cart">
      <h2 class="text-center" style="margin-top: 10px">
        Cart
        <span>0</span>
      </h2>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: '',
      getText: ''
    }
  },
  methods: {
    getInfo() {
      this.getText = this.form
      // 1
      console.log(this.getText)
      this.$emit('text', this.getText)
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.navbar .one {
  margin-left: 25px;
}

.nav-cart {
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
}

.nav-cart span {
  background-color: aqua;
  padding: 2px 9px;
  border-radius: 50%;
}

@media (max-width: 991.98px) {
  .nav-cart h2 {
    /* display: none; */
    font-size: 20px;
  }

  .title {
    font-size: 22px;
  }

  img {
    width: 28px;
  }
}
</style>
