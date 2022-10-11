<template>
    <div>
        <v-menu bottom min-width="250px" rounded offset-y>

            <template v-slot:activator="{ on, attrs }">

                <v-btn class="ma-2" color="teal accent-4" icon small fab v-bind="attrs" v-on="on">
                    <v-icon>mdi-help</v-icon>
                </v-btn>

            </template>

            <v-card class="mx-auto">

                <v-card-text>

                    <p class="text-h4 text--primary">
                        Necesitas ayuda?
                    </p>
                    <v-divider></v-divider>
                    <p>Consejo</p>
                    <div class="text--primary">
                        relating to or dependent on charity; charitable.<br>
                        "an eleemosynary educational institution."
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="teal accent-4">
                        Gracias
                    </v-btn>
                </v-card-actions>

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