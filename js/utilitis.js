function getInputValueById(id){
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}

function getTextValueById(id){
    const donationBalance = document.getElementById(id).innerText;
    const donationBalanceNumber = parseFloat(donationBalance);
    return donationBalanceNumber;
}

function yourBalanceSub(balance1, balance2){
    const newBalance = balance1 - balance2;
    return newBalance;
}

// function validInput(id){
//     const inputValue = document.getElementById(id).value;
//     if(isNaN(inputValue) || inputValue < 0){
//         alert('filed to donation');
//         return;
//     }
// }