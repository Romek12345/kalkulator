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
      calculationResult = dodawanie(fields.value1, fields.value2);
      break;
    case "-":
      calculationResult = fields.value1 - fields.value2;
      break;
    case "*":
      calculationResult = fields.value1 * fields.value2;
      break;
    case "/":
      if (fields.value2 === 0) {
        alert("Nie można dzielić przez zero!");
      } else if (fields.value2 != 0) {
        calculationResult = fields.value1 / fields.value2;
      }
      break;
    case "^":
      calculationResult = Math.pow(fields.value1, fields.value2);
      break;
    case "v":
      calculationResult = math.pow(fields.value1, 1 / fields.value2);
    case "!":
      console.log("tujestem");
      calculationResult = factorial(fields.value1);

      break;
    /*    calculationResult = 
          function factorial(_value1) {
          if (fields.value1 > 1)
            calculationResult = fields.value1 * factorial(fields.value1 - 1);
          else
            calculationResult = 1;
        }; */
  }

  /*         if (fields.value2 = 2){
          calculationResult = Math.sqrt(fields.value1);
        }else if (fields.value2 != 2) {
          calculationResult = math.pow(fields.value1, 1/fields.value2);
        }          
        break;
    */

  if (typeof calculationResult === "number") {
    fields.result.innerText = calculationResult;
  }
}
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", calculate);

function factorial(value1) {
  console.log("rekurencja", value1);
  if (value1 === 1) {
    console.log("if", value1);

    return 1;
  } else {
    console.log("else", value1);

    return value1 * factorial(value1 - 1);
  }
}

function dodawanie(value1, value2) {
  return value1 + value2
}
