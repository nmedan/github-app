<template>
    <v-ons-card>
        <img src = "https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" />
        <div class = "content">
           There are no {{pluralizeType}} here
        </div>
    </v-ons-card>
</template>

<script>
  import pluralize from 'pluralize'
  export default{
    props: {
        type: {
            type:String,
            default: ''
        }
    },

    computed: {
        pluralizeType() {
            return pluralize(this.type);
        }
    }
  };
</script>