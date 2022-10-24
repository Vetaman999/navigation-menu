<template>
    <div id="app">
        <div>
            <h1 class="title">Consultar Datos</h1>
            <v-btn v-on:click="fetch">Consultar</v-btn>
        </div>
    


        <div v-for="character of characters" v-bind:key="character.id"> 
            <v-card>
                {{ character }}
            </v-card>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Test',
    data: function () {
        return {
            characters: []
        }
    },
    methods: {
        fetch(){
            let result = axios.get('https://rickandmortyapi.com/api/character')
                .then((res) => {
                    this.characters = res.data.results;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
};
</script>