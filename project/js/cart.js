
function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="../index.html">
                <img src="../img/logos/logo${USER.darkMode == true ? '_dark' : ''}.png" alt="ExpertShop logo">
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
            
            <div id="nav-items">
                <img src="../img/icons/shopping-cart${USER.darkMode == true ? '-white' : ''}.png" alt="shopping cart">
            </div>
            
            `;
}
initNavigationbar()

function initFooter() {
    let str = `
        <div id="footerBorder">
            <img src="../img/util/WhTrWh.png" alt="gradient">
        </div>
        
        <div id="footerContent">
        </div>
    `;
    document.getElementsByTagName('footer').item(0).innerHTML = str;
}
initFooter()

function initWrapper() {
    document.getElementById('wrapper').innerHTML = `
        <div id="transactionsWrapper">
            <div id="transactions">

            </div>
            <div id="totalPrice">
                <div class="monetaryBoxes">
                    <div class="filterHeaders">
                        <h2>Total Price</h2>
                    </div>
                    <div class="monetaryText">

                    </div>
                </div>
                <div class="monetaryBoxes">
                    <div class="filterHeaders">
                        <h2>Your balance</h2>
                    </div>
                    <div class="monetaryText" id="user-money">
                        <p>${`${USER.money} €`}</p>
                    </div>
                </div>
                <div class="monetaryBoxes">
                    <div id="addMoneyBox">
                        <div onclick="addMoney(${100})">
                            <p>+100 €</p>
                        </div>
                        <div onclick="addMoney(${200})">
                            <p>+200 €</p>
                        </div>
                        <div onclick="addMoney(${500})">
                            <p>+500 €</p>
                        </div>
                        <div onclick="addMoney(${1000})">
                            <p>+1000 €</p>
                        </div>
                    </div>
                </div>
                <div id="buy-all-btn" onclick="checkMoney()">
                    <p>Buy all</p>
                </div>
            </div>
        </div>
    `;
    initTotalPrice()
}
initWrapper()

function initCartTemplate() {
    // Transaction Dates
    let strTransactionDates = '';

    for (let i = USER.cart.item.length - 1; i >= 0; i--) {
        if (USER.cart.item[i].onDate != undefined || USER.cart.item[i].onDate != null) {
            if (i == USER.cart.item.length - 1) {
                strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i].onDate}">
                    </div>
                </div>
                `;
                console.log('transaction added');
            }

            if (i >= 1) {
                if (USER.cart.item[i].onDate != USER.cart.item[i - 1].onDate) {
                    strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i - 1].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i - 1].onDate}">
                    </div>
                </div>
                `;
                    console.log('transaction added');
                }
            }
        }
    }
    document.getElementById('transactions').innerHTML = strTransactionDates;
}
initCartTemplate()

function initDevices() {
    for (let i = USER.cart.item.length - 1; i >= 0; i--) {
        if (USER.cart.item[i].onDate != undefined || USER.cart.item[i].onDate != null) {
            document.getElementById(`on-${USER.cart.item[i].onDate}`).innerHTML += `
            <div class="transactionBox" id="transaction-${i}" onclick="removeFromCart(${i})">
                <div>
                    <p>${USER.cart.item[i].name}</p>
                </div>
                <div>
                    <p>${USER.cart.item[i].price} €</p>
                </div>
                <div class="transactionBoxImg">
                    <img src="../img/util/trWhTr70.png" alt="Transparent Go Around">
                </div>
            </div>`
        }
    }
}
initDevices()

function removeFromCart(docId) {
    document.getElementById(`transaction-${docId}`).style.left = '-100vw';
    USER.cart.item.splice(docId, 1);
    localStorage['acc-cart'] = JSON.stringify(USER.cart)
    console.log(localStorage['acc-cart']);

    setTimeout(() => {
        document.getElementById(`transaction-${docId}`).outerHTML = '';
        if (getTotalPrice() == 0) {
            document.getElementById('transactions').innerHTML = '';
        }
    }, 2100)

    initTotalPrice()
}

function getTotalPrice() {
    let temp = 0;
    if (!USER.cart.item || USER.cart.item[0].onDate == undefined || USER.cart.item[0].onDate == null) {
        return null;
    }
    for (let i = 0; i < USER.cart.item.length; i++) {
        temp += USER.cart.item[i].price
    }
    return temp;
}

function initTotalPrice() {
    document.getElementsByClassName('monetaryText').item(0).innerHTML = `<p>${getTotalPrice() <= 0 || getTotalPrice() == null ? 'Nothing to buy...' : `${getTotalPrice().toFixed(2)} €`}</p>`
}

function checkMoney() {
    let temp = 0;
    for (let i = 0; i < USER.cart.item.length; i++) {
        temp += USER.cart.item[i].price
    }
    console.log(temp);
    
    if (USER.money - temp < 0) {
        showWarningMessage('Not enough funds!')
        return;
    }

    if (temp <= 0 || temp == null) {
        showWarningMessage('No products to buy!')
        return;
    }

    USER.money -= temp;
    localStorage['acc-money'] = JSON.stringify(USER.money)
    console.log(USER.money);

    localStorage['acc-cart'] = JSON.stringify(USER.cart)
    console.log(localStorage['acc-cart']);

    toPaymentPage()
}

function addMoney(value) {
    USER.money += value;
    localStorage['acc-money'] = JSON.stringify(USER.money)

    document.getElementById('user-money').innerHTML = `<p>${`${USER.money} €`}</p>`;
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
    document.getElementById('headerBoxImg').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr.png" alt="Transparent Go Around">`

    for (let i = 0; i < document.getElementsByClassName('transactionBoxImg').length; i++) {
        document.getElementsByClassName('transactionBoxImg').item(i).innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'trBlTr70' : 'trWhTr70'}.png" alt="Transparent Go Around">`
        document.getElementsByClassName('transactionBoxImg').item(i).style.backgroundImage = `url(../img/util/Shadow${JSON.parse(localStorage['acc-darkMode']) == true ? 'White' : 'Black'}Tr.png)`
    }

    document.getElementById('footerBorder').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'blTrBl' : 'whTrWh'}.png" alt="gradient">`
    document.getElementById('footerBorder').style.backgroundImage = `url(../img/util/Shadow${JSON.parse(localStorage['acc-darkMode']) == true ? 'White' : 'Black'}Tr.png)`
}
changeNavLogoCart()

function toAccountOverview() {
    window.location.href = `./account/account-overview.html`;
}

function toPaymentPage() {
    window.location.href = `./shop-payment.html`;
}

function toLogIn() {
    window.location.href = `./account/account-login.html`;
}

function toSignUp() {
    window.location.href = `./account/account-signup.html`;
}