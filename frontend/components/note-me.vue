<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout v-if="notes.length > 0">
                <v-card width="100%" heigth="100%">
                    <v-card-title primary-title>
                        <h2><input type="text" v-model.lazy="title" placeholder="Note Title"></h2>
                    </v-card-title>
                    <v-card-text>
                        <textarea v-model.lazy="body" placeholder="Type your thoughts here..."></textarea>
                    </v-card-text>
                </v-card>
            </v-layout>

            <v-layout v-else 
                justify-center 
                align-center
                @click="addNewNote"
            >
                <span class="display-1">Click to add a new note</span>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import axios from 'axios';

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
                const currentIndex = this.$store.state.currentNoteIndex;

                // if title is empty, give it "Note ${note.id}" value before submitting
                if (!value) {value = `Note ${this.$store.state.notes[currentIndex].id}`};

                this.$store.commit('setCurrentNoteTitle', value);
                axios.put(`http://localhost:8000/api/note/${this.$store.state.notes[currentIndex].id}/`, {
                  ...this.$store.state.notes[currentIndex]
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },
        body: {
            get() {
                return this.$store.getters.getCurrentNoteBody;
            },
            set(value) {
                this.$store.commit('setCurrentNoteBody', value);

                const currentIndex = this.$store.state.currentNoteIndex;
                axios.put(`http://localhost:8000/api/note/${this.$store.state.notes[currentIndex].id}/`, {
                  ...this.$store.state.notes[currentIndex]
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                }); 
            }
        }
    },
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
    }
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
    span {
        cursor: pointer;
    }
    .v-card__text {
        height: 80%;
    }
</style>
