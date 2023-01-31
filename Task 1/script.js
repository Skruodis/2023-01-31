/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const input = document.querySelector("#search");
const output = document.querySelector("#output");

function convert(e) {
  e.preventDefault();
  output.innerHTML = "";
  const kg = input.value;

  const pounds = kg * 2.2046;
  const poundsOutput = document.createElement("div");
  poundsOutput.textContent = pounds + " Pounds";
  poundsOutput.style.color = "black";

  const grams = kg / 0.001;
  const gramsOutput = document.createElement("div");
  gramsOutput.textContent = grams + " Grams";
  gramsOutput.style.color = "blue";

  const ounces = kg * 35.274;
  const ouncesOutput = document.createElement("div");
  ouncesOutput.textContent = ounces + " Ounces";
  ouncesOutput.style.color = "red";

  output.append(poundsOutput, gramsOutput, ouncesOutput);
}

document.querySelector("form").addEventListener("submit", convert);
