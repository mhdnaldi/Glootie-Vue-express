<template>
  <b-col cols lg="1" md="12" sm="12" xs="12" class="aside">
    <div>
      <router-link to="/">
        <img src="../../assets/icons/fork.png" alt />
      </router-link>
    </div>
    <div>
      <router-link to="/history">
        <img src="../../assets/icons/clipboard.png" alt />
      </router-link>
    </div>
    <div>
      <router-link to="/settings">
        <img src="../../assets/icons/add.png" alt />
      </router-link>
    </div>
    <div class="sort" v-if="path === '/'">
      <b-dropdown id="dropdown-1" right text="SORT" size="sm" class="m-md-2">
        <b-dropdown-item @click="sortByPriceAsc">Price Low to High</b-dropdown-item>
        <b-dropdown-item @click="sortByPriceDesc">Price High to Low</b-dropdown-item>
        <b-dropdown-item @click="sortByNameAsc">Name A-Z</b-dropdown-item>
        <b-dropdown-item @click="sortByNameDesc">Name Z-A</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      sortPriceAsc: 'price asc',
      sortPriceDesc: 'price desc',
      sortNameAsc: 'name asc',
      sortNameDesc: 'name desc',
      path: ''
    }
  },
  created() {
    this.path = window.location.pathname
  },
  methods: {
    ...mapActions(['getItem']),
    sortByPriceAsc() {
      this.$emit('sortItem', this.sortPriceAsc)
      this.getItem(this.sortPriceAsc)
    },
    sortByPriceDesc() {
      this.$emit('sortItem', this.sortPriceDesc)
      this.getItem(this.sortPriceDesc)
    },
    sortByNameAsc() {
      this.$emit('sortItem', this.sortNameAsc)
      this.getItem(this.sortNameAsc)
    },
    sortByNameDesc() {
      this.$emit('sortItem', this.sortNameDesc)
      this.getItem(this.sortNameDesc)
    }
  }
}
</script>

<style scoped>
.aside {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
div {
  text-align: center;
  transition: 1s;
}
div img:hover {
  transform: scale(0.9);
}
img {
  width: 36px;
  height: 35px;
  margin: 20px 0;
}
@media (max-width: 991.98px) {
  .aside {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 30px;
  }
  .sort {
    margin-top: 24px;
  }
}
</style>
