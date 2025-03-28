
// Audio
let longPop = new Audio('/audio/long-pop.wav');
let longPopLeave = new Audio('/audio/long-pop-leave.wav');

function playLongPop() {
    longPop.currentTime = 0,
    longPop.play()
}

function playLongPopLeave() {
    longPopLeave.currentTime = 0,
    longPopLeave.play()
}

function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML+= `<link rel="icon" href="/img/logo.png" type="image/x-icon" />`
}
initPageIcon()

function initNavigationbar() {
    let str = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logo.png" alt="ExpertShop logo">
            </a>
            <div id="nav-btns">
                <a href="#btnDiv">
                    <img src="/img/shopIcon.png" alt="shop icon">
                    <p>Shop</p>
                </a>
                <div>
                    <img src="/img/partners.png" alt="partners icon">
                    <p>Partners</p>
                </div>
                <div>
                    <img src="/img/check.png" alt="account icon">
                    <p>Account</p>
                </div>
            </div>
            <div id="nav-account">
                <p>Account Name 0123</p>
                <img src="/img/anonymous.jpg" alt="account icon">
            </div>
            <div id="nav-items">
                <img src="/img/shopping-cart.png" alt="shopping cart">
            </div>
    `;
    document.getElementsByTagName('nav').item(0).innerHTML = str;
}
initNavigationbar()

function initFooter() {
    let str = `
        <div id="footerBorder">
            <img src="/img/WhTrWh.png" alt="gradient">
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