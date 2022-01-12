function getHistory() {
  return document.getElementById("history").innerText;
}
function printHistory(num) {
  document.getElementById("history").innerText = num;
}
function getOutput() {
  return document.getElementById("output").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output");
  } else {
    document.getElementById("output").innerText = getFormattedNumber(num);
  }
  document.getElementById("output").innerText = getFormattedNumber(num);
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
printOutput("");

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
// alert(reverseNumberFormat(getOutput()));

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substring(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history += output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history += this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //agar aoutput son bo'lsa
      output += this.id;
      printOutput(output);
    }
  });
}
