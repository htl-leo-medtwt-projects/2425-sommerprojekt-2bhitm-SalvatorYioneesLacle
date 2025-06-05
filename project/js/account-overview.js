function initAccountOverview() {
    document.getElementById('accountDetails').innerHTML = `
        <div>
            <p>${USER.username}</p>
        </div>
        <div onclick="toAccountEdit()">
            <img src="${USER.pfp.split(':')[0].includes('http') ? USER.pfp : '../../' + USER.pfp}" alt="${USER.username}">
        </div>
    `;

    document.getElementById('accountBalance').innerHTML = `
        <p>${USER.money.toFixed(2)} €</p>
    `;
}
initAccountOverview()

function changeNavLogoCart() {
    document.getElementById('nav-logo').innerHTML = `<img src="../../img/logos/logo${JSON.parse(localStorage['acc-darkMode']) == true ? '_dark' : ''}.png" alt="ExpertShop logo">`;
    document.getElementById('darkMode-btn').innerHTML = `<img src="../../img/icons/darkmode_${JSON.parse(localStorage['acc-darkMode']) == true ? 'on' : 'off'}.png" alt="Dark Mode Icon">`
    document.getElementById('headerBoxImg').innerHTML = `<img src="../../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr.png" alt="Transparent Go Around">`;
    document.getElementById('backBtnBox').innerHTML = `<a href="../../index.html"><img src="../../img/util/BackBtn${JSON.parse(localStorage['acc-darkMode']) == true ? '-white' : ''}.png" alt="Back button"></a>`

    for (let i = 0; i < document.getElementsByClassName('transactionBoxImg').length; i++) {
        document.getElementsByClassName('transactionBoxImg').item(i).innerHTML = `<img src="../../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'trBlTr70' : 'trWhTr70'}.png" alt="Transparent Go Around">`
        document.getElementsByClassName('transactionBoxImg').item(i).style.backgroundImage = `url(../../img/util/Shadow${JSON.parse(localStorage['acc-darkMode']) == true ? 'White' : 'Black'}Tr.png)`
    }
}
changeNavLogoCart()