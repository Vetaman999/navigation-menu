<template>
    <div>
        <v-toolbar >

            <v-img class="ml-3 shrink mr-2" contain transition="scale-transition" width="30"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />

            <v-toolbar-title>SFE</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field class="my-auto" color="teal accent-4" solo prepend-inner-icon="mdi-magnify" append-icon="mdi-filter">
            </v-text-field>

            <v-spacer></v-spacer>

            <Doubts />

            <Apps />

            <Profile />

        </v-toolbar>

    </div>
</template>

<script>
import Profile from '../components/Profile.vue';
import Apps from '../components/Apps.vue';
import Doubts from '../components/Doubts.vue';

export default {
    components: {
        Profile,
        Apps,
        Doubts
    },
    name: 'App',
};
</script>