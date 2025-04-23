
// Audio
let longPop = new Audio('/audio/long-pop.wav');
let longPopLeave = new Audio('/audio/long-pop-leave.wav');

let USER = {
    username: 'E',
    money: 154,
    isSignedIn: false
}

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
                <div onclick="toSignUp()">
                    <p>Sign Up</p>
                </div>

                <div onclick="toLogIn()">
                    <p>Log in</p>
                </div>

               <!-- <p>Account Name 0123</p>
                <img src="/img/icons/anonymous.jpg" alt="account icon"> -->
            </div>
            
            <div id="nav-items">
        3        <img src="/img/icons/shopping-cart.png" alt="shopping cart">
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