// console.log(`/ticketjs/`);
const load = document.querySelector(".load");
var size;
const btn = document.querySelector(".btn");
function generateUniqueNumber() {
  let number =
    Math.floor(Math.random() * (Math.pow(10, size) - Math.pow(10, size - 1))) +
    Math.pow(10, size - 1);
  console.log("numberin func: " + number);
  // input();

  if (localStorage.getItem("uniqueNumbers") === null) {
    localStorage.setItem("uniqueNumbers", JSON.stringify([number]));
  } else {
    let uniqueNumbers = JSON.parse(localStorage.getItem("uniqueNumbers"));
    while (uniqueNumbers.includes(number)) {
      number =
        Math.floor(
          Math.random() * (Math.pow(10, size) - Math.pow(10, size - 1))
        ) + Math.pow(10, size - 1);
    }
    uniqueNumbers.push(number);
    localStorage.setItem("uniqueNumbers", JSON.stringify(uniqueNumbers));
  }

  return number;
}

btn.onclick = function () {
  btn.disabled = true;
  var sizeinput = document.querySelector(".digitSize");
  console.log(sizeinput.value);
  size = sizeinput.value;
  const inputfield = document.querySelector(".inputfield");
  while (inputfield.firstChild) {
    inputfield.firstChild.remove();
  }
  var number = generateUniqueNumber();
  var value = number.toString();
  let i = 0;
  let intervel = setInterval(() => {
    // for (let i = 0; i < size; i++) {
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.classList.add = "input";
    // inputEl.name = "input";
    inputEl.maxlength = "1";
    inputEl.value = value[i];
    inputEl.attributes = "readeonly";
    inputfield.appendChild(inputEl);
    // }
    i++;
    if (i >= size) {
      btn.disabled = false;
      clearInterval(intervel, 0);
    }
  }, 800);
};
