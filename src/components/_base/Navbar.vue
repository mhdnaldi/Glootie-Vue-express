<template>
  <b-row>
    <b-col cols lg="8" sm="12" xs="12" class="navbar">
      <div class="one">
        <a @click="handleLogout">
          <img src="../../assets/icons/menu.png" alt />
        </a>
      </div>
      <div>
        <h2 class="title" style="color: #111; margin-top:2px">Glootie</h2>
      </div>
      <div class="two">
        <form v-on:submit.prevent="getInfo">
          <input type="text" v-model="form" placeholder=" Search..." />
          <b-button
            type="submit"
            style="border-radius: 5px; margin-top: -3px; margin-left: 5px; box-shadow: 1px 1px 2px rgba(0,0,0,0.4)"
            size="sm"
            variant="danger"
            @click="getInfo"
          >
            <img
              class="search-img"
              style="width: 14px"
              src="../../assets/icons/magnifying-glass.png"
              alt
            />
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
        <span>{{ count }}</span>
      </h2>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: '',
      getText: ''
    }
  },
  props: ['count'],
  methods: {
    getInfo() {
      this.getText = this.form
      // 1 mengirim getText ke home.vue
      console.log(this.getText)
      this.$emit('dataText', this.getText)
    },
    ...mapActions({ handleLogout: 'logout' })
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.navbar .one {
  margin-left: 25px;
  cursor: pointer;
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

  .two {
    margin-right: 10px;
  }
}

@media (max-width: 575.98px) {
  input {
    width: 120px;
  }
  .two {
    margin-right: 10px;
  }
}
</style>
