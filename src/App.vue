<template>
   <v-ons-page>
      <AppToolbar>
        <template slot="left"></template>  
                     
        <template slot="right"></template>
      </AppToolbar>    
      <AppSearch class="center" :query.sync="query" />   
   </v-ons-page>
</template>
<script>

import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import debounce from 'lodash/debounce'
import {github} from './services/Github'
export default{
    components: {
      AppToolbar,
      AppSearch
    },

    data() {
      return {
        query:'',
        repositories:[]
      };
    },

    watch: {
        query: debounce(function(newValue) {
            github.getRepos(this.query).
            then((response) => {
            this.repositories = response.data
            console.log(this.repositories)
           })
        }, 500)
    }
   /* data() {
      return {
        title: 'My app'
      };
    },
    methods: {
      alert() {
        this.$ons.notification.alert('This is an Onsen UI alert notification test.');
      }
    }*/
  };
</script>
