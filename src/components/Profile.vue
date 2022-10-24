<template>
    <div>
        <v-menu bottom min-width="250px" rounded offset-y>

            <template v-slot:activator="{ on, attrs }">

                <v-btn color="teal accent-4" class="ma-2" fab icon small v-bind="attrs" v-on="on">
                    <v-icon size="36px">mdi-account-circle</v-icon>
                </v-btn>

            </template>

            <v-card class="mx-auto">


                <v-card-text>

                    <div style="display:flex; justify-content: space-between; height: 60px;">
                        <v-icon color="teal accent-4" size="50px">mdi-account-circle</v-icon>
                        <div style="height:60px;">
                            <v-card-title>
                                Juan Peres
                            </v-card-title>
                            <v-card-subtitle>administrar cuenta</v-card-subtitle>
                        </div>
                    </div>
                </v-card-text>
                <v-divider></v-divider>

                <v-list dense>

                    <v-list-item-group v-model="selectedItem" color="teal accent-4">

                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content justify-start>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>

                    </v-list-item-group>
                </v-list>


            </v-card>

        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: true,
        items: [
            { text: 'My Archivos', icon: 'mdi-folder' },
            { text: 'Mis Cuentas', icon: 'mdi-account-multiple' },
            { text: 'Favoritos', icon: 'mdi-star' },
            { text: 'Historial', icon: 'mdi-history' },
            { text: 'Desconcetar', icon: 'mdi-check-circle' },
        ],
    }),
}
</script>



