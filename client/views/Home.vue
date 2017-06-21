<template>
    <div class="section">
        <div class="container">
            <alert-message></alert-message>

            <buttonCallWaiter></buttonCallWaiter>
            <buttonCallCheck></buttonCallCheck>
        </div>
    </div>
</template>

<script>
    import alertMessage from '../components/AlertMessage.vue';
    import buttonCallWaiter from '../components/ButtonCallWaiter.vue';
    import buttonCallCheck from '../components/ButtonCallCheck.vue';

    export default {
        components: {
            alertMessage,
            buttonCallWaiter,
            buttonCallCheck
        }
    }
</script>

<style scoped lang="scss">
    /* Specific Page Styles */

</style>
