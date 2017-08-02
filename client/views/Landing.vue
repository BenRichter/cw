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
        beforeMount() {
            this.fetchBar();
        },
        fetch: {
            bar: vm => `https://api.github.com/users/${vm.barId}`
        },
        methods: {
            fetchBar() {
//                console.log("fetch bar!!!");
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
