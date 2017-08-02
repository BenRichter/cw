<template>
    <div class="section">
        <div class="container">

            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Willkommen im {{ bar }}</p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <input-tbl-nbr></input-tbl-nbr>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import inputTblNbr from '../components/InputTableNbr.vue';
//    import FetchData from 'vue-fetch-data';

    export default {
        data: () => ({
            isLoading: true,
            isBar: false
        }),
        beforeMount() {
            this.fetchBar();
        },
        props: ['bar'],
        methods: {
            fetchBar() {
                console.log("fetch bar!!!");
            }
        },
        components: {
            inputTblNbr
        }

        // router.replace(location, onComplete?, onAbort?)
        // https://router.vuejs.org/en/essentials/navigation.html
    }
</script>

<style scoped lang="scss">
    /* Specific Page Styles */

</style>
