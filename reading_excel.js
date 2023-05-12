import { d3 } from './common.js';
d3.csv('sample_csv.csv').then((data) => {
    /* these are called after the data is read, which happens asynchronously (the .then callback
    is called when the promise of the data read has resolved) */
    console.log(data);
  });