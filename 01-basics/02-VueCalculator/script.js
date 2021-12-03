import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      firstValue: 1,
      secondValue: 1,
      operation: 'sum',
    };
  },
  computed: {
    calcResult() {
      switch (this.operation) {
        case 'sum':
          return this.firstValue + this.secondValue;
        case 'subtract':
          return this.firstValue - this.secondValue;
        case 'multiply':
          return this.firstValue * this.secondValue;
        case 'divide':
          if (this.secondValue !== 0) {
            return this.firstValue / this.secondValue;
          } else return 'Делить на ноль нельзя!';
        default:
          return '';
      }
    },
  },
}).mount('#app');
