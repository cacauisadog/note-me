<template>
  <note-me />
</template>

<script>
  import NoteMe from '@/components/note-me';
  import axios from 'axios';

  export default {
    asyncData ({ store }) {
      return axios
        .get('http://localhost:8000/api/note/')
        .then(response => {
          store.state.notes = response.data;
        });
    },
    components: {
      NoteMe
    }
  }
</script>
