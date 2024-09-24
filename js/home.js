document.getElementById('btn-add-donation')
    .addEventListener('click', function(event){
        event.preventDefault();

    const donateForNohakali = getInputValueById('input-noakali-donation');

    const donateForNohakaliBalance = getTextValueById('donation-balance');

    const yourBalances = getTextValueById('your-balance');

    const donateForNohakaliNewBalance = donateForNohakali + donateForNohakaliBalance;
    const yourNewBalance = yourBalanceSub(yourBalances,donateForNohakali);
    // console.log(donateForNohakaliNewBalance);

    document.getElementById('donation-balance').innerText = donateForNohakaliNewBalance;
    document.getElementById('your-balance').innerText = yourNewBalance;
    
    })

document.getElementById('btn-add-donation-feni')
    .addEventListener('click', function(event){
        event.preventDefault();

    // if(isNaN(donateForFeni)){
    //     alert('this is wrong input');
    //     return;
    // }
        
    const donateForFeni = getInputValueById('input-feni-donation');
    const donateForFeniBalance = getTextValueById('donation-balance-feni');
    const yourBalance = getTextValueById('your-balance')

    // console.log(donateForFeni, donateForFeniBalance);

    const donateForFeniNewBalance = donateForFeni + donateForFeniBalance;
    // const donateYourBalance = yourBalance - donateForFeni;
    const donateYourBalance = yourBalanceSub(yourBalance,donateForFeni);

    document.getElementById('donation-balance-feni').innerText = donateForFeniNewBalance;
    document.getElementById('your-balance').innerText = donateYourBalance;
    })

    