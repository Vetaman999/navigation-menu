<template>
    <div>
        <v-toolbar>

            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />

            <v-toolbar-title>SFE</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field class="my-auto" color="teal accent-4" solo prepend-inner-icon="mdi-magnify"
                append-icon="mdi-filter">
            </v-text-field>

            <v-spacer></v-spacer>

            <Doubts />

            <Apps />

            <Profile />

        </v-toolbar>

        <v-navigation-drawer width="55px" overlay-opacity app absolute>

            <v-toolbar>

                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            </v-toolbar>

            <v-list>

                <v-list-item-group v-model="selectedItem" color="teal accent-4">
                    <v-list-item v-for="(item, i) in items" :key="i">

                        <v-menu offset-x v-model="menu" :close-on-content-click="false">

                            <template v-slot:activator="{ on, attrs }">

                                <v-list-item-icon v-bind="attrs" v-on="on">
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>

                            </template>
                            <v-list>

                                <v-list-item v-for="(subItem, j) in item.subItems" :key="j" color="teal accent-4"
                                    :to="subItem.to">

                                    <v-list-item-content>

                                        <v-list-item-title v-text="subItem.title"></v-list-item-title>

                                    </v-list-item-content>

                                </v-list-item>

                            </v-list>
                        </v-menu>

                    </v-list-item>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>

        <v-navigation-drawer v-model="drawer" absolute temporary overlay-opacity>

            <v-toolbar>

                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-divider vertical></v-divider>

                <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />

                <v-toolbar-title>SFE</v-toolbar-title>


            </v-toolbar>


            <v-list-group v-for="(item, i) in items" :key="i" color="teal accent-4" append-icon=""
                :prepend-icon="item.icon" :to="item.to">

                <template v-slot:activator>

                    <v-list-item-content>

                        <v-list-item-title>{{ item.text }}</v-list-item-title>

                    </v-list-item-content>

                </template>

                <v-list-item-group class="pl-10">

                    <v-list-item v-for="(subItem, j) in item.subItems" :key="j" color="teal accent-4" :to="subItem.to">

                        <v-list-item-content>

                            <v-list-item-title> {{ subItem.title }} </v-list-item-title>

                        </v-list-item-content>

                    </v-list-item>

                </v-list-item-group>

            </v-list-group>
        </v-navigation-drawer>

    </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Apps from '../components/Apps.vue';
import Doubts from '../components/Doubts.vue';

export default {
    data: () => ({
        change: false,
        selectedItem: 0,
        permanent: false,
        menu: false,
        drawer: false,
        items: [
            {
                text: 'Real-Time',
                icon: 'mdi-clock',
                to: '/afiliados',
                subItems: [
                    {
                        title: 'My Files',
                        icon: 'mdi-folder',
                        to: '/afiliados',
                    },
                    {
                        title: 'Shared with me',
                        icon: 'mdi-account-multiple',
                        to: '/parametros',
                    },
                    {
                        title: 'Starred',
                        icon: 'mdi-star',
                        to: '/parametrosSFE',
                    },
                ]
            },
            {
                text: 'Audience',
                icon: 'mdi-account',
                to: '/parametros',
                subItems: [
                    {
                        title: 'My Files',
                        icon: 'mdi-folder'
                    },
                    {
                        title: 'Shared with me',
                        icon: 'mdi-account-multiple'
                    }
                ]
            },
            {
                text: 'Star',
                icon: 'mdi-star',
                to: '/parametrosSFE',
            }
        ],
    }),

    components: {
        Profile,
        Apps,
        Doubts,
    },
};
</script>