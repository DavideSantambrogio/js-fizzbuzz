const rowElem = document.querySelector(".row")

let gridString = "";
let result;
for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    result = "fizzbuzz";
  } 
//   console.log(i, result)

else if (i % 3 === 0) {
    result = "fizz";
} 
// console.log(i, result)

else if (i % 5 === 0) {
    result = "buzz";
}
// console.log(i, result)

else {
    result = i;
}
console.log(i, result)  

gridString += `<div class="square ${result}">${result}</div>`
    
};

rowElem.innerHTML = gridString;
