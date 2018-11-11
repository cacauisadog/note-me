<template>
    <v-navigation-drawer
      v-model="state.drawer"
      clipped
      fixed
      app
    >
      <v-list two-line>
          <v-select
            :items="orderBy"
            label="Order By..."
            solo
            v-model="selectedOrder"
          >
          </v-select>
          <template v-for="(note, index) in notes">
            <v-list-tile
              :key="note.index"
              avatar
              ripple
              @click="changeCurrentNote(index)"
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
    data() {
      return {
        orderBy: [
          {text: 'Order By Title', value: 'title'},
          {text: 'Order By Body', value: 'body'},
        ],
        selectedOrder: 'title'
      }
    },
    props: ['state'],
    methods: {
      changeCurrentNote(index) {
        const currentNoteId = this.$store.notes[index].id
        this.$store.commit('setCurrentNoteIndex', index);
        // this.state.drawer = false;
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes.sort((a, b) => {
          const titleA = a[this.selectedOrder].toUpperCase();
          const titleB = b[this.selectedOrder].toUpperCase();

          if (titleA > titleB) {
            return 1;
          } else if (titleA < titleB) {
            return -1;
          }
          return 0;
        });
      }
    }
  }
</script>

<style>

</style>
