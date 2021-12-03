import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.count += 1;
    },
  },
}).mount('#app');
