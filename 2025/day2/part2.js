import * as utils from "../../utils/utils.js";

const input = utils.getInputUnfiltered();

let sum = 0;

const ranges = input.split(",");

for (let line of ranges) {
  const bounds = line.split("-")
  for (let i = Number(bounds[0]); i <= Number(bounds[1]); i++) {
    numberLoop: for (let j = 1; j <= i.toString().length / 2; j++) {
      if (i.toString().length % j == 0) {
        const segments = [];
        for (let k = 0; k < i.toString().length; k += j) {
          segments.push(i.toString().slice(k, k + j));
        }
        if (allEqual(segments)) {
          sum += Number(i);
          break numberLoop;
        }
      }
    }
  }
}

function allEqual(arr) {
  return arr.every(val => val == arr[0]);
}

utils.logOutput(2025, 2, "B", sum);
