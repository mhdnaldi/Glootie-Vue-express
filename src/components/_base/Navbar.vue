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
        <img src="../../assets/icons/magnifying-glass.png" alt />
      </div>
    </b-col>
    <b-col cols lg="4" sm="12" xs="12" justified class="nav-cart">
      <h2 class="text-center" style="margin-top: 10px">
        Cart
        <span>0</span>
      </h2>
    </b-col>
  </b-row>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.navbar .one {
  margin-left: 25px;
}

.navbar .two {
  margin-right: 25px;
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
