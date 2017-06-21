<template>
    <div class="call-area">
        <button class="button is-primary is-large" :class="{ 'is-loading' : isCalledWaiter }" @click="callWaiter">Kellner rufen</button>
        <button class="button is-warning is-small" :class="{ 'is-loading' : isCalledCheck }"  @click="callCheck">Rechnung bitte</button>
    </div>
</template>

<script>
//    todo fix
    export default {
        data() {
            return {
                isCalledWaiter: false,
                isCalledCheck: false
            };
        },
        methods: {
            callWaiter() {
                this.isCalledWaiter = true;
            },
            callCheck() {
                this.isCalledCheck = true;
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
