<template>
  <section>
    <b-row>
      <b-col cols lg="1" class="menus">
        <img src="../assets/icons/menu.png" alt />
      </b-col>
      <b-col cols lg="11" class="title">
        <h2>History</h2>
      </b-col>
    </b-row>
    <b-row>
      <Aside />
      <b-col cols lg="11" style="background-color:#eee">
        <b-row details align="left">
          <div class="box day-income">
            <p class="details-p">Today's income</p>
            <h5>Rp. 1000.000</h5>
            <p>+2% Yesterday</p>
          </div>
          <div class="box orders">
            <p class="details-p">Orders</p>
            <p>3270</p>
            <p>+5% Last week</p>
          </div>
          <div class="box year-income">
            <p class="details-p">This years income</p>
            <h5>Rp. 1000.000.000</h5>
            <p>+10% Last year</p>
          </div>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="revenue">
            <div>
              <h4>Revenue</h4>
            </div>
            <div>
              <b-dropdown text="Months">
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
        <b-row class="chart">
          <b-col cols="11"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Aside from '../components/_base/Aside'
export default {
  components: {
    Aside
  }
}
</script>

<style scoped>
.menus img {
  padding: 14px 26px;
}

.title {
  text-align: center;
  padding-top: 14px;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.25);
}

p,
h5 {
  text-indent: 30px;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.details-p {
  padding-top: 35px;
}

.box {
  margin: 15px 20px;
  background-color: greenyellow;
  width: 370px;
  height: 180px;
  border-radius: 10px;
}

.day-income {
  background: linear-gradient(
    278.29deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );
}

.orders {
  background: linear-gradient(
    278.29deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
}

.year-income {
  background: linear-gradient(
    278.29deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
}

.revenue {
  /* background-color: red; */
  margin: 20px 0px 10px 25px;
  display: flex;
  justify-content: space-between;
}
</style>
