<template>
  <v-app>

    <MenuThree></MenuThree>
    <v-navigation-drawer expand-on-hover permanent>
      <Drawer />
    </v-navigation-drawer>
    <!--
    
      <MenuOne></MenuOne> 
      <MenuOne></MenuOne>
        -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuTwo from './components/MenuTwo.vue';
import MenuOne from './components/MenuOne.vue';
import MenuThree from './components/MenuThree.vue';
import Drawer from './components/Drawer.vue'


export default {
  components: {
    MenuTwo,
    MenuOne,
    MenuThree,
    Drawer
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
