<template>
    <div id="app">
        <v-card class="mx-auto mt-10" max-width="400" >
            <v-card-title>{{ info.name1 }}</v-card-title>
            <v-card-subtitle>{{ info.password1 }}</v-card-subtitle>
        </v-card>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Test',
    data: function () {
        return {
            info: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/test')//ruta que nos manda el hapi
            .then((res) => {
                this.info = res.data;
                console.log(res.data);
            }
            )
            .catch((err) => console.log(err))
    },
};
</script>