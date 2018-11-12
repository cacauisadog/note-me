<template>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="state.drawer = !state.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Note Me</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn 
        icon
        @click="addNewNote"
      >
        <v-icon>note_add</v-icon>
      </v-btn>

      <v-btn 
        icon
        @click="deleteCurrentNote"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
import axios from 'axios';

export default {
    props: ['state'],
    methods: {
      addNewNote() {
            axios.post('http://localhost:8000/api/note/', {
                title: 'New Note',
                body: 'New body'
            })
            .then(response => {
                this.$store.commit('addNewNote', response.data.id);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
      },
      deleteCurrentNote() {
        if (this.$store.state.currentNote != null) {
          axios.delete(`http://localhost:8000/api/note/${this.$store.state.currentNote.id}/`)
            .then(response => {
              console.log(response);
              this.$store.commit('deleteCurrentNote');
              console.log(`note with id ${this.$store.state.currentNote.id} was deleted`)
              this.$store.commit('setCurrentNote', this.$store.getters.getAllNotes[0]);
            })
        }
      }
    }
}
</script>

<style>

</style>
