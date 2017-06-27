<template>
    <div class="section">
        <div class="container">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Willkommen im xyz!</p>
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

    export default {
        components: {
            inputTblNbr
        }
    }
</script>

<style scoped lang="scss">
    /* Specific Page Styles */

</style>
