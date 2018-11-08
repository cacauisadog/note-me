import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            notes: null,
            currentNoteIndex: 0,
        }),
        getters: {
            getAllNotes: state => {
                return state.notes;
            },
            getCurrentNoteTitle: state => {
                return state.notes[state.currentNoteIndex].title;
            },
            getCurrentNoteBody: state => {
                return state.notes[state.currentNoteIndex].body;
            }
        },
        mutations: {
            setCurrentNoteIndex: (state, index) => {
                state.currentNoteIndex = index;
                console.log('new index: ' + index);
            },
            setCurrentNoteTitle: (state, title) => {
                state.notes[state.currentNoteIndex].title = title;
                console.log('title changed');
            },
            setCurrentNoteBody: (state, body) => {
                state.notes[state.currentNoteIndex].body = body;
                console.log('body changed');
            },
            addNewNote: (state, id) => {
                state.notes.push(
                    {
                        title: "New Note",
                        body: "New body",
                        id
                    }
                )
            },
            deleteCurrentNote: state => {
                state.notes.splice(state.currentNoteIndex, 1);
            },  
        }
    });
};

export default createStore;
