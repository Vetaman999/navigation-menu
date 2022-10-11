<template>
  <div>
    <div>
      <v-app-bar app class="appbar">
        <v-app-bar-nav-icon color="primary" dark @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition" width="40" />
      </v-app-bar>
    </div>
    <div>
      <v-navigation-drawer  absolute  v-model="drawer"  >
        <div class="navlogo">
          <v-img class="shrink mr-2" contain transition="scale-transition" width="40"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />
          <h3 class="headline">APLICACION</h3>
        </div>
        <v-list shaped no-action dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-menu v-model="menu" :close-on-content-click="false" offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on" v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-menu v-model="menu1" :close-on-content-click="false" offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-list shaped no-action dense>
                    <v-list-item v-bind="attrs" v-on="on" v-for="(item, i) in items" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </template>
                <v-list shaped no-action dense>
                  <v-list-item v-for="(item1, i) in items1" :key="i">

                    <v-list-item-content>
                      <v-list-item-title v-text="item1.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-menu>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    menu: false,
    menu1: false,
    selectedItem: 0,
    closeOnContentClick: true,
    closeOnClick: true,
    items: [
      { text: 'My Files', icon: 'mdi-folder' },
      { text: 'Shared with me', icon: 'mdi-account-multiple' },
      { text: 'Starred', icon: 'mdi-star' },
      { text: 'Recent', icon: 'mdi-history' },
      { text: 'Offline', icon: 'mdi-check-circle' },
      { text: 'Uploads', icon: 'mdi-upload' },
      { text: 'Backups', icon: 'mdi-cloud-upload' },
    ],
    items1: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>

<style>
.navlogo {
  height: 100px;
}

.navlogo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>