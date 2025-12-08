import * as utils from "../../utils/utils.js";

const input = utils.getInputUnfiltered();

let sum = 0;

const ranges = input.split(",");

for (let line of ranges) {
  const bounds = line.split("-")
  for (let i = Number(bounds[0]); i <= Number(bounds[1]); i++) {
    if ( i.toString().length % 2 == 0 ){
      const midPoint= i.toString().length / 2;
      const start = i.toString().slice(0, midPoint);
      const end = i.toString().slice(midPoint);
      if ( start == end ){
        sum += Number(i);
      }
    }
  } 
}


utils.logOutput(2025, 2, "A", sum);
