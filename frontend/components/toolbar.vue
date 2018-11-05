<template>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="state.drawer = !state.drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Note Me</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
    props: ['state']
}
</script>

<style>

</style>
