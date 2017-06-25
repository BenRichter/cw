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

<style lang="scss">
    .notification {
        padding: 0.4rem 2.5rem 0.4rem 0.5rem;
    }
</style>
