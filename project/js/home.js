function initNavBtnsHome() {
    document.getElementById('nav-btns').innerHTML = `
                <a href="#btnDiv" onmouseenter="swapToWhiteNavIcon('shopIcon')" onmouseleave="swapToNormalNavIcon('shopIcon')">
                    <div id="shopIcon">
                        <img src="/img/icons/shopIcon.png" alt="shop icon">
                    </div>
                    <p>Shop</p>
                </a>
                <a href="/pages/partners.html" onmouseenter="swapToWhiteNavIcon('partners')" onmouseleave="swapToNormalNavIcon('partners')">
                    <div id="partners">
                        <img id="nav-account-biggerImg" src="/img/icons/partners.png" alt="partners icon">
                    </div>
                    <p>Partners</p>
                </a>
                <a href="${USER.logInStatus ? '/pages/account/account-overview.html' : '/pages/account/account-login.html'}" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="/img/icons/check.png" alt="check icon">
                    </div>
                    <p>Account</p>
                </a>`;
}
initNavBtnsHome();

