<template>
    <div id="app" class="content is-marginless">
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>


<script>
    import headerComponent from 'components/_Header.vue';
    import footerComponent from 'components/_Footer.vue';

    export default {
        components: {
            headerComponent,
            footerComponent
        }
    }
</script>


<style lang="scss">
    @import "../node_modules/bulma/sass/utilities/_all";
    @import "../node_modules/bulma/sass/base/_all";
    @import "../node_modules/bulma/sass/elements/_all";
    @import "../node_modules/bulma/sass/components/_all";
    @import "../node_modules/bulma/sass/grid/_all";
    @import "../node_modules/bulma/sass/layout/_all";

    /* Bulmaswatch for Theming
     * https://jenil.github.io/bulmaswatch/
     */
    @import "../node_modules/bulmaswatch/flatly/variables";
    @import "../node_modules/bulmaswatch/flatly/overrides";



    /* http://bulma.io/documentation/overview/responsiveness/

        mobile: up to 768px
        tablet: from 769px
        desktop: from 1000px
        widescreen: from 1192px
    */

    /* Global Application Styling */

    // icon scaling dynamic font size
    .fa-icon {
        width: auto;
        height: 1em;
    }
</style>
