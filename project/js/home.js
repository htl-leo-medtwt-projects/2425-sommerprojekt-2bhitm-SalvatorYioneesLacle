
// Audio
let longPop = new Audio('./audio/long-pop.wav');
let longPopLeave = new Audio('./audio/long-pop-leave.wav');

function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="./img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    let str = `
            <a id="nav-logo" href="./index.html">
                <img src="./img/logos/logo${USER.darkMode == true ? '_dark' : ''}.png" alt="ExpertShop logo">
            </a>
            <div id="nav-btns">
                
            </div>
            <div id="nav-account" ${USER.logInStatus ? 'onclick="toAccountOverview()"' : ''}>
                ${USER.logInStatus == false ? `
                    <div onclick="toSignUp()">
                        <p>Sign Up</p>
                    </div>

                    <div onclick="toLogIn()">
                        <p>Log In</p>
                    </div>` : `<p>${USER.username}</p>
                    <img src="${USER.pfp.split(':')[0].includes('http') ? USER.pfp : './' + USER.pfp}" alt="Profile picture of: ${USER.username}">`
        }
            </div>
            
            <div id="nav-items" onclick="toCartPage()">
                <img src="./img/icons/shopping-cart${USER.darkMode == true ? '-white' : ''}.png" alt="shopping cart">
            </div>
    `;
    document.getElementsByTagName('nav').item(0).innerHTML = str;
}
initNavigationbar()

function changeNavLogoCart() {
    document.getElementById('nav-logo').innerHTML = `<img src="./img/logos/logo${USER.darkMode == true ? '_dark' : ''}.png" alt="ExpertShop logo">`;
    document.getElementById('nav-items').innerHTML = `<img src="./img/icons/shopping-cart${USER.darkMode == true ? '-white' : ''}.png" alt="shopping cart">`
}

function initDarkModeBtn() {
    document.getElementsByTagName('darkmode').item(0).innerHTML = `
    <div id="darkMode-wrapper">
        <div id="darkMode-btn" onclick="darkMode()">
            <img src="./img/icons/darkmode_${USER.darkMode == true ? 'on' : 'off'}.png" alt="Dark Mode Icon">
        </div>
    </div>
 `;
}
initDarkModeBtn()

function initFooter() {
    let str = `
        <div id="footerBorder">
            <img src="./img/util/WhTrWh.png" alt="gradient">
        </div>
        
        <div id="footerContent">
        
        </div>
    `;
    document.getElementsByTagName('footer').item(0).innerHTML = str;
}
initFooter()

function initNavBtnsHome() {
    document.getElementById('nav-btns').innerHTML = `
                <a href="#btnDiv" onmouseenter="swapToWhiteNavIcon('shopIcon')" onmouseleave="swapToNormalNavIcon('shopIcon')">
                    <div id="shopIcon">
                        <img src="./img/icons/shopIcon.png" alt="shop icon">
                    </div>
                    <p>Shop</p>
                </a>
                <a href="./pages/partners.html" onmouseenter="swapToWhiteNavIcon('partners')" onmouseleave="swapToNormalNavIcon('partners')">
                    <div id="partners">
                        <img id="nav-partners-biggerImg" src="./img/icons/partners.png" alt="partners icon">
                    </div>
                    <p>Partners</p>
                </a>
                <a href="${USER.logInStatus ? './pages/account/account-overview.html' : './pages/account/account-login.html'}" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="./img/icons/check.png" alt="check icon">
                    </div>
                    <p>Account</p>
                </a>`;
}
initNavBtnsHome();

