
function getInput(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

document.getElementById('calculate').addEventListener('click', function () {

    //calculate total expenses
    const totalExpense = getInput('food') + getInput('rent') + getInput('cloth');
    const expense = document.getElementById('expense');
    expense.innerText = totalExpense;

    //calculate balance

    const balance = document.getElementById('balance');
    const balanceAmount = getInput('income') - totalExpense;
    balance.innerText = balanceAmount;


})

// function savings(balance) {
//     //saving amount
//     const savingAmount = document.getElementById('save-amount');
//     const percentage = getInput('income') * (20 / 100);
//     savingAmount.innerText = percentage;
//     //remaining amount
//     const remaining = document.getElementById('remaining-balance');
//     const remainingAmount = balance - savingAmount;
//     remaining.innerText = remainingAmount;
// }

document.getElementById('save').addEventListener('click', function (event) {
    //saving amount
    const savingAmount = document.getElementById('save-amount');
    const percentage = getInput('income') * (20 / 100);
    savingAmount.innerText = percentage;
    //remaining amount
    const remaining = document.getElementById('remaining-balance');
    const remainingAmount = event.target.balance - savingAmount;
    remaining.innerText = remainingAmount;

})