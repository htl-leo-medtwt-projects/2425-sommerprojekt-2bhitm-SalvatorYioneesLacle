let shopDropdown = 0;

let PRICE= {
    min: document.getElementById('min-price'),
    max: document.getElementById('max-price')
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
                <a href="${USER.logInStatus ? '/pages/account/account-overview.html' : '/pages/account/account-login.html'}" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="/img/icons/check.png" alt="check icon">
                    </div>
                    <p>Account</p>
                </a>`;
}
initNavBtnsShop();

function initFilter() {
    document.getElementById('filterBox').innerHTML = `
        <div id="priceFilter">
            <div>
                <div>
                    <input type="number" name="min-price" id="min-price" oninput="checkMinPrice()"> €
                </div>
                <div class="filterText">
                    <p>Minimum price</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="number" name="max-price" id="max-price" oninput="checkMaxPrice()"> €
                </div>
                <div class="filterText">
                    <p>Maximum price</p>
                </div>
            </div>
        </div>

        <div id="displaySizeFilter">
            <div>
                <div>
                    <input type="range" name="min-displaySize" id="min-displaySize" step="0.1" oninput="checkMinValue()">
                </div>
                <div class="filterText">
                    <p>Min display size</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="range" name="max-displaySize" id="max-displaySize" step="0.1" oninput="checkMaxValue()">
                </div>
                <div class="filterText">
                    <p>Max display size</p>
                </div>
            </div>
        </div>
    `;
}
initFilter()

function getShopDropdownValue() {
    shopDropdown = document.getElementById('shops-dropdown').value;
    window.location.href = `/pages/shop-${shopDropdown}.html`;
}

function checkMinPrice() {
    if (PRICE.min.value < 0) {
        PRICE.min.value = 0;
    }
    if (PRICE.min.value > PRICE.max.value) {
        PRICE.max.value = PRICE.min.value;
    }
}

function checkMaxPrice() {
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