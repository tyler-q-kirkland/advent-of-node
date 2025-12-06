import * as utils from "../../utils/utils.js";

const input = utils.getInput();

let position = 50;
let sum = 0;

for (let line of input) {
  const direction = line.slice(0, 1);
  const distance = line.slice(1);
  position += ( direction === 'R' ) ? parseInt(distance) : -(distance);

  while ( position < 0 ){ position += 100 };
  while ( position > 99 ) { position -= 100 };
  if (position == 0 ) sum += 1;
}


utils.logOutput(2025, 1, "A", sum);
