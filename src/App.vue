<template>
   <v-ons-page>
      <AppToolbar>
        <template slot="left"></template>                       
        <template slot="right"></template>
      </AppToolbar>    
      <AppSearch class="center" :query.sync="query" />   
      <div v-if="repositories.length">
        <v-ons-list >
          <v-ons-list-header>
              Repositories of {{ query }}
          </v-ons-list-header>
          <v-ons-list-item v-for="(repository, key) in repositories" :key="key">
              <div class="left">
                 <img class="list-item__thumbnail" :src="repository.owner.avatar_url"></img>
              </div>
              <div class="center">
                 <span class="list_item__title"> Name: {{repository.name}} </span>
                 <span class="list_item__subtitle"> Description: {{repository.description}} </span>
              </div>
          </v-ons-list-item>
        </v-ons-list>
      </div>
      <div v-else>
        No repositories
      </div>
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
