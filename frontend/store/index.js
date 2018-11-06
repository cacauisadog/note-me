import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            notes: [
                {
                    title: 'A Test Note',
                    body: "AAAAALorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto"
                },
                {
                    title: "B Test Note",
                    body: "BBBBBBBLorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta quas quisquam illum nam ab accusamus corrupti voluptatibus dolore porro ratione, reprehenderit hic cupiditate at voluptatem? Vel incidunt assumenda natus sequi."
                },
                {
                    title: "C Test Note",
                    body: "CCCCCCCLorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta quas quisquam illum nam ab accusamus corrupti voluptatibus dolore porro ratione, reprehenderit hic cupiditate at voluptatem? Vel incidunt assumenda natus sequi."
                },
                {
                    title: "D Test Note",
                    body: "DDDDDDLorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta quas quisquam illum nam ab accusamus corrupti voluptatibus dolore porro ratione, reprehenderit hic cupiditate at voluptatem? Vel incidunt assumenda natus sequi."
                },
                {
                    title: "E Test Note",
                    body: "EEEEEEEELorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta quas quisquam illum nam ab accusamus corrupti voluptatibus dolore porro ratione, reprehenderit hic cupiditate at voluptatem? Vel incidunt assumenda natus sequi."
                }
            ],
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
            }
        }
    });
};

export default createStore;
