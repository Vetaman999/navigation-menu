<template>
    <div>
        <v-menu bottom min-width="250px" rounded offset-y>

            <template v-slot:activator="{ on, attrs }">

                <v-btn class="ma-2" color="teal accent-4" icon fab small v-bind="attrs" v-on="on">
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-btn>

            </template>

            <v-card class="mx-auto text-center spacing-playground pa-4" height="400" width="400">
                <v-card-title>Applications</v-card-title>
                <v-divider></v-divider>
                <v-row class="mt-5">
                    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                        <v-card class="mx-auto" link elevation="0">
                            <v-icon color="teal">mdi-view-dashboard</v-icon>
                            <p>app</p>
                        </v-card>
                    </v-col>
                </v-row>

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

