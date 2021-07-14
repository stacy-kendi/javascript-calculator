class Calculator{
    constructor(previousinputTextElement,currentinputTextElement) {
        this.previousinputTextElement = previousinputTextElement
        this.currentinputTextElement = currentinputTextElement
        this.clear()
    }

    //functions to be performed
    clear(){
        this.previousinput = ''
        this.currentinput = ''
        this.operation = undefined
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
        this.operand = this.operand
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

    updateDisplay() {
        this.currentinputTextElement.innerText = this.currentinput
        this.previousinputTextElement.innerText = this.previousinput

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


