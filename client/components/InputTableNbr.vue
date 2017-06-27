<template>
    <div>
        <p>An welchem Tisch sitzt du?</p>

        <notification v-if="hasError" status="is-warning">Das ist keine gültige Tischnummer</notification>

        <label for="tableNbr">Tischnummer</label>
        <input type="number" min="1" step="1" v-model="tableNumber" id="tableNbr"/>
        <button class="button is-primary" :class="{ 'is-loading' : isLoading }" @click="redirectTo">Ok!</button>
    </div>
</template>

<script>
    import notification from './Notification.vue';

    export default {
        data() {
            return {
                tableNumber: '',
                hasError: false,
                isLoading: false
            }
        },
        methods: {
            redirectTo() {
                console.log('redirect to ' + this.tableNumber);
                this.setLoading();
                this.validateInput();
                // push state to store!
                // redirect to this.tableNumber  Home
            },
            validateInput() {
                // todo: validate
                console.log('validate!');

                this.hasError = true;
            },
            setLoading() {
                this.isLoading = true;
            }
        },
        components: {
            notification
        }
    }
</script>

<style scoped>
</style>
