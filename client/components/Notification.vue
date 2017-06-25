<!-- http://bulma.io/documentation/elements/notification/ -->
<template>
    <div class="notification" :class="[{ 'is-hidden' : isHidden}, status]">
        <button class="delete" @click="hide"></button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [ 'status' ], // .is-success .is-warning .is-danger
        data() {
            return {
                isHidden: false
            }
        },
        methods: {
            hide() {
                this.isHidden = true;
            }
        }
    }
</script>

<style scoped>
</style>
