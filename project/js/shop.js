let shopDropdown = 0;

let PRICE = {
    min: document.getElementById('min-price'),
    max: document.getElementById('max-price')
}

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
                        <img id="nav-partners-biggerImg" src="/img/icons/partners.png" alt="partners icon">
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
            <div class="filterHeaders">
                <h2>Price</h2>
            </div>
            <div>
                <div>
                    <input type="number" name="min-price" id="min-price" oninput="checkMinPrice()"> €
                </div>
                <div class="filterText">
                    <p>Min</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="number" name="max-price" id="max-price" oninput="checkMaxPrice()"> €
                </div>
                <div class="filterText">
                    <p>Max</p>
                </div>
            </div>
        </div>

        <div id="displaySizeFilter">
            <div class="filterHeaders">
                <h2>Display size</h2>
            </div>
            <div>
                <div>
                    <input type="range" name="min-displaySize" id="min-displaySize" min="0" max="40" step="0.1" oninput="checkMinValue()">
                </div>
                <div class="filterText">
                    <p>Min: ${0}</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="range" name="max-displaySize" id="max-displaySize" min="0" max="40" step="0.1" oninput="checkMaxValue()">
                </div>
                <div class="filterText">
                    <p>Max: ${0}</p>
                </div>
            </div>
        </div>

        <div id="filter-saveBtn" onclick="checkFilterSettings()">
            <p>Save</p>
        </div>
    `;
    PRICE.min = document.getElementById('min-price');
    PRICE.max = document.getElementById('max-price');
}
initFilter()

function getShopDropdownValue() {
    shopDropdown = document.getElementById('shops-dropdown').value;
    window.location.href = `/pages/shop-${shopDropdown}.html`;
}

function changeFavBtnSaved(deviceType, index) {
    if (USER.logInStatus) {
        ITEMS.type[deviceType].isFavourite[index] = !ITEMS.type[deviceType].isFavourite[index]

        if (ITEMS.type[deviceType].isFavourite[index]) {
            FAVOURITES.item.push(ITEMS.type[deviceType].device[index]);
        } else {
            FAVOURITES.item.splice(FAVOURITES.item.indexOf(ITEMS.type[deviceType].device[index]), 1);
        }

        console.log(ITEMS.type[deviceType].isFavourite, FAVOURITES.item);

        if (ITEMS.type[deviceType].isFavourite[index]) {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
        } else {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
        }
    } else {
        showWarningMessage('Log in to save!')
    }
}

function checkFilterSettings() {
    checkMinPrice()
    checkMaxPrice()
}

function checkMinPrice() {
    if (PRICE.min.value < 0 || PRICE.min.value == null) {
        PRICE.min.value = 0;
    }
    if (PRICE.min.value > PRICE.max.value) {
        PRICE.max.value = PRICE.min.value;
    }
}

function checkMaxPrice() {
    if (PRICE.max.value < 0 || PRICE.max.value == null) {
        PRICE.max.value = 0;
    }
    if (PRICE.max.value < PRICE.min.value) {
        PRICE.min.value = PRICE.max.value;
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

function isInPriceArea(item) {
    if (item.device.price >= PRICE.min && item.device.price <= PRICE.max) {

    }
}

function addToCart(deviceType, index) {
    if (USER.logInStatus) {
        localStorage['acc-cart'] != null ? USER.cart = JSON.parse(localStorage['acc-cart']) : USER.cart;
        USER.cart.item.push(ITEMS.type[deviceType].device[index]);
        localStorage['acc-cart'] = JSON.stringify(USER.cart);
        console.log(USER.cart);
    } else {
        showWarningMessage('Log in to add to cart!')
    }
}

function removeFromCart(deviceType, index) {
    for (let i = 0; i < USER.cart.item.length; i++) {
        if (USER.cart.item[i] == ITEMS.type[deviceType].device[index]) {
            USER.cart.item.splice(i, 1);
            localStorage['acc-cart'] = JSON.stringify(USER.cart)
            console.log(USER.cart);
            return true;
        }
    }
}

// If displayRes == 1200: WUXGA
// 1280 = WUXGA+