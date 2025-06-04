
function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="../index.html">
                <img src="../img/logos/logo.png" alt="ExpertShop logo">
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
                <img src="../img/icons/shopping-cart.png" alt="shopping cart">
            </div>
            `;
}
initNavigationbar()

function initUsernameInput() {
    document.getElementById('username').value = USER.username;
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
        for (let i = 0; i < USER.cart.item.length; i++) {
            USER.transactions.item.push(USER.cart.item[i])
        }

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

function toCartPage() {
    window.location.href = `./cart.html`;
}

function toHomepage() {
    window.location.href = `../index.html`
}

function toSuccessfullPurchasePage() {
    window.location.href = `./shop-payment-done.html`
}
