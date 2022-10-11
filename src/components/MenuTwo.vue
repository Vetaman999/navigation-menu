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
      <v-navigation-drawer app v-model="drawer" absolute temporary>
        <div class="navlogo">
          <v-img class="shrink mr-2" contain transition="scale-transition" width="40"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />
          <h3 class="headline">APLICACION</h3>
        </div>
        <v-list dense nav>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group :value="true">
            <template v-slot:activator>
              <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Users</v-list-item-title>

            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>

                </v-list-item-content>
              </template>

              <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list-group>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Cuentas</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>
  
<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 0,
    admins: [
        ['Management'],
        ['Settings'],
      ],
      cruds: [
        ['Create'],
        ['Read'],
        ['Update'],
        ['Delete'],
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