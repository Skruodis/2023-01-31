/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };
  this.subtraction = function (a, b) {
    return a - b;
  };
  this.multiplication = function (a, b) {
    return a * b;
  };
  this.division = function (a, b) {
    return a / b;
  };
}

const calculator = new Calculator();

const calSum = calculator.sum(10, 20);
console.log("Sum", calSum);

const calSubtraction = calculator.subtraction(20, 30);
console.log("Subtraction", calSubtraction);

const calMultiplication = calculator.multiplication(30, 40);
console.log("Multiplication", calMultiplication);

const calDivision = calculator.division(40, 50);
console.log("Division", calDivision);
