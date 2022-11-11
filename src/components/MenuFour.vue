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
        <v-navigation-drawer width="55px" permanent overlay-opacity app absolute>
            <v-toolbar>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </v-toolbar>
            <div class="mt-5">
                <v-list>
                    <v-list-item-group v-model="selectedItem" color="teal accent-4">
                        <div v-for="(item, index) in items" :key="index">
                            <div v-if="item.menuit_tipo == 1 && item.menuit_nivel == 0">
                                <v-list-item :to="item.menuit_link">
                                    <v-icon v-text="item.menuit_icono"></v-icon>
                                </v-list-item>
                            </div>
                            <div v-else-if="item.menuit_tipo == 0 && item.menuit_nivel == 0">
                                <v-menu offset-x :nudge-width="150">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-list-item :to="item.menuit_link" v-bind="attrs" v-on="on">
                                            <v-icon v-text="item.menuit_icono"></v-icon>
                                        </v-list-item>
                                    </template>
                                    <div v-for="(item, index) in items" :key="index" color="teal accent-4">
                                        <v-list  dense
                                            v-if="item.menuit_tipo == 1 && item.menuit_nivel == 1 && item.menuit_codigo_parent == 'm40'">
                                            <v-list-item :to="item.menuit_link" color="teal accent-4">
                                                <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </v-menu>
                            </div>
                        </div>
                    </v-list-item-group>
                </v-list>
            </div>
            <!-- 

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

            -->
        </v-navigation-drawer>
        <v-navigation-drawer v-model="drawer" absolute temporary overlay-opacity>
            <v-toolbar>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-divider vertical></v-divider>
                <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />
                <v-toolbar-title>SFE</v-toolbar-title>
            </v-toolbar>
            <!--
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
-->
            <div class="mt-5">
                <v-list flat>
                    <v-list-item-group v-model="selectedItem" color="teal accent-4">
                        <div v-for="(item, index) in items" :key="index" :prepend-icon="item.menuit_icono">
                            <div v-if="item.menuit_tipo == 1 && item.menuit_nivel == 0">

                                <v-list-item :to="item.menuit_link">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.menuit_icono"></v-icon>
                                    </v-list-item-icon>
                                    {{ item.menuit_descripcion }}
                                </v-list-item>
                            </div>
                            <div v-else-if="item.menuit_tipo == 0 && item.menuit_nivel == 0">
                                <v-list-group :prepend-icon="item.menuit_icono" v-model="selectedItem2"
                                    color="teal accent-4">
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title :to="item.menuit_link"> {{ item.menuit_descripcion }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <div v-for="(item, index) in items" :key="index">
                                        <v-list class="pl-10"
                                            v-if="item.menuit_tipo == 1 && item.menuit_nivel == 1 && item.menuit_codigo_parent == 'm40'">
                                            <v-list-item :to="item.menuit_link" v-model="selectedItem3"
                                                color="teal accent-4">
                                                <v-list-item-title> {{ item.menuit_descripcion }} </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </div>
                                </v-list-group>
                            </div>
                        </div>
                    </v-list-item-group>
                </v-list>
            </div>
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
                menuit_id: 1,
                menuit_codigo: 'm10',
                menuit_descripcion: 'Afiliados',
                menuit_abrebiatura: 'Afiliados',
                menuit_tipo: 1,
                menuit_nivel: 0,
                menuit_codigo_parent: '0',
                menuit_link: '/afiliados',
                menuit_icono: 'mdi-account',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '30',
                menuit_orden: 3,
                menuit_visible: 1,
            },
            {
                menuit_id: 2,
                menuit_codigo: 'm20',
                menuit_descripcion: 'ParamentrosSFE',
                menuit_abrebiatura: 'ParamentrosSFE',
                menuit_tipo: 1,
                menuit_nivel: 0,
                menuit_codigo_parent: '0',
                menuit_link: '/paramentrossfe',
                menuit_icono: 'mdi-flag',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '30',
                menuit_orden: 3,
                menuit_visible: 1,
            },
            {
                menuit_id: 3,
                menuit_codigo: 'm30',
                menuit_descripcion: 'Paramentros',
                menuit_abrebiatura: 'Paramentros',
                menuit_tipo: 1,
                menuit_nivel: 0,
                menuit_codigo_parent: '0',
                menuit_link: '/paramentros',
                menuit_icono: 'mdi-flag',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '30',
                menuit_orden: 3,
                menuit_visible: 1,
            },
            {
                menuit_id: 4,
                menuit_codigo: 'm40',
                menuit_descripcion: 'Comprovantes',
                menuit_abrebiatura: 'Comprovantes',
                menuit_tipo: 0,
                menuit_nivel: 0,
                menuit_codigo_parent: '0',
                menuit_link: null,
                menuit_icono: 'mdi-ticket',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: null,
                menuit_orden: 4,
                menuit_visible: 1,
            },
            {
                menuit_id: 5,
                menuit_codigo: 'm50',
                menuit_descripcion: 'Factura',
                menuit_abrebiatura: 'Factura',
                menuit_tipo: 1,
                menuit_nivel: 1,
                menuit_codigo_parent: 'm40',
                menuit_link: '/factura',
                menuit_icono: 'nulo.png',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '40',
                menuit_orden: 1,
                menuit_visible: 1,
            },
            {
                menuit_id: 6,
                menuit_codigo: 'm60',
                menuit_descripcion: 'Boleta',
                menuit_abrebiatura: 'Boleta',
                menuit_tipo: 1,
                menuit_nivel: 1,
                menuit_codigo_parent: 'm40',
                menuit_link: '/boleta',
                menuit_icono: 'nulo.png',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '50',
                menuit_orden: 2,
                menuit_visible: 1,
            },
            {
                menuit_id: 7,
                menuit_codigo: 'm70',
                menuit_descripcion: 'N. Crédito',
                menuit_abrebiatura: 'N. Crédito',
                menuit_tipo: 1,
                menuit_nivel: 1,
                menuit_codigo_parent: 'm40',
                menuit_link: '/ncredito',
                menuit_icono: 'nulo.png',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '60',
                menuit_orden: 3,
                menuit_visible: 1,
            },
            {
                menuit_id: 8,
                menuit_codigo: 'm80',
                menuit_descripcion: 'N. Debito',
                menuit_abrebiatura: 'N. Debito',
                menuit_tipo: 1,
                menuit_nivel: 1,
                menuit_codigo_parent: 'm40',
                menuit_link: '/ndebito',
                menuit_icono: 'nulo.png',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '70',
                menuit_orden: 1,
                menuit_visible: 1,
            },
            {
                menuit_id: 9,
                menuit_codigo: 'm90',
                menuit_descripcion: 'G.Remisión',
                menuit_abrebiatura: 'G.Remisión',
                menuit_tipo: 1,
                menuit_nivel: 1,
                menuit_codigo_parent: 'm40',
                menuit_link: '/gremision',
                menuit_icono: 'nulo.png',
                menuit_menu_codigo: 'mglob',
                menuit_perm_codigo: '80',
                menuit_orden: 2,
                menuit_visible: 1,
            },
        ],
    }),
    components: {
        Profile,
        Apps,
        Doubts,
    },
};
</script>