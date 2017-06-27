<template>
    <div class="section">
        <div class="container">
            <notification status="is-warning">Awesome we did it!</notification>

            <button-call-waiter></button-call-waiter>
            <button-call-check></button-call-check>
        </div>
    </div>
</template>

<script>
    import notification from '../components/Notification.vue';
    import buttonCallWaiter from '../components/ButtonCallWaiter.vue';
    import buttonCallCheck from '../components/ButtonCallCheck.vue';

    export default {
        components: {
            notification,
            buttonCallWaiter,
            buttonCallCheck
        }
    }
</script>

<style scoped lang="scss">
    /* Specific Page Styles */

</style>
