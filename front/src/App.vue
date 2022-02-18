<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Toutes les annonces</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="menuOpen = !menuOpen" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <Menu v-if="menuOpen"> </Menu>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",

  data: () => ({
    menuOpen: false,
  }),
};
</script>
