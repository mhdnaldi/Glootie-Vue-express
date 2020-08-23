
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
        <b-row class="charts">
          <b-col cols="11"></b-col>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="revenue">
            <div>
              <h4>Recent Order</h4>
            </div>
            <div>
              <b-dropdown text="Today">
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols lg="11" class="recent">
            <div>
              <h6>INVOICES</h6>
              <hr />
              <h6>#6737212</h6>
            </div>
            <div>
              <h6>Cashier</h6>
              <hr />
              <h6>Cashier 1</h6>
            </div>
            <div>
              <h6>DATE</h6>
              <hr />
              <h6>20 Mei 2021</h6>
            </div>
            <div>
              <h6>ORDERS</h6>
              <hr />
              <h6>Orange Juice</h6>
            </div>
            <div>
              <h6>Amount</h6>
              <hr />
              <h6>Rp. 20000</h6>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
// var ctx = document.getElementById('myChart').getContext('2d')
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'line',

//   // The data for our dataset
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 5, 2, 20, 30, 45]
//       }
//     ]
//   },

//   // Configuration options go here
//   options: {}
// })
// ---------------------------------------------------
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
  height: 400px;
  background-color: aqua;
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
  .revenue {
    display: block;
    text-align: center;
    margin: 10px 0;
  }
}
</style>
