
function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="../index.html">
                <img src="../img/logos/logo.png" alt="ExpertShop logo">
            </a>

            <div id="nav-account">
                ${USER.logInStatus == false ? `
                    <div onclick="toSignUp()">
                        <p>Sign Up</p>
                    </div>

                    <div onclick="toLogIn()">
                        <p>Log In</p>
                    </div>` : `<p>${USER.username}</p>
                    <img src="${USER.pfp}" alt="Profile picture of: ${USER.username}">`
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

//  a mess
function pay() {
    checkInputFields()
}

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

    USER.cart = [{ onDate: undefined }]
    localStorage['acc-cart'] = JSON.stringify(USER.cart)
    console.log(localStorage['acc-cart']);

    toSuccessfullPurchasePage()
}

function toHomepage() {
    window.location.href = `../index.html`
}

function toSuccessfullPurchasePage() {
    window.location.href = `./shop-payment-done.html`
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
        checkPaymentInfo()
    }
}

function toCartPage() {
    window.location.href = `./cart.html`;
}
