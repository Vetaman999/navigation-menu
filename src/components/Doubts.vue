<template>
    <div>
        <v-menu bottom min-width="250px" rounded offset-y>

            <template v-slot:activator="{ on, attrs }">

                <v-btn class="ma-2" icon small fab v-bind="attrs" v-on="on">
                    <v-icon>mdi-help</v-icon>
                </v-btn>

            </template>

            <v-card class="mx-auto text-center">

                <v-icon size="40px">mdi-account-circle</v-icon>

                <v-toolbar-title>Juan Peres</v-toolbar-title>

                <v-btn>Administrar Cuenta</v-btn>

            </v-card>

        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({

    }),
}
</script>