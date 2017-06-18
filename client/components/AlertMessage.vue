<template>
    <div class="alert success">
        <p>{{ message }}</p>

        <!--todo: https://laracasts.com/series/learn-vue-2-step-by-step/episodes/12?autoplay=true -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Success'
            }
        },
        methods: {
            addName() {
                this.names.push(this.newName);
                this.newName = '';
            }
        }
    }
</script>

<style scoped>
    :root {
        --color-success: green;
    }

    .alert {
        border: solid 1px #cccccc;
        border-radius: 3px;
        display: block;
        padding: 0.5em;
        margin-bottom: 0.5em;
    }

    .success {
        border-color: var(--color-success);
    }
</style>
