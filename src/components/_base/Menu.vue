<template>
  <b-col cols lg="7" md="12" sm="12" xs="12" class="menu-items">
    <div
      v-for="(value, index) in products"
      :key="index"
      class="cards"
      style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3) inset; margin: 10px;  background-color: darkgrey;"
    >
      <img src="../../assets/img/bear.png" alt />
      <h5 style="color: #eee">{{ value.menu_name }}</h5>
      <div class="flex">
        <h6 style="color: #111">Rp. {{ value.menu_price }}</h6>
        <b-button class="btn" variant="primary" size="sm">ADD</b-button>
      </div>
    </div>
  </b-col>
</template>

<style scoped>
.menu-items {
  box-sizing: border-box;
  background-color: #cecece;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* gap: 5px; */
}
div {
  padding: 10px;
  box-sizing: border-box;
}

img {
  width: 220px;
}

h5 {
  margin-top: 5px;
}

h6 {
  margin-top: -10px;
  margin-left: -10px;
}

.btn {
  /* margin-right: 10px; */
  margin-top: -16px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
}

.cards {
  /* border: 1px solid white; */
  border-radius: 20px;
  margin: 5px 1px;
  box-sizing: border-box;
}

.flex {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1024.98px) {
  .menu-items {
    grid-template-columns: 1fr 1fr;
    gap: 5px;
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
  }
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      page: 1,
      limit: 100,
      products: []
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      axios // 1. MENGAMBIL SEMUA DATA
        .get(`http://localhost:3000/menu?page=${this.page}&limit=${this.limit}`)
        .then((res) => {
          this.products = res.data.data
          // console.log(this.products)
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
