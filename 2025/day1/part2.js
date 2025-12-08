import * as utils from "../../utils/utils.js";

const input = utils.getInput();

let position = 50;
let sum = 0;

 for (let line of input) {
  const direction = line.slice(0, 1);
  const distance = line.slice(1);
  const startingPosition = position;
  position += ( direction === 'R' ) ? parseInt(distance) : -(distance);
  
  if (position < 0) {
    sum += Math.ceil(Math.abs((position / 100)));
    position = 100 - Math.abs(position % 100);
    if ( startingPosition == 0 ) sum -= 1;
  }

  if ( position == 0 ) {
    sum += 1;
  }

  if ( position > 99 ) {
    sum += Math.abs(parseInt(position / 100, 10));
    position = position % 100;
  }  

 }

utils.logOutput(2025, 1, "B", sum);
