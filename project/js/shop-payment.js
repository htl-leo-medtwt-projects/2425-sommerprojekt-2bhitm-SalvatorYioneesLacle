
function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="../index.html">
                <img src="../img/logos/logo${JSON.parse(localStorage['acc-darkMode']) == true ? '_dark' : ''}.png" alt="ExpertShop logo">
            </a>

            <div id="nav-account" ${USER.logInStatus ? 'onclick="toAccountOverview()"' : ''}>
                ${USER.logInStatus == false ? `
                    <div onclick="toSignUp()">
                        <p>Sign Up</p>
                    </div>

                    <div onclick="toLogIn()">
                        <p>Log In</p>
                    </div>` : `<p>${USER.username}</p>
                    <img src="${USER.pfp.split(':')[0].includes('http') ? USER.pfp : '../' + USER.pfp}" alt="Profile picture of: ${USER.username}">`
        }
            </div>
            
            <div id="nav-items" onclick="toCartPage()">
                <img src="../img/icons/shopping-cart${JSON.parse(localStorage['acc-darkMode']) == true ? '-white' : ''}.png" alt="shopping cart">
            </div>
            `;
}
initNavigationbar()

function initUsernameInput() {
    if (document.getElementById('username') != null) {
        document.getElementById('username').value = USER.username;
    }
}
initUsernameInput()

function pay() {
    checkInputFields()
}

function saveUsername() {

}

function saveAddress() {

}

function saveCity() {

}

function savePostal() {

}

function savePhoneNumber() {

}

function saveCountry() {

}

let inputFieldIds = ['username', 'address', 'city', 'postal', 'phone-number', 'country']
function checkInputFields() {
    let canContinue = true;
    for (let i = 0; i < inputFieldIds.length; i++) {
        document.getElementById(`${inputFieldIds[i]}`).style.borderColor = 'transparent'

        if (document.getElementById(`${inputFieldIds[i]}`).value == '') {
            document.getElementById(`${inputFieldIds[i]}`).style.borderColor = 'red'
            canContinue = false;
        }
    }

    if (canContinue) {
        // for (let i = 0; i < USER.cart.item.length; i++) {
        //     USER.transactions.item.push(USER.cart.item[i])
        // }

        USER.cart.item.splice(0);
        USER.cart = {
            item: [
                {
                    onDate: undefined
                }
            ]
        }
        localStorage['acc-cart'] = JSON.stringify(USER.cart)
        localStorage['acc-transactions'] = JSON.stringify(USER.transactions)
        toSuccessfullPurchasePage()
    }
}

function initDarkModeBtn() {
    document.getElementsByTagName('darkmode').item(0).innerHTML = `
    <div id="darkMode-wrapper">
        <div id="darkMode-btn" onclick="darkMode()">
            <img src="../img/icons/darkmode_${JSON.parse(localStorage['acc-darkMode']) == true ? 'on' : 'off'}.png" alt="Dark Mode Icon">
        </div>
    </div>
 `;
}
initDarkModeBtn()

function changeNavLogoCart() {
    document.getElementById('nav-logo').innerHTML = `<img src="../img/logos/logo${JSON.parse(localStorage['acc-darkMode']) == true ? '_dark' : ''}.png" alt="ExpertShop logo">`;
    document.getElementById('nav-items').innerHTML = `<img src="../img/icons/shopping-cart${JSON.parse(localStorage['acc-darkMode']) == true ? '-white' : ''}.png" alt="shopping cart">`
    document.getElementById('darkMode-btn').innerHTML = `<img src="../img/icons/darkmode_${JSON.parse(localStorage['acc-darkMode']) == true ? 'on' : 'off'}.png" alt="Dark Mode Icon">`

    if (document.getElementById('headerBoxImg') != null) {
        document.getElementById('headerBoxImg').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr.png" alt="Transparent Go Around">`
    }

    document.getElementById('background').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr50.png" alt="Transparent Go Around">`

    document.getElementById('footerBorder').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'blTrBl' : 'whTrWh'}.png" alt="gradient">`
    document.getElementById('footerBorder').style.backgroundImage = `url(../img/util/Shadow${JSON.parse(localStorage['acc-darkMode']) == true ? 'White' : 'Black'}Tr.png)`
}
changeNavLogoCart()

function toCartPage() {
    window.location.href = `./cart.html`;
}

function toHomepage() {
    window.location.href = `../index.html`
}

function toSuccessfullPurchasePage() {
    window.location.href = `./shop-payment-done.html`
}

function toLogIn() {
    window.location.href = `./account/account-login.html`;
}

function toSignUp() {
    window.location.href = `./account/account-signup.html`;
}
