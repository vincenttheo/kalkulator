//
//
//
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
// console.log(numbers)

numbers.forEach((number) => {
	// console.log(number)
	number.addEventListener("click", (event) => {
		// console.log("number is pressed")
		// console.log(event.target.value)
		// updateScreen(event.target.value)
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})
//
//
//
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	// currentNumber = number
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

const inputOperator = (operator) => {
	// prevNumber = currentNumber
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = ''
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		// console.log(event.target.value)
		inputOperator(event.target.value)
	})
})
//
//
//
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	// console.log('equal button is pressed')
	calculate()
	updateScreen(currentNumber)
})

const calculate = () => {
	let result = ''
	switch (calculationOperator) {
		case "+":
			// result = prevNumber + currentNumber
			// result = parseInt(prevNumber) + parseInt(currentNumber)
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break;

		case "-":
			// result = prevNumber - currentNumber
			// result = parseInt(prevNumber) - parseInt(currentNumber)
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break;

		case "*":
			// result = prevNumber * currentNumber
			// result = parseInt(prevNumber) * parseInt(currentNumber)
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break;

		case "/":
			// result = prevNumber / currentNumber
			// result = parseInt(prevNumber) / parseInt(currentNumber)
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break;

		case "%":
			result = parseFloat(prevNumber) / 100
			break;

		case "√":
			result = parseFloat(Math.sqrt(prevNumber))
			break;
	
		default:
			return;
	}
	currentNumber = result
	calculationOperator = ''
}
//
//
//
const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	// console.log('AC button is pressed')
	clearAll()
	updateScreen(currentNumber)
})
//
//
//
inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	// console.log(event.target.value)
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})
//
//
//