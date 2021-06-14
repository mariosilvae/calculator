const currentScreen = document.querySelector('.output__current')
const previousScreen = document.querySelector('.output__previous')
const buttons = document.querySelectorAll('button');

let operationStatus = false
let number1
let number2
let typeOperation

currentScreen.textContent = '0'

buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const t = e.target,
          d = t.dataset
    
    if(d.number) writeScreen(d.number)
    if(d.math) getOperation(t, d.math)
    if(d.equals) runOperation()
    if(d.clear) clear()
  })
});


const writeScreen = (number) => {
  currentScreen.textContent === '0' || operationStatus === true
  ? currentScreen.textContent = number
  : number === "." && !currentScreen.textContent.includes(".")
    ? currentScreen.textContent += number
    : number !== "."
      ? currentScreen.textContent += number
      : null

  operationStatus = false
}

const getOperation = (elem, operation) => {
  operationStatus = true
  number1 = Number(currentScreen.textContent)
  typeOperation = operation
  currentScreen.textContent = "0"
  previousScreen.textContent = `${number1} ${elem.textContent}`

}


const clear = () => {
  previousScreen.textContent = ""
  currentScreen.textContent = "0"
}

const runOperation = () => {

  number2 = Number(currentScreen.textContent)
  let result;
  switch (typeOperation) {
    case 'add':
      result = number1 + number2
      previousScreen.textContent = ""
      break
    case 'minus':
      result = number1 - number2
      previousScreen.textContent = ""
      break
    case 'divide':
      result = number1 / number2
      previousScreen.textContent = ""
      break
    case 'multiply':
      result = number1 * number2
      previousScreen.textContent = ""
      break
      
    default:
      break
  }

  result === Infinity
    ? currentScreen.textContent = "0"
    : currentScreen.textContent = result
  operationStatus = true

}