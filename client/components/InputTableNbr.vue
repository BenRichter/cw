<template>
    <div>
        <Notification v-if="hasError" status="is-warning">Das ist keine gültige Tischnummer</Notification>

        <label for="tableNbr" class="label">An welchem Tisch sitzt du?</label>
        <div class="field has-addons">
            <p class="control has-icons-left">
                <input v-model="tableNumber" type="number" min="1" :max="tableCountMax" step="1" :placeholder="tableCountPlaceholder" class="input is-large" id="tableNbr"/>

                <span class="icon is-left">
                    <Icon name="user-circle" label="User"></Icon>
                </span>
            </p>
            <p class="control">
                <button class="button is-primary is-large" :class="{ 'is-loading' : isLoading }" @click="redirectTo">Ok!</button>
            </p>
        </div>
    </div>
</template>

<script>
    import 'vue-awesome/icons/user-circle';
    import Icon from 'vue-awesome/components/Icon';
    import Notification from './Notification.vue';

    export default {
        data() {
            return {
                tableCountMax: 25, // todo: get number by restaurant
                tableCountPlaceholder: '9\u00BE',
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
            Notification,
            Icon
        }
    }
</script>

<style scoped>
</style>
