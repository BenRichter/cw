import test from 'ava';
import Vue from 'vue';
import notification from './Notification.vue';

test('renders', t => {
    const vm = new Vue(notification).$mount();
    const tree = {
        $el: vm.$el.outerHTML
    };

    //t.snapshot(tree);
});

test('button has a class', async (t) => {
    const vm = new Vue(notification).$mount();

    // todo Update
    //vm.methods.hide();
    //await nextTick();
    //t.is(vm.$el.querySelector('button').textContent, 'Hello, Foo!');

    t.is(vm.$el.querySelector('button').classList.contains('is-hidden'), true);
});
