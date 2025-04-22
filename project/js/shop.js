let shopDropdown = 0;

let PRICE= {
    min: document.getElementById('min-price').value,
    max: document.getElementById('max-price').value
}

let isFavourite = {
    monitors: false
};

function initItemBoxes() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        isFavourite.monitors[i] = false;
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
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${i})" onmouseenter="changeFavBtnColourYellow(${i})" onmouseleave="changeFavBtnColourGray(${i})">
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;
}
initItemBoxes();

function initNavBtnsShop() {
    // Dropdown: https://www.w3schools.com/howto/howto_css_dropdown.asp
    document.getElementById('nav-btns').innerHTML = `
                <div class="dropdown" onmouseenter="swapToWhiteNavIcon('shopIcon')" onmouseleave="swapToNormalNavIcon('shopIcon')">
                    <div class="dropbtn">
                        <div id="shopIcon">
                            <img src="/img/icons/shopIcon.png" alt="shop icon">
                        </div>
                        <p>Shop</p>
                    </div>
                    <div class="dropdown-content">
                        <a href="/pages/shop-laptops.html">Laptops</a>
                        <a href="/pages/shop-phones.html">Phones</a>
                        <a href="/pages/shop-monitors.html">Monitors</a>
                    </div>
                </div>
                <a href="/pages/partners.html" onmouseenter="swapToWhiteNavIcon('partners')" onmouseleave="swapToNormalNavIcon('partners')">
                    <div id="partners">
                        <img id="nav-account-biggerImg" src="/img/icons/partners.png" alt="partners icon">
                    </div>
                    <p>Partners</p>
                </a>
                <a href="/pages/account/account-overview.html" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="/img/icons/check.png" alt="check icon">
                    </div>
                    <p>Account</p>
                </a>`;
}
initNavBtnsShop();

function getShopDropdownValue() {
    shopDropdown = document.getElementById('shops-dropdown').value;
    window.location.href = `/pages/shop-${shopDropdown}.html`;
}

function checkMinValue() {
    if (PRICE.min < 0) {
        PRICE.min = 0;
    }
    if (PRICE.min > PRICE.max) {
        PRICE.max = PRICE.min;
    }
}

function checkMaxValue() {
    if (PRICE.max < 0) {
        PRICE.max = 0;
    }
    if (PRICE.max < PRICE.min) {
        PRICE.min = PRICE.max;
    }
}

function changeFavBtnColourYellow(index) {
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.backgroundColor = 'var(--yellow)'
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.transform = `scale(1.35)`
}
function changeFavBtnColourGray(index) {
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.backgroundColor = 'transparent'
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.transform = `scale(1)`
}

-

function isInPriceArea(item) {
    if (item.device.price >= PRICE.min && item.device.price <= PRICE.max) {

    }
}

// If displayRes == 1200: WUXGA
// 1280 = WUXGA+