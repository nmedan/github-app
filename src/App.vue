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
export default{
    components: {
      AppToolbar,
      AppSearch
    },

    data() {
      return {
        query:''
      };
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
