function initLaptops() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += `
        <div class="itemBox">
            <div class="itemImg">
                <img src="/img/phones/phone.png" alt="phone">
            </div>

            <div class="itemStats">
                <h2>Samsung</h2>
            </div>

            <div class="itemDetailsBtn">
                <p>+</p>
            </div>

            <div class="itemFavouriteBtn">
                <p></p>
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;
}
initLaptops();

function initNavBtnsShop() {
    document.getElementById('nav-btns').innerHTML = `
                <a href="#btnDiv" onmouseenter="swapToWhiteNavIcon('shopIcon')" onmouseleave="swapToNormalNavIcon('shopIcon')">
                    <div id="shopIcon">
                        <img src="/img/icons/shopIcon.png" alt="shop icon">
                    </div>
                    <p>Shop</p>
                </a>
                <a href="/pages/partners.html" onmouseenter="swapToWhiteNavIcon('partners')" onmouseleave="swapToNormalNavIcon('partners')">
                    <div id="partners">
                        <img src="/img/icons/partners.png" alt="partners icon">
                    </div>
                    <p>Partners</p>
                </a>
                <a href="/pages/account-main.html" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="/img/icons/check.png" alt="check icon">
                    </div>
                    <p>Account</p>
                </a>`;
}
initNavBtnsShop()

function checkMinValue() {
    if (document.getElementById('min-price').value < 0) {
        document.getElementById('min-price').value = 0;
    }

    if (document.getElementById('min-price').value > document.getElementById('max-price').value) {
        document.getElementById('min-price').value = document.getElementById('max-price').value;
    }
}

function checkMaxValue() {
    if (document.getElementById('max-price').value < 0) {
        document.getElementById('max-price').value = 0;
    }

    if (document.getElementById('max-price').value < document.getElementById('min-price').value) {
        document.getElementById('max-price').value = document.getElementById('min-price').value;
    }
}