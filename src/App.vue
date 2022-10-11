<template>
  <v-app>
    
    <MenuThree></MenuThree>
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


export default {
  components: {
    MenuTwo,
    MenuOne,
    MenuThree
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
