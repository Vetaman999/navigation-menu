<template>
    <v-navigation-drawer permanent absolute temporary overlay-opacity>

        <v-toolbar>

            <v-app-bar-nav-icon @click="permanent = !permanent"></v-app-bar-nav-icon>

            <v-divider vertical></v-divider>

            <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />

            <v-toolbar-title>SFE</v-toolbar-title>


        </v-toolbar>

        <v-list>

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
</template>

<script>

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
};
</script>
