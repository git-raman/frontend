let body = document.querySelector("body");
let k1 = document.querySelector("#key1");
let k2 = document.querySelector("#key2");
let k3 = document.querySelector("#key3");
let k4 = document.querySelector("#key4");
let k5 = document.querySelector("#key5");
let k6 = document.querySelector("#key6");
let k7 = document.querySelector("#key7");
let k8 = document.querySelector("#key8");

const aud1 = new Audio("sounds/28.mp3");
const aud2 = new Audio("sounds/29.mp3");
const aud3 = new Audio("sounds/30.mp3");
const aud4 = new Audio("sounds/31.mp3");
const aud5 = new Audio("sounds/32.mp3");
const aud6 = new Audio("sounds/33.mp3");
const aud7 = new Audio("sounds/34.mp3");
const aud8 = new Audio("sounds/35.mp3");

k1.addEventListener("click", function () {
  aud1.play();
});
k2.addEventListener("click", function () {
  aud2.play();
});
k3.addEventListener("click", function () {
  aud3.play();
});
k4.addEventListener("click", function () {
  aud4.play();
});
k5.addEventListener("click", function () {
  aud5.play();
});
k6.addEventListener("click", function () {
  aud6.play();
});
k7.addEventListener("click", function () {
  aud7.play();
});
k8.addEventListener("click", function () {
  aud8.play();
});
