document.getElementById('donation-btn')
    .addEventListener('click', function () {
        showSectionById('donation-container');
        btnBackground('transaction-btn')

    })
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        showSectionById('transaction-container')
        btnBackground('donation-btn')
    })

// document.getElementById('donation-btn')
//     .addEventListener('click', function () {
//         btnBackground('donation-btn')
//     })

// document.getElementById('transaction-btn')
//     .addEventListener('click', function () {
//         btnBackground('transaction-btn')
//     })