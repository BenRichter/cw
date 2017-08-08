import test from 'ava';

import Vue from 'vue';
//import alertMessage from '../client/components/AlertMessage.vue'


test('t pass', t => {
    t.pass();
});

test('Bar ist bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('one plus one is two', t => {
    t.is(1 + 1, 2);
});

