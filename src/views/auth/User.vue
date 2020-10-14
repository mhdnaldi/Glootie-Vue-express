<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <div class="setting">
          <router-link to="/settings">
            <b-icon icon="arrow-left-square-fill" font-scale="2"></b-icon>
          </router-link>
        </div>
        <div class="setting">
          <h5>User Settings</h5>
        </div>
        <div></div>
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
                v-focus
                style="color: #5d5057"
                type="text"
                v-model="form.user_email"
                placeholder="Email"
                required
              />

              <input
                style="color: #5d5057"
                type="text"
                v-model="form.user_password"
                placeholder="Password"
                required
              />
              <input
                style="color: #5d5057"
                type="text"
                v-model="form.user_name"
                placeholder="Username"
                required
              />
              <input
                style="color: #5d5057"
                type="text"
                v-model="form.user_role"
                placeholder="User Role"
                required
              />
              <input
                style="color: #5d5057"
                type="text"
                v-model="form.user_status"
                placeholder="User Status"
                required
              />
              <div class="text-right">
                <b-button
                  variant="success"
                  type="button"
                  @click="patchUser"
                  v-show="isUpdate"
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
              <th>Email</th>
              <th>Username</th>
              <th style="text-align: center">Role</th>
              <th style="text-align: center">Status</th>
              <th></th>
            </tr>
            <tr v-for="(value, index) in users" :key="index">
              <td style="line-height: 50px">{{ value.user_email }}</td>
              <td style="line-height: 50px">{{ value.user_name }}</td>
              <td style="text-align: center; line-height: 50px">
                {{ value.user_role }}
              </td>
              <td style="text-align: center; line-height: 50px">
                {{ value.user_status }}
              </td>
              <td style="text-align: center; line-height: 50px">
                <b-button
                  variant="success"
                  style="margin: 10px 10px"
                  size="sm"
                  @click="updateUser(value)"
                >
                  <b-icon-tools font-scale="1"></b-icon-tools>
                </b-button>
                <!-- <b-button variant="danger" size="sm" @click="destroyUser(value.user_id)">
                  <b-icon-trash font-scale="1"></b-icon-trash>
                </b-button>-->
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
  name: 'UserSettings',
  data() {
    return {
      form: {
        user_email: '',
        user_password: '',
        user_name: '',
        user_role: '',
        user_status: ''
      },
      isMsg: '',
      alert: false,
      alertErr: false,
      // patch
      isUpdate: false,
      user_id: ''
    }
  },
  created() {
    this.getAllUsers()
  },
  computed: {
    ...mapGetters({ users: 'getUser' })
  },
  methods: {
    ...mapActions(['getAllUsers', 'editUsers', 'deleteUser']),
    onSubmit() {
      this.getAllUsers(this.form)
    },
    updateUser(value) {
      this.form = {
        user_email: value.user_email,
        user_password: value.user_password,
        user_name: value.user_name,
        user_role: value.user_role,
        user_status: value.user_status
      }
      this.user_id = value.user_id
      this.isUpdate = true
    },
    patchUser() {
      const setData = {
        user_id: this.user_id,
        form: this.form
      }
      this.editUsers(setData)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1500
          })
          this.getAllUsers()
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
    destroyUser(value) {
      this.user_id = value
      this.deleteUser(this.user_id)
        .then((res) => {
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1500
          })
          this.getAllUsers()
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
