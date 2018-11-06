<template>
    <v-navigation-drawer
      v-model="state.drawer"
      clipped
      fixed
      app
    >
      <v-list two-line>
          <template v-for="(note, index) in $store.getters.getAllNotes">
            <v-list-tile
              :key="note.title"
              avatar
              ripple
              @click="$store.commit('setCurrentNoteIndex', index)"
            >
              <v-list-tile-content>
                <v-list-tile-sub-title class="text--primary">{{ note.title }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ note.body }}</v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
            <v-divider
              v-if="index + 1 < $store.state.notes.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
 export default {
    props: ['state'],
  }
</script>

<style>

</style>
