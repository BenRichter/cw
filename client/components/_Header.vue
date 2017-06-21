<template>
    <header class="container">
        <nav class="nav">
            <div class="nav-left">
                <a class="nav-item is-brand" href="http://bulma.io">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Dishh Logo">
                </a>
            </div>

            <span id="nav-toggle" class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div id="nav-menu" class="nav-right nav-menu">
                <a class="nav-item " href="http://bulma.io/">
                    Home
                </a>
                <a class="is-hidden nav-item  " href="http://bulma.io/templates/">
                    <span>Templates</span>
                    <span class="tag is-small is-success">New!</span>
                </a>
                <a class="nav-item  is-active" href="/documentation/overview/start/">
                    Documentation
                </a>
                <a class="nav-item " href="http://bulma.io/blog/">
                    Blog
                </a>

                <div class="nav-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a id="twitter" class="button" data-social-network="Twitter" data-social-action="tweet"
                               data-social-target="http://bulma.io" target="_blank"
                               href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;url=http://bulma.io&amp;via=jgthms">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
                                <span>Tweet</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.2.zip">
            <span class="icon">
              <i class="fa fa-download"></i>
            </span>
                                <span>Download</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
    export default {
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
