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

function showSectionById(id){
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}

function btnBackground(id){
    document.getElementById('donation-btn').classList.add('bg-green-500')
    document.getElementById('transaction-btn').classList.add('bg-green-500')

    document.getElementById(id).classList.remove('bg-green-500')
}
// document.getElementById('donation-btn').addEventListener('click', function(){
//     btnBackground('transaction-btn')
// })
// document.getElementById('transaction-btn').addEventListener('click', function(){
//     btnBackground('donation-btn')
// })

document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
});
document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';});