<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout>
                <v-card width="100%" heigth="100%">
                    <v-card-title primary-title>
                        <h2><input type="text" v-model="note.title" placeholder="Note Title"></h2>
                    </v-card-title>
                    <v-card-text>
                        <textarea v-model="note.body"></textarea>
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
            note: {
                title: 'Note Title',
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! LaudanLorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, nesciunt deserunt alias rem, delectus molestiae officia expedita minus id eveniet, recusandae accusantium sapiente voluptatem. Deleniti eos rerum pariatur voluptas ratione at amet quos eveniet cupiditate dolore. Vitae at beatae iusto consequatur! Laudan"
            }
        }
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
</style>
