function calculate() {
  const fields = {
    value1: Number(document.getElementById("value1").value) || 0,
    value2: Number(document.getElementById("value2").value) || 0,
    operator: document.getElementById("operator").value,
    result: document.getElementById("result"),
  };
  let calculationResult;

  switch (fields.operator) {
    case "+": 
      calculationResult = suma(fields.value1, fields.value2);
      break;
    case "-":
      calculationResult = roznica(fields.value1, fields.value2);
      break;
    case "*":
      calculationResult = iloczyn(fields.value1, fields.value2);
      break;
    case "/":
      calculationResult = iloraz(fields.value1, fields.value2)
      break;
    case "^":
      calculationResult = potega(fields.value1, fields.value2);
      break;
    case "v":
      calculationResult = pierwiastek(fields.value1, fields.value2);
      break;
    case "!":
      console.log("tujestem");
      calculationResult = silnia(fields.value1);
      break;
  }

  if (typeof calculationResult === "number") {
    fields.result.innerText = calculationResult;
  }
}
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", calculate);

function silnia(value1) {
  console.log("rekurencja", value1);
  if (value1 === 1) {
    console.log("if", value1);
    return 1;
  } else {
    console.log("else", value1);
    return value1 * silnia(value1 - 1);
  }
}

function suma(value1, value2) {
  return value1 + value2
}

function roznica(value1, value2) {
  return value1 - value2
}

function iloczyn(value1, value2) {
  return value1 * value2
}

function iloraz(value1, value2) { 
  if (value2 === 0){
    return alert("nie mozna dzielic przez 0 balwanie")
  } else {
    return value1/value2
  }
}

function potega(value1, value2) {
  return Math.pow(value1, value2)
}

function pierwiastek(value1, value2) {
  return Math.pow(value1, 1/value2)
}