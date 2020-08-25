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
    <div class="sort">
      <b-dropdown id="dropdown-1" right text="Sort" size="sm" class="m-md-2" @click="sortItem">
        <b-dropdown-item>{{sortPriceAsc[0]}} - {{sortPriceAsc[1]}}</b-dropdown-item>
        <b-dropdown-item>{{sortPriceDesc[0]}} - {{sortPriceDesc[1]}}</b-dropdown-item>
        <b-dropdown-item @click="sortItem">{{sortNameAsc[0]}} - {{sortNameAsc[1]}}</b-dropdown-item>
        <b-dropdown-item @click="sortItem">{{sortNameDesc[0]}} - {{sortNameDesc[1]}}</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      sortPriceAsc: ['Price', 'asc'],
      sortPriceDesc: ['Price', 'desc'],
      sortNameAsc: ['Name', 'asc'],
      sortNameDesc: ['Name', 'desc']
    }
  },
  methods: {
    sortItem() {
      const setData = {
        priceLow: this.sortPriceAsc,
        priceHigh: this.sortPriceDesc,
        nameLow: this.sortNameAsc,
        nameHigh: this.sortNameDesc
      }
      this.$emit('sortData', setData)
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
