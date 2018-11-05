import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            note: {
                title: 'Note Title',
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! Laudan"
            }
        }),
        getters: {
            getNoteTitle: state => {
                return state.note.title;
            },
            getNoteBody: state => {
                return state.note.body;
            }
        }
    });
};

export default createStore;
