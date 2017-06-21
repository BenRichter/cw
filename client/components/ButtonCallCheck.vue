<template>
    <div class="call-area">
        <button class="button is-warning is-small" :class="{ 'is-loading' : isCalledCheck }"  @click="callCheck">Rechnung bitte</button>
    </div>
</template>

<script>
//    todo fix
    export default {
        data() {
            return {
                isCalledCheck: false
            };
        },
        methods: {
            callCheck() {
                this.isCalledCheck = true;
            }
        },
    };
</script>

<style scoped lang="scss">
</style>
