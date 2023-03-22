<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <h1>Таблица пользователей</h1>
            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="5"
                class="elevation-12"
            ></v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {

  name: 'UserTable',

  data() {
    return {
      headers: [
        {
          text: 'Пользователь',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Имя', value: 'name'},
        {text: 'Email', value: 'email'},
        {text: 'Дата рождения', value: 'birthday'},
      ],
      users: [],
    }
  },

  async mounted() {
    let status;

    await axios.get('/api/users', {headers: {'Accept': 'application/json'}})
        .then(response => {
          this.users = response.data;
          status = response.status
        })
        .catch(error => {
          console.log(error.data);
          status = error.response.status
        })

    if(status === 401) {
      await this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>