<template>
    <div class="section">
        <div class="container">

            <div v-if="bar.pending">Loading...</div>

            <div class="card" v-if="bar.fulfilled">
                <header class="card-header">
                    <p class="card-header-title">Willkommen bei {{ bar.value.login }}</p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <input-tbl-nbr></input-tbl-nbr>
                    </div>
                </div>
            </div>

            <div class="card" v-if="bar.rejected">
                <div class="card-content">
                    <div class="content">
                        {{ bar.reason.message }}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import inputTblNbr from '../components/InputTableNbr.vue';

    export default {
        props: ['barId'],
        data: () => ({
            bar: {},
        }),
        fetch: {
//       todo: save data to store     https://github.com/egoist/vue-fetch-data
            bar: x => `https://api.github.com/users/${x.barId}`
        },
        methods: {
            fetchBar() {
              //  console.log("loaded on mount");
            }
        },
        components: {
            inputTblNbr
        }


    }
</script>

<style scoped lang="scss">
    /* Specific Page Styles */

</style>
