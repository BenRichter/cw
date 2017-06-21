<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // require('./reset.css');
</script>

<style lang="scss">
    @import "../node_modules/bulma/sass/utilities/_all";
    @import "../node_modules/bulma/sass/base/_all";

    @import "../node_modules/bulma/sass/elements/_all";
    @import "../node_modules/bulma/sass/components/_all";
    @import "../node_modules/bulma/sass/grid/_all";
    @import "../node_modules/bulma/sass/layout/_all";

    /* Bulma Variables for Theming
       http://bulma.io/documentation/overview/variables/
    */
    $blue: #72d0eb;

    $primary: $turquoise;

    /* http://bulma.io/documentation/overview/responsiveness/

        mobile: up to 768px
        tablet: from 769px
        desktop: from 1000px
        widescreen: from 1192px
    */

    /* Global Application Styling */
</style>
