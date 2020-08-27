<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div class="setting">
          <router-link to="/">
            <b-icon icon="arrow-left-square-fill" font-scale="2"></b-icon>
          </router-link>
        </div>
        <div class="setting">
          <h5>Settings</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <section class="form">
        <b-col cols="12">
          <div>
            <b-alert v-bind:show="alert">{{ isMsg }}</b-alert>
            <form v-on:submit.prevent="addItem">
              <input type="text" v-model="form.menu_name" placeholder="Menu name" required />

              <input type="text" v-model="form.menu_price" placeholder="Menu price" required />

              <input type="text" v-model="form.category_id" placeholder="Category" required />

              <input type="text" v-model="form.menu_status" placeholder="Menu status" required />
              <div class="text-right">
                <b-button variant="primary" type="submit" v-show="!isUpdate">Save</b-button>
                <b-button
                  variant="success"
                  type="button"
                  v-show="isUpdate"
                  @click="patchMenu"
                >Update</b-button>
              </div>
            </form>
          </div>
        </b-col>
      </section>
    </b-row>
    <b-row>
      <section class="table">
        <b-col cols="12">
          <table id="items">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th style="text-align: center;">Category</th>
              <th style="text-align: center;">Status</th>
              <th></th>
            </tr>
            <tr v-for="(value, index) in products" :key="index">
              <td>{{ value.menu_name }}</td>
              <td>Rp. {{ value.menu_price }}</td>
              <td style="text-align: center;">{{ value.category_id }}</td>
              <td style="text-align: center;">{{ value.menu_status }}</td>
              <td style="text-align: center;">
                <b-button
                  variant="success"
                  style="margin: 10px 10px"
                  @click="updateItem(value)"
                  size="sm"
                >
                  <b-icon-tools font-scale="1"></b-icon-tools>
                </b-button>
                <b-button variant="danger" @click="deleteItem(value)" size="sm">
                  <b-icon-trash font-scale="1"></b-icon-trash>
                </b-button>
              </td>
            </tr>
          </table>
        </b-col>
      </section>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Settings',
  data() {
    return {
      // get
      page: 1,
      limit: 100,
      products: [],
      // post
      form: {
        category_id: '',
        menu_name: '',
        menu_price: '',
        menu_status: ''
      },
      isMsg: '',
      alert: false,
      // patch
      isUpdate: false,
      menu_id: ''
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      axios
        .get(`http://localhost:3000/menu?page=${this.page}&limit=${this.limit}`)
        .then((res) => {
          this.$router.push(`?page=${this.page}&limit=${this.limit}`)
          this.products = res.data.data
          this.$emit('allProduct', this.products)
        })
        .catch((err) => console.log(err))
    },
    addItem() {
      axios
        .post('http://localhost:3000/menu', this.form)
        .then((res) => {
          this.isMsg = res.data.msg
          this.alert = true
          this.getMenu()
          setTimeout(() => {
            this.alert = false
          }, 3000)
        })
        .catch((err) => console.log(err))
    },
    updateItem(data) {
      this.form = {
        menu_name: data.menu_name,
        category_id: data.category_id,
        menu_price: data.menu_price,
        menu_status: data.menu_status
      }
      this.isUpdate = true
      this.menu_id = data.menu_id
      this.$router.push(`?=${this.menu_id}`)
    },
    patchMenu() {
      this.isUpdate = false
      axios
        .patch(`http://localhost:3000/menu/${this.menu_id}`, this.form)
        .then((res) => {
          this.isMsg = res.data.msg
          this.alert = true
          this.getMenu()
          setTimeout(() => {
            this.alert = false
          }, 3000)
        })
        .catch((err) => console.log(err))
    },
    deleteItem(data) {
      this.menu_id = data.menu_id
      axios.delete(`http://localhost:3000/menu/${this.menu_id}`).then((res) => {
        this.$router.push(`?=${this.menu_id}`)
        this.isMsg = res.data.msg
        this.alert = true
        this.getMenu()
        setTimeout(() => {
          this.alert = false
        }, 7000)
      })
    }
  }
}
</script>

<style scoped>
.setting {
  display: inline-block;
  margin-top: -50px;
}

.setting h5 {
  /* text-align: center; */
  font-size: 30px;
  margin-left: -20px;
}

/* FORMS */
.form,
.table {
  margin-top: -50px;
}

input[type='text'],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='submit'] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* TABLE */
#items {
  border-collapse: collapse;
  width: 100%;
}

#items td,
#items th {
  border: 1px solid #ddd;
  padding: 8px;
}

#items tr:nth-child(even) {
  background-color: white;
  transition: 0.1s;
}

#items tr:hover {
  background-color: #ddd;
}

#items th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: magenta;
  color: white;
}

@media (max-width: 660.98px) {
  th,
  td {
    font-size: 13px;
  }
}
</style>
