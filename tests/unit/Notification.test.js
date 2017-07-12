import Vue from 'vue';
import test from 'ava';
import notification from './../client/components/Notification.vue';

//
//test('renders the correct message', async (t) => {
//    const Constructor = Vue.extend(TestComponent);
//    const vm = new Constructor().$mount();
//    t.is(vm.$el.querySelector('h1').textContent, 'Hello, World!');
//    // Update
//    vm.setName('Foo');
//    await nextTick();
//    t.is(vm.$el.querySelector('h1').textContent, 'Hello, Foo!');
//});

test('renders', t => {
    const vm = new Vue(notification).$mount();
    const tree = {
        $el: vm.$el.outerHTML
    };
    t.snapshot(tree);
});
