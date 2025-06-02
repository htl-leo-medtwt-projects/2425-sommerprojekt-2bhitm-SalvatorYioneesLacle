let TEMP = {
    email: USER.email,
    pw: USER.pw,
    username: USER.username,
    pfp: USER.pfp
}

let INPUTS = {
    email: document.getElementById('email'),
    pw: document.getElementById('password'),
    pwConfirm: document.getElementById('password-confirm'),
    username: document.getElementById('username')
}

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logos/logo.png" alt="ExpertShop logo">
            </a>`;
}
initNavigationbar()

function initUsernameInput() {
    document.getElementById('username').value = USER.username;
}
initUsernameInput()

function checkPaymentInfo() {
    let temp = 0;
    for (let i = 0; i < USER.cart.item.length; i++) {
        temp += USER.cart.item[i].price
    }

    if (USER.money - temp < 0) {
        showWarningMessage('Not enough funds!')
        return;
    }
    USER.money -= temp;
    localStorage['acc-money'] = JSON.stringify(USER.money)
    console.log(USER.money);
    
}

function saveUserData() {

}


