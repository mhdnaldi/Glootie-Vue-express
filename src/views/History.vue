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
            <h5>Rp. {{todayIncome}}</h5>
          </div>
          <div class="box orders">
            <p class="details-p">Orders</p>
            <h5>{{weekOrders}}</h5>
          </div>
          <div class="box year-income">
            <p class="details-p">This years income</p>
            <h5>Rp. 1000.000.000</h5>
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
        <b-row class="charts">
          <b-col cols="11">
            <line-chart class="chart-lines" :data="{'2017-05-13': 2, '2017-05-14': 5}"></line-chart>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="revenue">
            <div>
              <h4>Recent Order</h4>
            </div>
            <div>
              <b-dropdown text="Today">
                <b-dropdown-item>Today</b-dropdown-item>
                <b-dropdown-item @click="weekHistory">This Week</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="recent">
            <div>
              <h6>INVOICES</h6>
              <hr />
              <h6>#</h6>
            </div>
            <div>
              <h6>Cashier</h6>
              <hr />
              <h6>Cashier 1</h6>
            </div>
            <div>
              <h6>DATE</h6>
              <hr />
              <h6></h6>
            </div>
            <div>
              <h6>ORDERS</h6>
              <hr />
              <h6>Orange Juice</h6>
            </div>
            <div>
              <h6>Amount</h6>
              <hr />
              <h6>Rp.</h6>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Aside from '../components/_base/Aside'
import axios from 'axios'
export default {
  data() {
    return {
      thisWeekHistory: [],
      thisWeekOrders: [],
      weekOrders: '',
      todayIncome: ''
    }
  },
  components: {
    Aside
  },
  created() {
    this.thisWeekTotalOrders()
    this.todaysIncome()
  },
  methods: {
    weekHistory() {
      axios
        .get('http://localhost:3000/history/week')
        .then((res) => {
          this.thisWeekHistory = res
        })
        .catch((err) => console.log(err))
    },
    weekOrder() {
      axios
        .get('http://localhost:3000/history/week')
        .then((res) => {
          this.thisWeekOrders = res.data
        })
        .catch((err) => console.log(err))
    },
    thisWeekTotalOrders() {
      return axios
        .get('http://localhost:3000/order/this-week-order')
        .then((res) => {
          this.weekOrders = res.data.data
        })
        .catch((err) => console.log(err))
    },
    todaysIncome() {
      return axios
        .get('http://localhost:3000/history/total-today')
        .then((res) => {
          this.todayIncome = res.data.data
        })
        .catch((err) => console.log(err))
    }
  },
  computed: {}
}
</script>

<style scoped>
.chart-lines {
  margin: 10px 50px;
}

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
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
  border-radius: 10px;
}

.orders {
  background: linear-gradient(
    278.29deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
  border-radius: 10px;
}

.year-income {
  background: linear-gradient(
    278.29deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
}

.revenue {
  /* background-color: red; */
  margin: 20px 0px 10px 25px;
  display: flex;
  justify-content: space-between;
}

.charts {
  height: 320px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
  margin: 10px 40px 20px 10px;
}

.recent {
  margin: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.recent div {
  text-align: center;
}

@media (max-width: 991.98px) {
  .chart-lines {
    margin: 10px 30px;
  }
  .menus {
    display: none;
  }

  .box {
    /* text-align: center; */
    margin: 20px auto;
  }

  .recent {
    grid-template-columns: 1fr;
  }

  .recent div {
    /* border: 1px solid grey; */
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) inset;
    border-radius: 20px;
    margin: 20px;
  }

  hr {
    display: none;
  }
  .recent div h6 {
    padding-top: 8px;
  }

  .charts {
    margin: 10px;
  }
}

@media (max-width: 660.98px) {
  .chart-lines {
    margin: 10px 10px;
  }
  .revenue {
    display: block;
    text-align: center;
    margin: 10px 0;
  }
}
</style>
