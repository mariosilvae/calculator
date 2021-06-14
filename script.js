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
  : currentScreen.textContent += number

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

  switch (typeOperation) {
    case 'add':
      currentScreen.textContent = number1 + number2
      previousScreen.textContent = ""
      break
    case 'minus':
      currentScreen.textContent = number1 - number2
      previousScreen.textContent = ""
      break
    case 'divide':
      currentScreen.textContent = number1 / number2
      previousScreen.textContent = ""
      break
    case 'multiply':
      currentScreen.textContent = number1 * number2
      previousScreen.textContent = ""
      break
      
    default:
      break
  }
  operationStatus = true

}