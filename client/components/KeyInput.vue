<template>
    <div class="key-input">
        Hello User: <strong><slot></slot></strong>
        <p>Put in Steam Keys and share the Key with your Community:</p>
        <textarea name="steamkeys" cols="60" rows="8" v-model="message"></textarea>

        <ul>
            <li v-for="name in names">{{name}}</li>
        </ul>

        <input type="text" v-model="newName"/>
        <button :title="title" :class="{ 'is-loading': isLoading }" @click="toggleLoading" >Add name</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                names: ['first', 'second', 'third'],
                message: 'd\u00F6rp',
                newName: '',
                title: 'js set title',
                isLoading: false
            }
        },
        methods: {
            addName() {
                this.names.push(this.newName);
                this.newName = '';
            },
            toggleLoading() {
                this.isLoading = true;
                this.$emit('loading');
            }
        },
        mounted() {
            console.log("### ready");
        }
    }
</script>

<style scoped>
    .is-loading {
        background: red;
    }

    textarea {
        width: 100%;
    }
</style>
