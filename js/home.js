document.getElementById('btn-add-donation')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateForNohakali = getInputValueById('input-noakali-donation');

        const donateForNohakaliBalance = getTextValueById('donation-balance');
        if (isNaN(donateForNohakali) || 0 > donateForNohakali) {
            alert('filed to donation');
            return;
        }
       

        const yourBalances = getTextValueById('your-balance');
        if (donateForNohakali > yourBalances) {
            alert('you do not have enough money for donation ')
            return
        }
       
        const donateForNohakaliNewBalance = donateForNohakali + donateForNohakaliBalance;
        const yourNewBalance = yourBalanceSub(yourBalances, donateForNohakali);
        // console.log(donateForNohakaliNewBalance);

        document.getElementById('donation-balance').innerText = donateForNohakaliNewBalance;
        document.getElementById('your-balance').innerText = yourNewBalance;
        const invalidInput = validInput(donateForNohakali);
        return invalidInput

    })

document.getElementById('btn-add-donation-feni')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateForFeni = getInputValueById('input-feni-donation');
        const donateForFeniBalance = getTextValueById('donation-balance-feni');
        if (isNaN(donateForFeni) || 0 > donateForFeni) {
            alert('filed to donation');
            return;
        }

        const yourBalance = getTextValueById('your-balance')
        if (donateForFeni > yourBalance) {
            alert('you do not have enough money for donation ')
            return
        }

        // console.log(donateForFeni, donateForFeniBalance);

        const donateForFeniNewBalance = donateForFeni + donateForFeniBalance;
        // const donateYourBalance = yourBalance - donateForFeni;
        const donateYourBalance = yourBalanceSub(yourBalance, donateForFeni);

        document.getElementById('donation-balance-feni').innerText = donateForFeniNewBalance;
        document.getElementById('your-balance').innerText = donateYourBalance;
    })

document.getElementById('btn-add-donation-quota')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const donateForQuota = getInputValueById('input-quota-donation');
        const donateForQuotaBalance = getTextValueById('donation-balance-quota');
        if (isNaN(donateForQuota) || 0 > donateForQuota) {
            alert('filed to donation');
            return;
        }

        const donateForYourBalance = getTextValueById('your-balance');
        if (donateForQuota > donateForYourBalance) {
            alert('you do not have enough money for donation ')
            return
        }

        const donateForQuotaNewBalance = donateForQuota + donateForQuotaBalance;
        const yourQuotaBalance = yourBalanceSub(donateForYourBalance, donateForQuota);

        document.getElementById('donation-balance-quota').innerText = donateForQuotaNewBalance;
        document.getElementById('your-balance').innerText = yourQuotaBalance;

    })
    