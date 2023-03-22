<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h1>404 Page Not Found</h1>
            <v-alert
                dense
                outlined
                type="error"
            >
              Тут ничего нет!
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>