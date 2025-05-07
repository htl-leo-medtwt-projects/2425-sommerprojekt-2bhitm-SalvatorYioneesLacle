
// Audio
let longPop = new Audio('/audio/long-pop.wav');
let longPopLeave = new Audio('/audio/long-pop-leave.wav');

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let cart = ''
let favourites = []

let USER = {
    username: localStorage['acc-username'] || 'Max Mustermann',
    email: localStorage['acc-email'] || 'max.mustermann@gmail.com',
    pw: localStorage['acc-pw'] || '1234',
    pfp: localStorage['acc-pfp'] || 'https://rewards.bing.com/rewardscdn/images/rewards.png',
    money: JSON.parse(localStorage['acc-money'] ?? 0),
    // cart: JSON.parse(localStorage['acc-cart'] ?? cart),
    // favourites: JSON.parse(localStorage['acc-favourites'] ?? favourites),
    // logInStatus: JSON.parse(localStorage['acc-logInStatus'] ?? false)
}


// localStorage['acc-username'] = USER.username
// localStorage['acc-email'] = USER.email
// localStorage['acc-pw'] = USER.pw
// localStorage['acc-pfp'] = USER.pfp
// localStorage['acc-money'] = JSON.stringify(USER.money)
// localStorage['acc-cart'] = JSON.stringify(USER.cart)
// localStorage['acc-favourites'] = JSON.stringify(USER.favourites)
// localStorage['acc-logInStatus'] = JSON.stringify(USER.logInStatus)


function playLongPop() {
    longPop.currentTime = 0
    longPop.play()
}

function playLongPopLeave() {
    longPopLeave.currentTime = 0
    longPopLeave.play()
}

function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="/img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon()

function swapToWhiteNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-account-biggerImg"' : ''} src="/img/icons/${icon}_white.png" alt="${icon}">`
}

function swapToNormalNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-account-biggerImg"' : ''} src="/img/icons/${icon}.png" alt="${icon}">`
}

function initNavigationbar() {
    let str = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logos/logo.png" alt="ExpertShop logo">
            </a>
            <div id="nav-btns">
                
            </div>
            <div id="nav-account">
                ${USER.logInStatus == false ? `
                    <div onclick="toSignUp()">
                        <p>Sign Up</p>
                    </div>

                    <div onclick="toLogIn()">
                        <p>Log In</p>
                    </div>` :
            `
                    <p>${USER.username}</p>
                    <img src="${USER.pfp}" alt="${USER.username}">`
        }
            </div>
            
            <div id="nav-items">
                <img src="/img/icons/shopping-cart.png" alt="shopping cart">
            </div>
    `;
    document.getElementsByTagName('nav').item(0).innerHTML = str;
}
initNavigationbar()

function initFooter() {
    let str = `
        <div id="footerBorder">
            <img src="/img/util/WhTrWh.png" alt="gradient">
        </div>
        <div id="footerContent"></div>
    `;
    document.getElementsByTagName('footer').item(0).innerHTML = str;
}
initFooter()

function initAccountState() {

}

function name() {

}

function toLogIn() {
    window.location.href = `/pages/account/account-login.html`
}

function toSignUp() {
    window.location.href = `/pages/account/account-signup.html`;
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
