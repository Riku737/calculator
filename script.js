// JavaScript

const bDisplay = document.getElementById("display");

const bDelete = document.getElementById("delete");
const bClear = document.getElementById("clear");
const bSubmit = document.getElementById("submit");
const bAnswer = document.getElementById("answer")

const bMultiply = document.getElementById("multiply");
const bDivide = document.getElementById("divide");
const bAdd = document.getElementById("add");
const bSubtract = document.getElementById("subtract");

const bNum0 = document.getElementById("num_0");
const bNum1 = document.getElementById("num_1");
const bNum2 = document.getElementById("num_2");
const bNum3 = document.getElementById("num_3");
const bNum4 = document.getElementById("num_4");
const bNum5 = document.getElementById("num_5");
const bNum6 = document.getElementById("num_6");
const bNum7 = document.getElementById("num_7");
const bNum8 = document.getElementById("num_8");
const bNum9 = document.getElementById("num_9");

let vTotal = 0;
let vText = "";
let vAnswer = "";

bNum0.addEventListener("click", () => {
    vText = vText + "0"
    bDisplay.value = vText
});

bNum1.addEventListener("click", () => {
    vText = vText + "1"
    bDisplay.value = vText
});

bNum2.addEventListener("click", () => {
    vText = vText + "2"
    bDisplay.value = vText
});

bNum3.addEventListener("click", () => {
    vText = vText + "3"
    bDisplay.value = vText
});

bNum4.addEventListener("click", () => {
    vText = vText + "4"
    bDisplay.value = vText
});

bNum5.addEventListener("click", () => {
    vText = vText + "5"
    bDisplay.value = vText
});

bNum6.addEventListener("click", () => {
    vText = vText + "6"
    bDisplay.value = vText
});

bNum7.addEventListener("click", () => {
    vText = vText + "7"
    bDisplay.value = vText
});

bNum8.addEventListener("click", () => {
    vText = vText + "8"
    bDisplay.value = vText
});

bNum9.addEventListener("click", () => {
    vText = vText + "9"
    bDisplay.value = vText
});

bAdd.addEventListener("click", () => {
    vText = vText + "+"
    bDisplay.value = vText
});

bSubtract.addEventListener("click", () => {
    vText = vText + "-"
    bDisplay.value = vText
});

bMultiply.addEventListener("click", () => {
    vText = vText + "*"
    bDisplay.value = vText
});

bDivide.addEventListener("click", () => {
    vText = vText + "/"
    bDisplay.value = vText
});

bDelete.addEventListener("click", () => {
    vText = vText.slice(0,-1);
    bDisplay.value = vText;
});

bClear.addEventListener("click", () => {
    vText = "";
    bDisplay.value = vText
});

bAnswer.addEventListener("click", () => {
    if (vAnswer.length == 0) {

    } else {
        vText = "Ans";
        bDisplay.value = vText
    }
});
