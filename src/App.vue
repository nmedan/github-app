<template>
   <div>
      <AppToolbar>
        <template slot="left">Slot1</template>   
        <template slot="right">Slot2</template>
      </AppToolbar>
   </div>
</template>
<script>

import AppToolbar from './components/AppToolbar.vue'
export default{
    components: {
      AppToolbar
    },

  /*  data() {
      return {
        title: 'Github App'
      };
    }*/
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
