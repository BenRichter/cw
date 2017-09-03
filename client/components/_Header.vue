<template>
    <header class="hero is-primary">
        <div class="hero-head">
            <nav class="main-nav nav has-shadow">
                <div class="container">

                    <div class="nav-left">
                        <a class="nav-item is-brand" href="#">
                            ###
                        </a>
                    </div>

                    <div class="nav-center">
                        <a class="nav-item" href="/">
                            <img src="/drinky.png" alt="Dishh Logo">
                        </a>
                    </div>

                    <div id="nav-menu" class="nav-right nav-menu">
                        <a class="nav-item" href="#">
                            Registrieren
                        </a>

                        <div class="nav-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <a class="button is-primary" href="">
                                        <icon name="sign-in" label="Login"></icon>
                                        <span>Login</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <span id="nav-toggle" class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                </div>
            </nav>
        </div>

    </header>
</template>

<script>
    import 'vue-awesome/icons/sign-in';
    import Icon from 'vue-awesome/components/Icon';

    export default {
        components: {
            Icon
        },
        data() {
            return {
                isLoginToggled: false
            };
        },
        methods: {
            toggleLogin() {
                this.isLoginToggled = true;
            }
        },
    };
</script>

<style scoped lang="scss">

</style>
