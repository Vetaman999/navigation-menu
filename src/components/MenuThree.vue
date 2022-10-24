<template>
    <div>
        <v-toolbar>

            <v-app-bar-nav-icon @click="permanent = !permanent"></v-app-bar-nav-icon>

            <v-divider vertical></v-divider>

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

        <v-navigation-drawer v-model="permanent" overlay-opacity app expand-on-hover>

            <v-toolbar class="mb-3">

                <v-app-bar-nav-icon @click="permanent = !permanent"></v-app-bar-nav-icon>

                <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />

                <v-toolbar-title>SFE</v-toolbar-title>

            </v-toolbar>

            <v-list nav dense>

                <v-list-item-group v-model="selectedItem">

                    <v-list-group v-for="item in items" color="teal accent-4" append-icon="" :prepend-icon="item.icon"
                        :key="item.text" router :to="item.route">

                        <template v-slot:activator>

                            <v-list-item-content>

                                <v-list-item-title v-text="item.text"></v-list-item-title>

                            </v-list-item-content>

                        </template>

                        <v-list-item-group class="pl-10">

                            <v-list-item v-for="child in item.items" :key="child.title" sub-group color="teal accent-4"
                                router :to="child.route">

                                <v-list-item-content>

                                    <v-list-item-title v-text="child.title"></v-list-item-title>

                                </v-list-item-content>

                            </v-list-item>

                        </v-list-item-group>

                    </v-list-group>
                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>

    </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Apps from '../components/Apps.vue';
import Doubts from '../components/Doubts.vue';


export default {
    data: () => ({
        permanent: false,
        selectedItem: 0,
        items: [
            { text: 'Afiliados', icon: 'mdi-account-multiple', route: '/afiliados' },
            { text: 'Parametros SFE', icon: 'mdi-folder', route: '/parametrosSFE' },
            { text: 'Parametros', icon: 'mdi-folder', route: '/parametros' },
            { text: 'Comprobantes', icon: 'mdi-history', items: [{ title: 'Factura', route: '/afiliados' }, { title: 'Boleta', route: '/parametros' }, { title: 'N. Crédito', route: '/' }, { title: 'N. Débito', route: '/parametrosSFE' }, { title: 'G. Remisión', route: '/test' },], },
        ],
    }),

    components: {
        Profile,
        Apps,
        Doubts
    },
    name: 'App',
};
</script>


<!--

    <v-list nav dense>

                <v-list-item-group v-model="selectedItem">

                    <v-list-group v-for="item in items" color="teal accent-4" append-icon="" :prepend-icon="item.icon"
                        :key="item.text" router :to="item.route">

                        <template v-slot:activator>

                            <v-list-item-content>

                                <v-list-item-title v-text="item.text"></v-list-item-title>

                            </v-list-item-content>

                        </template>

                        <v-list-item-group class="pl-10">

                            <v-list-item v-for="child in item.items" :key="child.title" sub-group color="teal accent-4"
                                router :to="child.route">

                                <v-list-item-content>

                                    <v-list-item-title v-text="child.title"></v-list-item-title>

                                </v-list-item-content>

                            </v-list-item>

                        </v-list-item-group>

                    </v-list-group>
                </v-list-item-group>
            </v-list>

-->