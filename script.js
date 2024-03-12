const numberButton = document.querySelectorAll("[data-Number]")
const operationButton = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const clearAllButton = document.querySelector("[data-clear-all]")
const deleteButton = document.querySelector("[data-delete]")
const currentTextElement = document.querySelector("[data-preview-text]")
const resultTextElement = document.querySelector("[data-result]")

let [currentInput, previousInput, operator, result] = ['', '', '', '']

// const append = () => {
//     currentInput += previousInput
//     updateDisplay()
// }

// const subtract = () => {
//     currentInput -= previousInput
//     updateDisplay()
// }

// const multiply = () => {
//     currentInput *= previousInput
//     updateDisplay()
// }

// const divide = () => {
//     currentInput /= previousInput
//     updateDisplay()
// }

const reset = () => {
    [currentInput, previousInput, operator, result] = ['', '', '', '']
    currentTextElement.innerText = ''
}

const updateDisplay = () => {
    currentTextElement.innerText = 
        `${previousInput != undefined ? previousInput : ''}${operator != undefined ? operator : ''}${currentInput}`;
    // resultTextElement.innerText = result
    console.log(previousInput, operator, currentInput)
}

numberButton.forEach(number => {
    number.addEventListener('click', (event) => {
        currentInput += event.target.innerText
        // result = currentInput
        updateDisplay()
    })
})

operationButton.forEach(op => {
    op.addEventListener('click', (event) => {
        operator = event.target.innerText
        previousInput = currentInput
        currentInput = ''
        updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {

    let currentNumber = Number(currentInput)
    let previousNumber = Number(previousInput)

    if ((currentNumber && previousNumber || operator) == '') {
        console.log('undefied')
    } else {
        switch (operator) {
            case '+':
                result = previousNumber + currentNumber
                console.log('plus')
                break
            case '-':
                result = previousNumber - currentNumber
                console.log('minus')
                break
            case '*':
                result = previousNumber * currentNumber
                console.log('multi')
                break

            case '÷':
                result = previousNumber / currentNumber
                console.log('div')
                break

        }
        [previousInput, operator] = ''
        currentInput = result
    }
    updateDisplay()
})

deleteButton.addEventListener('click', () => {
    currentInput = currentInput.substring(0, currentInput.length - 1)
    updateDisplay()
})