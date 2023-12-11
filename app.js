let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //Store all html values

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let decimal = document.querySelector('.decimal');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        if(currentValue.length <= 12){
            handleNumber(e.target.textContent)
            currentScreen.textContent = currentValue;
        }
    }));

    operators.forEach((op) => op.addEventListener('click', function(e){
        handlerOperator(e.target.textContent)
        previousScreen.textContent = previousValue + '' + operator;
        currentScreen.textContent = '';
    }));

    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '0';
    })

    equal.addEventListener('click', function(){
        if (currentValue != '' && previousValue != ''){
            calculate()
        previousScreen.textContent = '';
        if(previousValue.length <= 6){
            currentScreen.textContent = previousValue;
        } else {
            currentScreen.textContent = previousValue.slice(0,6) + '...';
        }
    
        }
        
        
        
        

    })

    decimal.addEventListener('click', function(){
        if(!currentValue.includes('.')){
            currentValue += '.';
            currentScreen.textContent = currentValue;
        }
    })
});

function handleNumber(num){
    currentValue += num;
};

function handlerOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

function calculate(){
    
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+'){
        previousValue += currentValue
    } else if (operator === '-'){
        previousValue -= currentValue
    } else if (operator === '÷'){
        previousValue /= currentValue
    } else {
        previousValue *= currentValue
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(){
    return Math.round(previousValue * 1000) / 1000;
}