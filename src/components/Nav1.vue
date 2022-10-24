<template>
    <v-navigation-drawer width="55px" overlay-opacity app absolute>

        <v-toolbar>

            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        </v-toolbar>

        <v-list>

            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="item in items" :key="item.text">

                    <v-menu offset-x v-model="menu" :close-on-content-click="false">

                        <template v-slot:activator="{ on, attrs }">

                            <v-list-item-icon v-bind="attrs" v-on="on">
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> 

                        </template>
                        <v-list>

                            <v-list-item v-for="child in item.child" :key="child.title">
                                <v-list-item-title>{{ child.title }}</v-list-item-title>
                            </v-list-item>

                        </v-list>
                    </v-menu>

                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        menu: false,
        drawer: false,
        selectedItem: 1,
        items: [
            {
                text: 'Real-Time', icon: 'mdi-clock', child: [{ title: 'My Files', icon: 'mdi-folder' }, { title: 'Shared with me', icon: 'mdi-account-multiple' }, { title: 'Starred', icon: 'mdi-star' },]
            },
            { text: 'Audience', icon: 'mdi-account', child: [{ title: 'My Files', icon: 'mdi-folder' }, { title: 'Shared with me', icon: 'mdi-account-multiple' }] },
            { text: 'Conversions', icon: 'mdi-flag', child: [{ title: 'My Files', icon: 'mdi-folder' }] },
            { text: 'Conversions1', icon: 'mdi-flag',child: [] },
            { text: 'Conversions2', icon: 'mdi-flag',child: [] },
            { text: 'Conversions3', icon: 'mdi-flag',child: [] },

        ],
    }),
}
</script>
