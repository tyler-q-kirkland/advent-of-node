import * as utils from "../../utils/utils.js";

//read index as opcode, index + 1 as operand, +2 after

class RegisterMachine {
  constructor(a, b, c, program) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.program = program;
    this.pointer = 0;
    this.output = [];
  }
  runProgram(){
    while (this.pointer < this.program.length){
        this.#executeOperation();
    }
  }
  returnOutput(){
    return this.output.join(',')
  }    
  #returnCombo(operand){
    switch (operand) {
        case 4: return this.a;
        case 5: return this.b;
        case 6: return this.c;
        default: return operand
    }
  }
  #increasePointer(){
    this.pointer += 2;
  }
  #executeOperation(){
    switch (this.program[this.pointer]){
        case 0:
            this.div('a');
            break;
        case 1:
            this.bxl();
            break;
        case 2:
            this.bst();
            break;
        case 3:
            this.jnz();
            break;
        case 4:
            this.bxc();
            break;
        case 5:
            this.out();
            break;
        case 6:
            this.div('b');
            break;
        case 7:
            this.div('c')
            break;            
    }
  }
  div(register){
    this[register] = Math.trunc(this.a / ( 2 ** this.#returnCombo(this.program[this.pointer + 1]) ));
    this.#increasePointer();
  }
  bxl(){
    this.b = this.b ^ this.program[this.pointer + 1];
    this.#increasePointer();
  }
  bst(){
    this.b = this.#returnCombo(this.program[this.pointer + 1]) % 8;
    this.#increasePointer();
    
  }
  jnz(){
    if (this.a !== 0) { 
        this.pointer = this.program[this.pointer + 1]
    } else {
        this.#increasePointer()
    }
  }
  bxc(){
    this.b = this.b ^ this.c;
    this.#increasePointer();
  }
  out(){
    this.output.push(this.#returnCombo(this.program[this.pointer + 1]) % 8);
    this.#increasePointer();
  }
}

const args = process.argv;
const input = (args[2] && args[2].toUpperCase() == 'EXAMPLE') ? utils.getExampleInputUnfiltered() : utils.getInputUnfiltered();
const matches = [...input.match(/[\d]+/g)];
const numbers = matches.map(Number);
const program = numbers.slice(3);
let machine = new RegisterMachine(numbers[0], numbers[1], numbers[2], program)
machine.runProgram();

utils.logOutput("2024", "17", "A", machine.returnOutput());