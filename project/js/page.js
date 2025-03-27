
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
                <div id="nav-logo">
                    <img src="./img/logo.png" alt="ExpertShop logo">
                </div>
                <div id="nav-btns">
                    <div>
                        <img src="./img/shopIcon.png" alt="shop icon">
                        <p>Shop</p>
                    </div>
                    <div>
                        <img src="./img/partners.png" alt="partners icon">
                        <p>Partners</p>
                    </div>
                    <div>
                        <img src="./img/check.png" alt="account icon">
                        <p>Account</p>
                    </div>
                </div>
                <div id="nav-account">
                    <!-- <div> -->
                    <p>Account Name 0123</p>
                    <img src="./img/accountIcon.png" alt="account icon">
                    <!-- </div> -->
                </div>
                <div id="nav-items">
                    <img src="./img/shopping-cart.png" alt="shopping cart">
                </div>
    `;
    document.getElementsByTagName('nav').item(0).innerHTML = str;
}
// initNavigationbar()

function initAccountState() {

}

function name() {
    
}