<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Форма авторизации</v-toolbar-title>
              </v-toolbar>
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
                <v-btn color="primary" v-on:click="AuthMethod(loginData)">Login</v-btn>
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
      authUser: []
    }
  },

  methods: {
    AuthMethod () {

      axios.post('/api/login', this.loginData)
          .then(response => this.authUser = response.data)
          .catch(error => console.log(error.data))

      console.log(this.authUser);
    }
  }
};
</script>

<style></style>