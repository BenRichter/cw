<template>
    <div>
        <Notification v-if="hasError" status="is-warning">Das ist keine gültige Tischnummer</Notification>

        <label for="tableNbr" class="label">Bitte gib deine Tischnummer an?</label>
        <div class="field has-addons">
            <p class="control has-icons-left">
                <input v-model="tableNumber" type="number" min="1" :max="tableCountMax" step="1" :placeholder="tableCountPlaceholder" class="input is-large" id="tableNbr"/>

                <span class="icon is-left">
                    <Icon name="coffee" label="Table"></Icon>
                </span>
            </p>
            <p class="control">
                <button class="button is-primary is-large" :class="{ 'is-loading' : isLoading }" @click="redirectTo">Ok!</button>
            </p>
        </div>
    </div>
</template>

<script>
    import 'vue-awesome/icons/coffee';
    import Icon from 'vue-awesome/components/Icon';
    import Notification from './Notification.vue';

    export default {
        data() {
            return {
                tableCountMax: 25, // todo: get number by restaurant
                tableCountPlaceholder: '',
                tableNumber: '',
                hasError: false,
                isLoading: false
            }
        },
        methods: {
            redirectTo() {
                this.isLoading = true;


                if (this.validateInput()) {
                    console.log('valid');
                    console.log('redirect to ' + this.tableNumber);
                }
            },
            validateInput() {
                console.log('validate!');
                if (this.tableNumber !== '' && this.tableNumber > 0 && this.tableNumber <= this.tableCountMax) {
                    return true;
                } else {
                    // todo: specify error
                    this.isLoading = false;
                    this.hasError = true;
                    return false;
                }
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
