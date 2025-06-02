
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
            
            <div id="nav-items">
                <img src="../img/icons/shopping-cart.png" alt="shopping cart">
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

function initCartTemplate() {
    // Transaction Dates
    let strTransactionDates = '';
    let strTransactionBoxes = '';

    for (let i = USER.cart.item.length - 1; i > 0; i--) {
        if (i == USER.cart.item.length - 1) {
            strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i].onDate}">
                    </div>
                </div>
                `;
        }

        if (USER.cart.item[i].onDate != USER.cart.item[i - 1].onDate) {
            strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i - 1].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i - 1].onDate}">
                    </div>
                </div>
                `;
        }
    }
    document.getElementById('transactions').innerHTML = strTransactionDates;
}
initCartTemplate()

function initDevices() {
    for (let i = USER.cart.item.length - 1; i >= 0; i--) {
        document.getElementById(`on-${USER.cart.item[i].onDate}`).innerHTML += `
            <div class="transactionBox" id="transaction-0">
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
initDevices()

function toPaymentPage() {
    window.location.href = `./shop-payment.html`;
}