<template>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="state.drawer = !state.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Note Me</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>save_alt</v-icon>
      </v-btn>

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
import { mapMutations } from 'vuex';
// TODO: usar mapMutations ao invés de declarar método por método

export default {
    props: ['state'],
    methods: {
      addNewNote() {
        this.$store.commit('addNewNote');
        console.log("new note added via toolbar")
      },
      deleteCurrentNote() {
        this.$store.commit('deleteCurrentNote');
        console.log(`note on index ${this.$store.state.currentNoteIndex} was deleted`)
        this.$store.commit('setCurrentNoteIndex', 0);
      }
    }
}
</script>

<style>

</style>
