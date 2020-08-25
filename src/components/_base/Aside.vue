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
      <b-dropdown id="dropdown-1" right text="Sort" size="sm" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
  </b-col>
</template>

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
