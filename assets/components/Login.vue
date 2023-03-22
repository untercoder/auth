<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h1>Форма авторизации</h1>
            <v-alert
                dense
                outlined
                type="error"
                v-if="status === 401"
            >
              Неверные данные доступ запрещен!
            </v-alert>
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field
                      name="login"
                      label="Login"
                      type="text"
                      v-model="loginData.username"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="loginData.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click="authMethod()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',

  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      authUser: [],
      status: null
    }
  },

  methods: {
    async authMethod() {

      const response = await axios.post('/api/login', this.loginData)
          .then(response => {this.authUser = response.data; this.status = response.status})
          .catch(error => {console.log(error.data); this.status = error.response.status})

      console.log(this.status);

      if(this.status === 200) {
        await this.$router.push({name: 'table'})
      }
    }
  },

  async mounted() {
    let status;
    const response = await axios.post('/api/login')
        .then(response => {
          status = response.status
        })
        .catch(error => {
          status = error.response.status
        })

    if(status === 200) {
      await this.$router.push({name: 'table'})
    }
  }
};
</script>

<style></style>