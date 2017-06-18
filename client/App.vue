<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    require('./reset.css');
    require('./app.css');
</script>

<style>
    header {
        background: #171a21;

        h1 {
            color: #b8b6b4;
        }
    }

    .container {
        padding: 1% 2%;
        max-width: 600px;
        margin: auto;

        font-size: 1em; /* ~ 16px */
        line-height: 1.25;  /* ~ 20px */

        code {
            background-color: #f0f0f0;
            padding:          3px 5px;
            border-radius:    2px;
        }
    }

    @media (min-width: 43.75em) {
        .container {
            font-size: 1em;
            line-height: 1.375;
        }
    }
</style>
