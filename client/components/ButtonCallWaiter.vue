<template>
    <button class="button is-primary is-large" :class="{ 'is-loading' : isCalledWaiter }" @click="callWaiter">Kellner rufen</button>
</template>

<script>
    export default {
        data() {
            return {
                isCalledWaiter: false
            };
        },
        methods: {
            callWaiter() {
                this.isCalledWaiter = true;
            }
        },
    };
</script>

<style scoped lang="scss">
    .button {
        display: block;
        margin-bottom: 0.5em;
    }
</style>
