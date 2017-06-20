<template>
    <div class="call-area">
        <button class="btn large" :disabled="{ isCalledWaiter }" @click="callWaiter">Kellner rufen</button>
        <button class="btn small" :disabled="{ isCalledCheck }" @click="callCheck">Rechnung bitte</button>
    </div>
</template>

<script>
//    todo fix
    export default {
        data() {
            return {
                isCalledWaiter: false,
                isCalledCheck: false
            };
        },
        methods: {
            callWaiter() {
                this.isCalledWaiter = true;
            },
            callCheck() {
                this.isCalledCheck = true;
            }
        },
    };
</script>

<style scoped>
    .btn {
        width: 100%;
        display:block;
        border-radius: 0;
        color: #ffffff;
        text-shadow: 1px 1px 0 #2b2b2b;
    }

    .btn.large {
        background-color: #0E89B6;
        line-height:      70px;
    }

    .btn.small {
        background-color: #ecdf26;
        line-height:      30px;
    }
</style>
