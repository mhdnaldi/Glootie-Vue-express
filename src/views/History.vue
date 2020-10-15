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
      <b-col cols lg="11" style="background-color: #eee">
        <b-row details align="left">
          <div class="box day-income">
            <p class="details-p">Today's Income</p>
            <h5>Rp. {{ todayIncome }}.-</h5>
          </div>
          <div class="box orders">
            <p class="details-p">Orders</p>
            <h5>{{ weekOrders }}</h5>
          </div>
          <div class="box year-income">
            <p class="details-p">This Years Income</p>
            <h5>Rp. {{ yearIncome }}.-</h5>
          </div>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="revenue">
            <div>
              <h4>Revenue</h4>
            </div>
            <div>
              <!-- <b-dropdown text="Months">
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
              </b-dropdown>-->
            </div>
          </b-col>
        </b-row>
        <b-row class="charts">
          <b-col cols="11">
            <column-chart :data="chartData" class="chart-lines"></column-chart>
            <!-- <line-chart class="chart-lines" :data="{'2017-05-13': 2, '2017-05-14': 5}"></line-chart> -->
          </b-col>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="revenue">
            <div>
              <h4>Recent Order</h4>
            </div>
            <div>
              <!-- <b-dropdown text="Today">
                <b-dropdown-item>Today</b-dropdown-item>
                <b-dropdown-item>This Week</b-dropdown-item>
              </b-dropdown>-->
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="11">
            <!-- TABLE -->
            <table id="recent">
              <tr>
                <th style="text-align: center">INVOICES</th>
                <th style="text-align: center">CASHIER</th>
                <th style="text-align: center">DATE</th>
                <th style="text-align: center">ORDERS</th>
                <th style="text-align: center">AMOUNT</th>
              </tr>
              <tr v-for="(value, index) in recentOrders" :key="index">
                <td>#{{ value.invoice }}</td>
                <td>{{ value.cashier }}</td>
                <td>{{ value.created_at.slice(0, 10) }}</td>
                <td>
                  <ul v-for="(value, index) in value.orders" :key="index">
                    <li>{{ value.menu_name }}</li>
                  </ul>
                </td>
                <td>Rp. {{ value.history_subtotal }}</td>
              </tr>
            </table>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Aside from '../components/_base/Aside'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Aside
  },
  created() {
    this.todaysIncomeHistory()
    this.recentOrdersHistory()
    this.chart()
    this.weeksOrdersHistory()
    this.yearsIncome()
  },
  computed: {
    ...mapGetters({
      recentOrders: 'recentProduct',
      todayIncome: 'todaysIncome',
      weekOrders: 'weeksOrder',
      yearIncome: 'yearsIncome',
      chartData: 'chartsData',
      user: 'userLogin'
    })
  },
  methods: {
    ...mapActions([
      'recentOrdersHistory',
      'todaysIncomeHistory',
      'weeksOrdersHistory',
      'yearsIncome',
      'chart'
    ])
  }
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

/* animation */
@keyframes anim {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  50% {
    opacity: 0.5;
    /* transform: translateY(13px); */
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.day-income {
  background: linear-gradient(
    278.29deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
  border-radius: 10px;
  animation: anim 1s;
}

.orders {
  background: linear-gradient(
    278.29deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
  border-radius: 10px;
  animation: anim 2s;
}

.year-income {
  background: linear-gradient(
    278.29deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
  animation: anim 3s;
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

  .charts {
    margin: 10px;
  }

  #recent {
    font-size: 12px;
    text-align: left;
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

  #recent {
    margin-top: 20px;
    width: 100%;
    padding-left: -100px;
  }
}
/* TABLE */
#recent {
  border-collapse: collapse;
  width: 100%;
  margin-left: 25px;
  margin-bottom: 30px;
  /* border-radius: 10px; */
}

#recent td,
#recent th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#recent tr:nth-child(even) {
  background-color: #f2f2f2;
  transition: 0.2s;
}

#recent tr:hover {
  background-color: #ddd;
}

#recent th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #fbb2b4;
  color: black;
}
td ul {
  /* list-style-type: none; */
  text-align: left;
}
</style>
