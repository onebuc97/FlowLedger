//Calculator logic

// DOM Elements
const principle = document.getElementById(principle);
const years = document.getElementById(years);
const interest = document.getElementById(interest);
const payment = document.getElementById(payment);
const total = document.getElementById(total);
const totalinterest = document.getElementById(totalinterest);

//Functions
function calculate() {
    //Local variables
    var principle = document.loandata.principle.value;
    var interest = document.loandata.interest.value / 100 / 12;
    var payments = document.loandata.years.value * 12;

    // Computing Monthly Payment
    let x = Math.pow(1 + interest, payments);
    var monthly = (principle*x*interest)(x-1);

    // Checking if result is a finite number
    if (isFinite(monthly)) {

        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML =
            ((monthly * payments) - principle).toFixed(2); 
    }
    
    //Otherwise, don't display anything (bad input)
    else {
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
    }

    // Rounds a number to two decimal places

    function round(x) {
        return Math.round(x*100)/100;
    }
}

// Event Listeners
document.getElementById("calc").addEventListener(onclick, calculate);