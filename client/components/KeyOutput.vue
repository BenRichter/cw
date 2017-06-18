<template>
    <div class="key-output">

        <button @click="fetchKey">Give me dad Key</button>

        <p>Key:  {{ message }}</p>
        <p>Reversed Key:  {{ reversedMessage }}</p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'dsfds-dasxf-324jfh-fdfdsf'
            }
        },
        computed: {
            reversedMessage() {
                return this.message.split('').reverse().join('');
            }
        },
        methods: {
            fetchKey() {
                this.message = 'abcd-abcd-abcd-abcd';
            }
        },
    }
</script>

<style scoped>

</style>
