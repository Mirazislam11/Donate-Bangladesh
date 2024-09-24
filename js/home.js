document.getElementById('btn-add-donation')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateForNohakali = getInputValueById('input-noakali-donation');

        const donateForNohakaliBalance = getTextValueById('donation-balance');
        if (isNaN(donateForNohakali) || 0 > donateForNohakali) {
            alert('filed to donation');
            return;
        }
        // transaction
        const date = new Date()
        const currentDate = date.textContent = date.toString();

        const div = document.createElement('div');
        div.classList.add('border', 'p-8', 'mt-6');
        div.innerHTML = `
            <p class='text-xl font-bold'>${donateForNohakali} Taka is Donate for Flood at Noakhali, Bangladesh</p>
            <p>${currentDate}</p>
        `
        document.getElementById('transaction-content').appendChild(div)
        
        // console.log(date);

        const yourBalances = getTextValueById('your-balance');
        if (donateForNohakali > yourBalances) {
            alert('you do not have enough money for donation ')
            return
        }
        const  successPopUp = document.getElementById('my_modal_4');
        const donateForNohakaliNewBalance = donateForNohakali + donateForNohakaliBalance;
        const yourNewBalance = yourBalanceSub(yourBalances, donateForNohakali);
        // console.log(donateForNohakaliNewBalance);
        
        document.getElementById('donation-balance').innerText = donateForNohakaliNewBalance;
        document.getElementById('your-balance').innerText = yourNewBalance;
        successPopUp.showModal();
       
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
        const date = new Date()
        const currentDate = date.textContent = date.toString();

        const div = document.createElement('div');
        div.classList.add('border', 'p-8', 'mt-6');
        div.innerHTML = `
            <p class='text-xl font-bold'>${donateForFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p>${currentDate}</p>
        `
        document.getElementById('transaction-content').appendChild(div)
       
        const yourBalance = getTextValueById('your-balance')
        if (donateForFeni > yourBalance) {
            alert('you do not have enough money for donation ')
            return
        }
        const  successPopUp = document.getElementById('my_modal_4');
        const donateForFeniNewBalance = donateForFeni + donateForFeniBalance;
        const donateYourBalance = yourBalanceSub(yourBalance, donateForFeni);

        document.getElementById('donation-balance-feni').innerText = donateForFeniNewBalance;
        document.getElementById('your-balance').innerText = donateYourBalance;
        successPopUp.showModal();
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
        const date = new Date()
        const currentDate = date.textContent = date.toString();

        const div = document.createElement('div');
        div.classList.add('border', 'p-8', 'mt-6');
        div.innerHTML = `
            <p class='text-xl font-bold'>${donateForQuota} Taka is Aid for Injured in the Quota Movement</p>
            <p>${currentDate}</p>
        `
        document.getElementById('transaction-content').appendChild(div)

        const donateForYourBalance = getTextValueById('your-balance');
        if (donateForQuota > donateForYourBalance) {
            alert('you do not have enough money for donation ')
            return
        }
        const  successPopUp = document.getElementById('my_modal_4');
        const donateForQuotaNewBalance = donateForQuota + donateForQuotaBalance;
        const yourQuotaBalance = yourBalanceSub(donateForYourBalance, donateForQuota);

        document.getElementById('donation-balance-quota').innerText = donateForQuotaNewBalance;
        document.getElementById('your-balance').innerText = yourQuotaBalance;
        successPopUp.showModal();
    })

