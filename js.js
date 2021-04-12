function calculate() {
    const fields = {
      value1: Number(document.getElementById("value1").value) || 0,
      value2: Number(document.getElementById("value2").value) || 0,
      operator: document.getElementById("operator").value,
      result: document.getElementById("result")
    };
    let calculationResult;
  
    switch (fields.operator) {
      case "+":
        calculationResult = fields.value1 + fields.value2;
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
        }else if (fields.value2 != 0) {
          calculationResult = fields.value1 / fields.value2;
        }
        break;        
      case "^":
        calculationResult = Math.pow(fields.value1, fields.value2);
        break;
      case "v":
        calculationResult = math.pow(fields.value1, 1/fields.value2);
      case "!":
        calculationResult = 
          function factorial(_value1) {
          if (fields.value1 > 1)
            calculationResult = fields.value1 * factorial(fields.value1 - 1);
          else
            calculationResult = 1;
        };
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
  calculationResult = (value1 + "! =" + factorial(value1))

