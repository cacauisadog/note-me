<template>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="state.drawer = !state.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Note Me</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>save_alt</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>note_add</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
    props: ['state']
}
</script>

<style>

</style>
