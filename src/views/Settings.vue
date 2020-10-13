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
        <div>
          <router-link to="/user-settings">
            <button class="btn btn-primary">User</button>
          </router-link>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <section class="form">
        <b-col cols="12">
          <div>
            <b-alert v-bind:show="alert">{{ isMsg }}</b-alert>
            <b-alert v-bind:show="alertErr" variant="danger">{{
              isMsg
            }}</b-alert>
            <form v-on:submit.prevent="addItem">
              <input
                style="color: #5d5057"
                type="text"
                v-model="form.menu_name"
                placeholder="Menu name"
                required
              />

              <input
                style="color: #5d5057"
                type="text"
                v-model="form.menu_price"
                placeholder="Menu price"
                required
              />

              <label class="mt-4 ml-2" style="color: #757575">Category</label>
              <b-form-select
                v-model="form.category_id"
                :options="category"
                style="height: 50px"
              ></b-form-select>
              <label class="ml-2 mt-2" style="color: #757575">Status</label>
              <b-form-select
                v-model="form.menu_status"
                :options="status"
                style="height: 50px"
              ></b-form-select>
              <label class="ml-2 mt-2" style="color: #757575"
                >Choose an image</label
              >
              <br />
              <input
                class="ml-2"
                style="color: #5d5057"
                type="file"
                @change="handleFile"
                required
              />
              <!-- <input type="text" v-model="form.category_id" placeholder="Category" required /> -->
              <!-- <input type="text" v-model="form.menu_status" placeholder="Menu status" required /> -->
              <div class="text-right">
                <b-button variant="primary" type="submit" v-show="!isUpdate"
                  >Save</b-button
                >
                <b-button
                  variant="success"
                  type="button"
                  v-show="isUpdate"
                  @click="patchMenu"
                  >Update</b-button
                >
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
              <th style="text-align: center">Category</th>
              <th style="text-align: center">Status</th>
              <th style="text-align: center">Image</th>
              <th></th>
            </tr>
            <tr v-for="(value, index) in products" :key="index">
              <td style="line-height: 50px">{{ value.menu_name }}</td>
              <td style="line-height: 50px">Rp. {{ value.menu_price }}</td>
              <td style="text-align: center; line-height: 50px">
                {{ value.category_id }}
              </td>
              <td style="text-align: center; line-height: 50px">
                {{ value.menu_status }}
              </td>
              <td style="text-align: center">
                <img style="width: 60px" :src="port + value.menu_image" alt />
              </td>
              <td style="text-align: center">
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      // form dropdowns
      category: [
        // { value: null, text: 'Please select an option' },
        { value: '1', text: 'Food' },
        { value: '2', text: 'Drink' },
        { value: '3', text: 'Dessert' }
      ],
      status: [
        // { value: null, text: 'Please select an option' },
        { value: '1', text: 'Available' },
        { value: '0', text: 'Not Available' }
      ],
      // post
      form: {
        menu_name: '',
        category_id: '',
        menu_price: '',
        menu_status: '',
        menu_image: {}
      },
      isMsg: '',
      alert: false,
      alertErr: false,
      // patch
      isUpdate: false,
      menu_id: '',
      port: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getAllMenu()
  },
  computed: {
    ...mapGetters({ products: 'getProduct' })
  },
  methods: {
    ...mapActions(['addMenu', 'editMenu', 'deleteMenu', 'getAllMenu']),
    handleFile(event) {
      this.form.menu_image = event.target.files[0]
    },
    addItem() {
      const data = new FormData()
      data.append('menu_name', this.form.menu_name)
      data.append('menu_price', this.form.menu_price)
      data.append('category_id', this.form.category_id)
      data.append('menu_status', this.form.menu_status)
      data.append('menu_image', this.form.menu_image)
      this.addMenu(data)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.getAllMenu()
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'error',
            title: err.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    updateItem(value) {
      this.form = {
        menu_name: value.menu_name,
        category_id: value.category_id,
        menu_price: value.menu_price,
        menu_status: value.menu_status,
        menu_image: value.menu_image
      }
      this.menu_id = value.menu_id
      this.isUpdate = true
      this.$router.push(`?=${this.menu_id}`)
    },
    patchMenu() {
      this.isUpdate = false
      const data = new FormData()
      data.append('menu_name', this.form.menu_name)
      data.append('menu_price', this.form.menu_price)
      data.append('category_id', this.form.category_id)
      data.append('menu_status', this.form.menu_status)
      data.append('menu_image', this.form.menu_image)

      const setData = {
        menu_id: this.menu_id,
        form: data
      }
      this.editMenu(setData)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res.msg,
            showConfirmButton: false,
            timer: 1500
          })
          this.getAllMenu()
        })
        .catch((err) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: err.data.msg,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    deleteItem(data) {
      this.menu_id = data.menu_id
      this.deleteMenu(this.menu_id)
        .then((res) => {
          this.$swal
            .fire({
              title: 'Are you sure?',
              icon: 'warning',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: 'Cancel'
            })
            .then((res) => {
              console.log(res)
              /* Read more about isConfirmed, isDenied below */
              if (res.isConfirmed) {
                this.$swal.fire('Item deleted', '', 'success')
                this.getAllMenu()
              }
            })
        })
        .catch((err) => {
          console.log(err)
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
