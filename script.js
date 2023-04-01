class Calculator {
  constructor(firstoperandButton, secondoperandButton) {
    this.firstoperandButton = firstoperandButton;
    this.secondoperandButton = secondoperandButton;
  }

  clear() {
    this.firstoperandButton = null;
    this.secondoperandButton = null;
    this.operation = null;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.firstoperandButton.innerText.includes("."))
      return;
    this.firstoperandButton.innerText =
      this.firstoperandButton.innerText + number;
  }

  chooseOperation(operation) {
    if (this.firstoperandButton.innerText === "") return;
    if (this.secondoperandButton.innerText != "") {
      this.compute();
    }
    this.operation = operation;
    console.log(operation);
    console.log(firstoperandButton.innerText);
    console.log(secondoperandButton.innerText);
    this.secondoperandButton.innerText = this.firstoperandButton.innerText;
    this.firstoperandButton.innerText = " ";
    // console.log(secondoperandButton);
    // console.log(firstoperandButton);
  }
  compute() {
    let res;
    const firstnum = Number(firstoperandButton.innerText);
    var string = this.secondoperandButton.innerText;
    string = string.substring(0, string.length - 1);
    this.secondoperandButton.innerText = string;
    const secondnum = Number(secondoperandButton.innerText);

    if (isNaN(firstnum) || isNaN(secondnum)) return;

    switch (this.operation) {
      case "+":
        res = firstnum + secondnum;
        break;
      case "-":
        res = firstnum - secondnum;
        break;
      case "*":
        res = firstnum * secondnum;
        break;
      case "÷":
        res = firstnum % secondnum;
        break;
      default:
        return;
    }

    this.firstoperandButton.innerText = res;
    this.operation = null;
    this.secondoperandButton.innerText = "";
  }
  updateDisplay() {
    // if (isRes === true) {
    //   this.firstoperandButton.innerText = this.firstoperandButton.innerText;
    //   this.secondoperandButton.innerText = this.secondoperandButton.innerText;
    //   return;
    // }

    this.firstoperandButton.innerText = this.firstoperandButton.innerText;
    this.secondoperandButton.innerText =
      this.secondoperandButton.innerText + this.operation;
  }

  displayVar() {
    console.log(this.firstoperandButton.innerText);
    console.log(this.secondoperandButton.innerText);
    console.log(this.operation);
  }

  clear() {
    this.firstoperandButton.innerText = "";
    this.secondoperandButton.innerText = "";
    this.operation = null;
  }

  delete() {
    // console.log(this.firstoperandButton.innerText);
    // console.log(this.secondoperandButton.innerText);
    // console.log(this.operation);
    // if (
    //   this.firstoperandButton.innerText === "" ||
    //   this.secondoperandButton.innerText === ""
    // )
    //   return;
    var string = this.firstoperandButton.innerText;
    string = string.substring(0, string.length - 1);
    this.firstoperandButton.innerText = string;
    var string1 = this.secondoperandButton.innerText;
    string1 = string1.substring(0, string1.length - 1);
    this.secondoperandButton.innerText = string1;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allclearButton = document.querySelector("[data-all-clear]");
const delButton = document.querySelector("[data-del]");
const equalstoButton = document.querySelector("[data-equals]");
const firstoperandButton = document.querySelector(".first-operand");

const secondoperandButton = document.querySelector("[data-second-operand]");

const calculator = new Calculator(firstoperandButton, secondoperandButton);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    //calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalstoButton.addEventListener("click", () => {
  calculator.compute();
  //calculator.displayVar();
  // calculator.updateDisplay();
});

allclearButton.addEventListener("click", () => {
  calculator.clear();
});
delButton.addEventListener("click", () => {
  calculator.delete();
});
