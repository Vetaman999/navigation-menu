<template>
    <div>
        <v-menu bottom min-width="250px" rounded offset-y>

            <template v-slot:activator="{ on, attrs }">

                <v-btn color="teal accent-4" class="ma-2" fab icon small v-bind="attrs" v-on="on">
                    <v-icon size="36px">mdi-account-circle</v-icon>
                </v-btn>

            </template>

            <v-card class="mx-auto text-center">

                <v-icon color="teal accent-4" size="50px">mdi-account-circle</v-icon>

                <v-toolbar-title>Juan Peres</v-toolbar-title>

                <v-btn color="teal accent-4" text>Administrar Cuenta</v-btn>

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



