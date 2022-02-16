
// function update(id, isExpense) {
//     const incomeText = document.getElementById('income');
//     const incomeValue = parseFloat(incomeText.value);
//     const foodText = document.getElementById('food');
//     const foodValue = parseFloat(foodText.value);
//     const rentText = document.getElementById('rent');
//     const rentValue = parseFloat(rentText.value);
//     const clothText = document.getElementById('cloth');
//     const clothValue = parseFloat(clothText.value);
//     //total  calculate
//     const amount = document.getElementById(id);
//     amount.innerText = amountNum;
//     if (isExpense == true) {
//         const amountNum = foodValue + rentValue + clothValue;
//     }
//     else {
//         const amountNum = incomeValue - totalExpense;
//     }
// }

function getInput(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

document.getElementById('calculate').addEventListener('click', function () {
    // const incomeText = document.getElementById('income');
    // const incomeValue = parseFloat(incomeText.value);
    // const foodText = document.getElementById('food');
    // const foodValue = parseFloat(foodText.value);
    // const rentText = document.getElementById('rent');
    // const rentValue = parseFloat(rentText.value);
    // const clothText = document.getElementById('cloth');
    // const clothValue = parseFloat(clothText.value);

    //calculate total expenses

    // const totalExpense = foodValue + rentValue + clothValue;
    // const expense = document.getElementById('expense');
    // expense.innerText = totalExpense;

    //calculate balance

    // const balance = document.getElementById('balance');
    // const balanceAmount = incomeValue - totalExpense;
    // balance.innerText = balanceAmount;

})