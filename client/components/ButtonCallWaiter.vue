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
        {
            callWaiter();
            {
                this.isCalledWaiter = true;

                // access store todo: remove
                console.log(this.$store.state.count);
            }
        },
    }
</script>

<style scoped lang="scss">
    .button {
        display: block;
        margin-bottom: 0.5em;
    }
</style>
