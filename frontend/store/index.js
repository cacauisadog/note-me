import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            notes: null,
            currentNote: null
        }),
        getters: {
            getAllNotes: state => {
                return state.notes;
            },
            getCurrentNoteTitle: state => {
                return state.currentNote.title;
            },
            getCurrentNoteBody: state => {
                return state.currentNote.body;
            }
        },
        mutations: {
            setCurrentNote: (state, note) => {
                state.currentNote = note;
                console.log(state.currentNote);
            },
            setCurrentNoteTitle: (state, title) => {
                state.currentNote.title = title;
                console.log('title changed');
            },
            setCurrentNoteBody: (state, body) => {
                state.currentNote.body = body;
                console.log('body changed');
            },
            addNewNote: (state, id) => {
                state.notes.push(
                    {
                        title: "New Note",
                        body: "New body",
                        id
                    }
                );
                state.currentNote = state.notes.find(note => {
                    return note.id == id
                });
            },
            deleteCurrentNote: state => {
                const currentNoteIndex = state.notes.indexOf(state.currentNote);
                state.notes.splice(currentNoteIndex, 1);
            },  
        }
    });
};

export default createStore;
