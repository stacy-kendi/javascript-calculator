class Calculator{
    constructor(previousinputTextElement,currentinputTextElement) {
        this.previousinputTextElement = previousinputTextElement
        this.currentinputTextElement = currentinputTextElement
        this.operand = undefined
        this.clear()
    }

    //functions to be performed
    clear(){
        this.previousinput = ''
        this.currentinput = ''
        this.operand = undefined
    }
    
    delete(){
        this.currentinput = this.currentinput.toString().toString().slice(0, -1)
    }

    append(number) {
        if(number === '.' && this.currentinput.includes('.')) return
        this.currentinput = this.currentinput.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentinput === '') return
        if(this.previousinput !== '') {
            this.compute()
        }
        this.operand = operation
        this.previousinput = this.currentinput
        this.currentinput = ''
    }

    compute(){
        let result
        const previous = parseFloat(this.previousinput)
        const current = parseFloat(this.currentinput)
        if(isNaN(previous) || isNaN(current)) return
        
        switch(this.operand) {
            case '+':
            result = previous + current
            break

            case '-':
            result = previous - current
            break

            case '/':
            result = previous / current
            break

            case '*':
            result = previous * current
            break

            default: 
            return
        }

        this.currentinput = result
        this.operand = undefined
        this.previousinput = ''

    }

    getDisplay(number) {
        // Displaying the numbers in the calculator in a formatted form 

        //Display numbers before and after a decimal value when the data is formatted to have comma's
        const numbersplit = number.toString() //converting the number into a string
        const wholenumber = parseFloat(numbersplit.split('.')[0])
        const decimalpartnumber = numbersplit.split('.')[1]
        let integerDisplay
        if (isNaN(wholenumber)) {
            integerDisplay = ''
        }else{
            integerDisplay = wholenumber.toLocaleString('en',{maximumFractionDigits:0})
        }
        
        if(decimalpartnumber != null) {
            return `${integerDisplay}.${decimalpartnumber}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentinputTextElement.innerText = this.getDisplay(this.currentinput)
        
        if(this.operand != null){
        this.previousinputTextElement.innerText = 
        `${this.getDisplay(this.previousinput)} ${this.operand}`
        }else{
            this.previousinputTextElement.innerText = ''
        }

    }
}


const numberbuttons = document.querySelectorAll('[data-number]')
const operandbuttons = document.querySelectorAll('[data-operand]')
const deletebuttons = document.querySelector('[data-delete]')
const equalsbuttons = document.querySelector('[data-equals]')
const clearbuttons = document.querySelector('[data-clear]')
const previousinputTextElement = document.querySelector('[data-previous-input]')
const currentinputTextElement = document.querySelector('[data-current-input]')

const calculator = new Calculator(previousinputTextElement,currentinputTextElement)

numberbuttons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.append(button.innerText)
        calculator.updateDisplay()
    })
})

operandbuttons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsbuttons.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearbuttons.addEventListener('click',button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deletebuttons.addEventListener('click',button =>{
    calculator.delete()
    calculator.updateDisplay()
})


