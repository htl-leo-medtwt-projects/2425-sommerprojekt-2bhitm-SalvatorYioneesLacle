


// type 0: Laptops
// type 1: Phones
// type 2: Monitors

const CV = document.querySelector(':root');

// All devices in one varible
let ITEMS = {
    type: [{
        device: [],
        isFavourite: [false],
        isFittingFilter: [false],
        isDetailsPressed: [false],
        isInCart: [false],
        id: 0
    },
    {
        device: [],
        isFavourite: [false],
        isFittingFilter: [false],
        isDetailsPressed: [false],
        isInCart: [false],
        id: 0
    },
    {
        device: [],
        isFavourite: [false],
        isFittingFilter: [false],
        isDetailsPressed: [false],
        isInCart: [false],
        id: 0
    }]
}

// onclick --> add to CART.item, save the date
let CART = { item: [{ onDate: null }] }

// onclick --> add to TRANSACTIONS.item, save the date                       ...or copy from CART
let TRANSACTIONS = { item: [{ onDate: null }] }

// onclick --> add to FAVOURITES.item
let FAVOURITES = { item: [] }

let USER = {
    username: localStorage['acc-username'] || 'Guest',
    email: localStorage['acc-email'] || 'user.mail@gmail.com',
    pw: localStorage['acc-pw'] || 'password',
    pfp: localStorage['acc-pfp'] || 'https://rewards.bing.com/rewardscdn/images/rewards.png',
    money: JSON.parse(localStorage['acc-money'] ?? (Math.random() * 10_000).toFixed(2)),
    cart: localStorage['acc-cart'] != null ? JSON.parse(localStorage['acc-cart']) : CART,
    transactions: localStorage['acc-transactions'] != null ? JSON.parse(localStorage['acc-transactions']) : TRANSACTIONS,
    favourites: localStorage['acc-favourites'] != null ? JSON.parse(localStorage['acc-favourites']) : FAVOURITES,
    logInStatus: localStorage['acc-logInStatus'] == 'false' || localStorage['acc-logInStatus'] == null ? false : true,
    darkMode: localStorage['acc-darkMode'] != null ? localStorage['acc-darkMode'] : false
}

let WARNING = {
    count: 0
}

function initAccountState() {
    localStorage['acc-username'] = USER.username
    localStorage['acc-email'] = USER.email
    localStorage['acc-pw'] = USER.pw
    localStorage['acc-pfp'] = USER.pfp
    localStorage['acc-money'] = JSON.stringify(USER.money)
    localStorage['acc-cart'] = JSON.stringify(USER.cart)
    localStorage['acc-transactions'] = JSON.stringify(USER.transactions)
    localStorage['acc-isInCart'] = JSON.stringify([[false]])
    localStorage['acc-favourites'] = JSON.stringify(USER.favourites)
    localStorage['acc-logInStatus'] = JSON.stringify(USER.logInStatus)
    localStorage['acc-darkMode'] = USER.darkMode
}
initAccountState()

function playLongPop() {
    longPop.currentTime = 0
    longPop.play()
}

function playLongPopLeave() {
    longPopLeave.currentTime = 0
    longPopLeave.play()
}

function swapToWhiteNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-partners-biggerImg"' : ''} src="./img/icons/${icon}_white.png" alt="${icon}">`
}

function swapToNormalNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-partners-biggerImg"' : ''} src="./img/icons/${icon}.png" alt="${icon}">`
}

function showWarningMessage(msg) {
    let timeout = setTimeout(removeWarning, 5000);

    document.getElementsByTagName('warning').item(0).innerHTML += `
        <div class="warning warningAnim" id="warning-${WARNING.count}">
            <div class="warningMessage">
                <p>${msg}</p>
            </div>
            <div class="warningCancel" onclick="warningCancelled(${timeout}), removeWarning()">
                <div>
                    <p>X</p>
                </div>
            </div>
        </div>
    `;

    let box = document.querySelector(`#warning-${WARNING.count}`);
    document.getElementById(`warning-${WARNING.count}`).style.animationDirection = 'normal'
    document.getElementById(`warning-${WARNING.count}`).style.top += `calc(${WARNING.count} * 5em)`

    box.classList.remove('warningAnim');
    box.offsetHeight;
    box.classList.add('warningAnim');

    WARNING.count++;
    // window.open('../../');
    console.log("Warning pop-ups: " + WARNING.count);

}

function warningCancelled(t) {
    clearTimeout(t)
    removeWarning();
    return true;
}

function removeWarning() {
    WARNING.count--;

    let box = document.querySelector(`#warning-${WARNING.count}`);
    document.getElementById(`warning-${WARNING.count}`).style.animationDirection = 'reverse'

    box.classList.remove('warningAnim');
    box.offsetHeight;
    box.classList.add('warningAnim');
    setTimeout(() => {
        document.getElementById(`warning-${WARNING.count}`).style.display = 'none';
        if (WARNING.count <= 0 || document.getElementById(`warning-${WARNING.count}`) == null) {
            WARNING.count = 0;

            setTimeout(() => {
                document.getElementsByTagName('warning').item(0).innerHTML = '';
                WARNING.count = 0;
                console.log("Warning pop-ups in timeout: " + WARNING.count);
            }, 400)
        }
    }, 400);

    console.log("Warning pop-ups 'after' timeout: " + WARNING.count);
}

function darkMode() {
    // To understand
    // If false, dark mode on
    USER.darkMode = !JSON.parse(localStorage['acc-darkMode'])
    localStorage['acc-darkMode'] = JSON.stringify(USER.darkMode)
    console.log(USER.darkMode, localStorage['acc-darkMode']);

    checkDarkMode()
    changeNavLogoCart()
}

function checkDarkMode() {
    if (JSON.parse(localStorage['acc-darkMode']) == true) {
        CV.style.setProperty('--background', '#262529');
        CV.style.setProperty('--white', '#262529')
        CV.style.setProperty('--white70', '#262529b3')
        CV.style.setProperty('--black', '#ffffff')
        CV.style.setProperty('--lightgray', 'rgb(88,88,88)')
        CV.style.setProperty('--gray', 'rgb(60,60,60)')
        CV.style.setProperty('--darkgray', 'rgb(224,224,224)')
    } else {
        CV.style.setProperty('--background', '#f6f6f6');
        CV.style.setProperty('--white', '#ffffff')
        CV.style.setProperty('--white70', '#ffffffb3')
        CV.style.setProperty('--black', '#171717')
        CV.style.setProperty('--darkgray', 'rgb(88,88,88)')
        CV.style.setProperty('--gray', 'rgb(196,196,196)')
        CV.style.setProperty('--lightgray', 'rgb(224,224,224)')
    }
}
checkDarkMode()

function toLogIn() {
    window.location.href = `./pages/account/account-login.html`;
}

function toSignUp() {
    window.location.href = `./pages/account/account-signup.html`;
}

function toCartPage() {
    window.location.href = `./pages/cart.html`;
}

function toPaymentPage() {
    window.location.href = `./pages/shop-payment.html`;
}

function toSignUpSetupScreen() {
    window.location.href = `./pages/account/account-signup-setup.html`;
}

function toLogOutScreen() {
    window.location.href = `./pages/account/account-signout-done.html`;
}

function toAccountDeleteScreen() {
    window.location.href = `./pages/account/account-delete.html`;
}

function toAccountDeleteDone() {
    window.location.href = `./pages/account/account-delete-done.html`;
}

function toAccountOverview() {
    window.location.href = `./pages/account/account-overview.html`;
}

function toHomepage() {
    window.location.href = `./index.html`;
}

// INIT GSAP SCROLL PLUGIN
// gsap.registerPlugin(ScrollTrigger);

// SHOW CONTENT
window.onload = () => {
    document.querySelector('body').style.opacity = 1;
}

// ITERATE ALL ELEMENTS
let warning = document.querySelectorAll('.warningAnim');
for (let i = 0; i < warning.length; i++) {
    generateWarningMsgAnimation(i);
}

// REGISTER ANIMATION
function generateWarningMsgAnimation(i) {
    let element = warning[i];
    /* SET START KEY FRAME */
    gsap.set(element, {
        y: '-10%',
        opacity: 0
    });

    /* SET END KEY FRAME */
    gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.85,
    });
}

// // INIT GSAP SCROLL PLUGIN
// gsap.registerPlugin(ScrollTrigger);

// // SHOW CONTENT
// window.onload = () => {
//     document.querySelector('body').style.opacity = 1;
// }

// // ITERATE ALL ELEMENTS
// let sections = document.querySelectorAll('.scrollReveal');
// for (let i = 0; i < sections.length; i++) {
//     generateScrollAnimation(i);
// }

// // REGISTER ANIMATION
// function generateScrollAnimation(i) {
//     let element = sections[i];
//     if (i % 2 == 0) {
//         /* SET START KEY FRAME */
//         gsap.set(element, {
//             x: '-100%',
//             y: '-2%',
//             scale: 0.8,
//             opacity: 0
//         });
//     } else {
//         /* SET START KEY FRAME */
//         gsap.set(element, {
//             x: '100%',
//             y: '-2%',
//             scale: 0.8,
//             opacity: 0
//         });
//     }

//     /* SET END KEY FRAME */
//     gsap.to(element, {
//         x: 0,
//         y: 0,
//         scale: 1,
//         opacity: 1,
//         duration: 0.85,
//         scrollTrigger: {
//             trigger: element,
//             start: '10% -500%',  /* 'Ankerpunkt Offset' */
//         }
//     });
// }
