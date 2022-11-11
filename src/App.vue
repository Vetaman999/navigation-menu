<template>
  <v-app>

    <MenuFour />

    <!--
      <MenuThree></MenuThree>
    -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuThree from './components/MenuThree.vue';
import MenuFour from './components/MenuFour.vue';
import MenuFive from './components/MenuFour.vue';


export default {
  components: {
    MenuThree,
    MenuFour,
    MenuFive
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
