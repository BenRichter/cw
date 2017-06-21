<template>
    <footer class="footer">
        <div class="container content">
            <div class="columns">
                <div class="column is-4"></div>
                <div class="column is-4 has-text-centered">
                    <p>Dishh &copy;2017</p>
                </div>
                <div class="column is-4">
                    <a class="nav-item" href="https://github.com/jgthms/bulma">
                        <icon name="github"></icon>
                        <span class="icon"><i class="fa fa-github"></i></span>
                    </a>
                    <a class="nav-item" href="https://twitter.com/jgthms">
                        <span class="icon"><i class="fa fa-twitter"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import 'vue-awesome/icons/github';
    import Icon from 'vue-awesome/components/Icon';

    export default {
        components: {
            Icon
        }
    }
</script>

<style scoped lang="scss">
</style>
