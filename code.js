// input id and for error handling
function getInput(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    if (inputValue < 0) {
        alert('please put positive number');
        document.getElementById('expense').style.display = 'none';
        document.getElementById('balance').style.display = 'none';
        document.getElementById('save-amount').style.display = 'none';
        document.getElementById('remaining-balance').style.display = 'none';
    }
    return inputValue;
}

//calculate part

document.getElementById('calculate').addEventListener('click', function () {

    //calculate total expenses
    const totalExpense = getInput('food') + getInput('rent') + getInput('cloth');
    const expense = document.getElementById('expense');
    expense.innerText = totalExpense;

    //calculate balance

    const balance = document.getElementById('balance');
    const balanceAmount = getInput('income') - totalExpense;
    balance.innerText = balanceAmount;

    //error for low income

    if (getInput('income') < totalExpense) {
        alert("your income is low.You can't expense much");
        document.getElementById('expense').style.display = 'none';
        document.getElementById('balance').style.display = 'none';
    }

})

//savings part

document.getElementById('save').addEventListener('click', function () {
    //saving amount
    const savingAmount = document.getElementById('save-amount');
    // const percentageValue = document.getElementById('percentage')
    const percentage = getInput('income') * (getInput('percentage') / 100);
    savingAmount.innerText = percentage;


    //remaining amount

    const remaining = document.getElementById('remaining-balance');
    const remainingAmount = document.getElementById('balance').innerText - percentage;
    remaining.innerText = remainingAmount;

    //error for low income

    if (percentage > document.getElementById('balance').innerText) {
        alert("you don't have enough money to save");
        if (document.getElementById('balance').innerText > 0) {
            remaining.innerText = document.getElementById('balance').innerText;
        }
        else {
            remaining.innerText = '00';
        }
    }

})