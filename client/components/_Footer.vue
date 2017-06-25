<template>
    <footer class="footer">
        <div class="container content">
            <div class="columns">
                <div class="column is-4">
                    <a class="" href="#">About</a>
                </div>
                <div class="column is-4 has-text-centered">
                    <p>Dishh &copy;2017</p>
                </div>
                <div class="column is-4 has-text-right">
                    <a href="https://twitter.com/#" target="_blank">
                        <icon name="twitter" scale="1.5" label="Twitter"></icon>
                    </a>
                    <a href="https://facebook.com/#" target="_blank">
                        <icon name="facebook" scale="1.5" label="Facebook"></icon>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import 'vue-awesome/icons/twitter';
    import 'vue-awesome/icons/facebook';
    import Icon from 'vue-awesome/components/Icon';

    // todo: make global https://github.com/Justineo/vue-awesome
    export default {
        components: {
            Icon
        }
    }
</script>

<style scoped lang="scss">
</style>
