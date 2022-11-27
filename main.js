var base = [];

var submit = document.querySelector(".pizza__button");

let userName = document.querySelector("#user");
let userNumber = document.querySelector("#number");
let userAdress = document.querySelector("#address");
let thickness = document.querySelector(".pizza__selekt");

let radio = document.querySelectorAll(".pizza__wrapper__input");
//===== Radio_input ======//
let radioaa;
var radioValue = radio.forEach((item) => {
  item.addEventListener("click", function (e) {
    radioaa = e.target.value;
  });
});


let checkbase1 = [];
let checkbase2 = [];
function chekValue(e) {
  if (e.target.checked == true) {
    checkbase1.push(e.target.id);
    console.log(checkbase1);
  } else {
    checkbase1 = checkbase1.filter((i) => i !== e.target.id);
    console.log(checkbase1);
  }
}
function chekValue2(e) {
  if (e.target.checked == true) {
    checkbase2.push(e.target.id);
    console.log(checkbase2);
  } else {
    checkbase2 = checkbase2.filter((i) => i !== e.target.id);
    console.log(checkbase2);
  }
}
let checkBox1 = document.querySelectorAll(".box");
checkBox1.forEach((item) => {
  item.addEventListener("change", chekValue);
});
let checkBox2 = document.querySelectorAll(".box1");
checkBox2.forEach((item) => {
  item.addEventListener("change", chekValue2);
});

submit.addEventListener("click", function () {
  var addPiza = {
    name: userName.value,
    number: userNumber.value,
    address: userAdress.value,
    think: thickness.value,
    radio: radioaa,
    checkBox1: checkbase1,
    checkBox2: checkbase2,
  };
  base.push(addPiza);
  console.log(base);
  let order = document.querySelector(".order");
let result

  var forE = base.map((base1) => {
  return` <div class="order__xbnt"><i class="fa-solid fa-xmark   order__icon"></i></div>
    <h1 class="order__title">Order: ${base.length}</h1>
    <p class="order__text">Name:${base1.name}</p>
    <p class="order__text">Phone:${base1.number}</p>
    <p class="order__text">Address:${base1.address}</p>
    <hr>
    <p class="order__text">Dough thickness:${base1.think}</p>
    <p class="order__text">Size: ${base1.radio}</p>
    <p class="order__text">on Pizza:${base1.checkBox1.map((e) => {
      return e;
    })}</p>
    <p class="order__text">Add:${base1.checkBox2.map((e) => {
      return e;
    })}</p>
    <hr>
    <p class="order__prise">Total: $40</p>`;
  });
  order.innerHTML=forE;
});
