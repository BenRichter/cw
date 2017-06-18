/*
 *  AVA test Runner preloader
 *  http://knpw.rs/blog/testing-vue-in-node
 */
const browserEnv = require('browser-env');
const hook = require('vue-node');
const { join } = require('path');

// Setup a fake browser environment
browserEnv();

// Pass an absolute path to your webpack configuration to the hook function.
hook(join(__dirname, 'build/webpack.config.test.js'));
