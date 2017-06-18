<template>
    <div class="counter-wrapper" v-show="isVisible">
        <button class="close" @click="isVisible = false">x</button>
        <div class="counter">
           <strong>{{ count }}</strong> {{ unit }}
        </div>
        <button @click="$store.commit('INCREMENT')">Increment</button>
        <button @click="$store.commit('DECREMENT')">Decrement</button>
        <button @click="$store.dispatch('incrementAsync')">Increment Async</button>
    </div>
</template>

<script>
    export default {
        props: [ 'unit' ],
        data() {
            return {
                isVisible: true
            }
        },
        computed: {
            count(){ return this.$store.state.count; }
        }
    }
</script>

<style scoped>
    .counter-wrapper {
        position: relative;
        text-align: center;
        margin-bottom: 20px;
    }

    .counter {
      margin: 50px auto 0;
      border-radius: 3px;
      width: 100%;
      height: 200px;
      line-height: 200px;
      font-size: 3rem;
      background-color: #f0f0f0;
        color: #171a21;
      user-select: none;
    }

    .close {
        position: absolute;
        right: 0;
    }
</style>
