let shopDropdown = 0;
let isFavourite = [false];

function initItemBoxes() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        isFavourite[i] = false;
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
    if (document.getElementById('min-price').value < 0) {
        document.getElementById('min-price').value = 0;
    }
    if (document.getElementById('min-price').value > document.getElementById('max-price').value) {
        document.getElementById('max-price').value = document.getElementById('min-price').value;
    }
}

function checkMaxValue() {
    if (document.getElementById('max-price').value < 0) {
        document.getElementById('max-price').value = 0;
    }
    if (document.getElementById('max-price').value < document.getElementById('min-price').value) {
        document.getElementById('min-price').value = document.getElementById('max-price').value;
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

function changeFavBtnSaved(index) {
    isFavourite[index] = !isFavourite[index] 
    if (isFavourite[index]) {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
    } else {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
    }
}

// If displayRes == 1200: WUXGA
// 1280 = WUXGA+