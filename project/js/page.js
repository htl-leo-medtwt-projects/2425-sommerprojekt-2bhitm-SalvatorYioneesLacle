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

function name(params) {
    
}