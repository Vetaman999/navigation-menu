<template>
    <div>
        <v-toolbar>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>SFE</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field class="my-auto" solo prepend-inner-icon="mdi-magnify" append-icon="mdi-filter"></v-text-field>

            <v-spacer></v-spacer>

            <Doubts/>

            <Apps/>
            
            <Profile/>

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

    data: () => ({
        //
    }),
};
</script>