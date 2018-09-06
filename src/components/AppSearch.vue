<template>
     <v-ons-search-input 
        @input="$emit('update:query', $event.target.value)" 
        :placeholder="placeholderText"
        :value="query">
     </v-ons-search-input>
</template>
<script>
  export default{
    props: {
        query: String,
        placeholderText: {
            type: String,
            default: 'Search'
        }
    }
  };
</script>