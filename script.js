const buttonValue0 = document.querySelector(".btn0"); 
const buttonValue1= document.querySelector(".btn1"); 
const buttonValue2 = document.querySelector(".btn2"); 
const buttonValue3 = document.querySelector(".btn3"); 
const buttonValue4 = document.querySelector(".btn4"); 
const buttonValue5 = document.querySelector(".btn5"); 
const buttonValue6 = document.querySelector(".btn6"); 
const buttonValue7 = document.querySelector(".btn7"); 
const buttonValue8 = document.querySelector(".btn8"); 
const buttonValue9 = document.querySelector(".btn9"); 
const buttonValueClear = document.querySelector(".btnClear"); 
const buttonValueMultiply = document.querySelector(".btnMult"); 
const buttonValueMinus = document.querySelector(".btnMinus"); 
const buttonValueDivide = document.querySelector(".btnDivide"); 
const buttonValueEqual = document.querySelector(".btnEqual"); 
const buttonValuePlus = document.querySelector(".btnPlus"); 

const inputField = document.querySelector(".resultBar"); 

buttonValue0.addEventListener("click", () =>{
    inputField.value = inputField.value + 0; 
}); 
buttonValue1.addEventListener("click", () =>{
    inputField.value = inputField.value + 1; 
}); 
buttonValue2.addEventListener("click", () =>{
    inputField.value = inputField.value + 2; 
}); 
buttonValue3.addEventListener("click", () =>{
    inputField.value = inputField.value + 3; 
}); 
buttonValue4.addEventListener("click", () =>{
    inputField.value = inputField.value + 4; 
}); 
buttonValue5.addEventListener("click", () =>{
    inputField.value = inputField.value + 5; 
}); 
buttonValue6.addEventListener("click", () =>{
    inputField.value = inputField.value + 6; 
}); 
buttonValue7.addEventListener("click", () =>{
    inputField.value = inputField.value + 7; 
}); 
buttonValue8.addEventListener("click", () =>{
    inputField.value = inputField.value + 8; 
}); 
buttonValue9.addEventListener("click", () =>{
    inputField.value = inputField.value + 9; 
});

buttonValueClear.addEventListener("click", () =>{
    inputField.value = ''; 
}); 

buttonValuePlus.addEventListener('click', () =>{
    inputField.value = inputField.value + '+'; 
}); 
buttonValueMinus.addEventListener('click', () =>{
    inputField.value = inputField.value + '-'; 
}); 
buttonValueMultiply.addEventListener('click', () =>{
    inputField.value = inputField.value + '*'; 
}); 
buttonValueDivide.addEventListener('click', () =>{
    inputField.value = inputField.value + '/'; 
}); 

buttonValueEqual.addEventListener('click', () =>{
    inputField.value = eval(inputField.value); 
}); 