<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <v-card width="100%" heigth="100%">
                    <v-card-title primary-title>
                        <h2><input type="text" v-model.lazy="title" placeholder="Note Title"></h2>
                    </v-card-title>
                    <v-card-text>
                        <textarea v-model.lazy="body" placeholder="Type your thoughts here..."></textarea>
                    </v-card-text>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
            notes: this.$store.getters.getAllNotes,
        }
    },
    computed: {
        title: {
            get() {
                return this.$store.getters.getCurrentNoteTitle;
            },
            set(value) {
                this.$store.commit('setCurrentNoteTitle', value);
            }
        },
        body: {
            get() {
                return this.$store.getters.getCurrentNoteBody;
            },
            set(value) {
                this.$store.commit('setCurrentNoteBody', value);
            }
        }
    },
}
</script>

<style scoped>
    input, textarea {
        width: 100%;
        resize: none;
        height: 100%;
    }
    input:focus,
    textarea:focus {
        outline: none;
    }
    h2 {
        width: 100%;
    }
</style>
