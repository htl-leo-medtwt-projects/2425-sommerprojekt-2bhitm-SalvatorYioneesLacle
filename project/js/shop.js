// Audio
let longPop = new Audio('../audio/long-pop.wav');
let longPopLeave = new Audio('../audio/long-pop-leave.wav');

let shopDropdown = 0;

let MIN = {
    price: document.getElementById('min-price'),
    displaySize: document.getElementById('min-displaySize')
}

let MAX = {
    price: document.getElementById('max-price'),
    displaySize: document.getElementById('max-displaySize')
}

function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    let str = `
            <a id="nav-logo" href="../index.html">
                <img src="../img/logos/logo.png" alt="ExpertShop logo">
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
                    <img src="${USER.pfp.split(':')[0].includes('http') ? USER.pfp : '../' + USER.pfp}" alt="Profile picture of: ${USER.username}">`
        }
            </div>
            
            <div id="nav-items" onclick="toCartPage()">
                <img src="../img/icons/shopping-cart.png" alt="shopping cart">
            </div>
    `;
    document.getElementsByTagName('nav').item(0).innerHTML = str;
}
initNavigationbar()

function initFooter() {
    let str = `
        <div id="footerBorder">
            <img src="../img/util/WhTrWh.png" alt="gradient">
        </div>
        
        <div id="footerContent">
        
        </div>
    `;
    document.getElementsByTagName('footer').item(0).innerHTML = str;
}
initFooter()

function swapToWhiteNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-partners-biggerImg"' : ''} src="../img/icons/${icon}_white.png" alt="${icon}">`
}

function swapToNormalNavIcon(icon) {
    document.getElementById(icon).innerHTML = `<img ${icon == 'partners' ? 'id="nav-partners-biggerImg"' : ''} src="../img/icons/${icon}.png" alt="${icon}">`
}

function initNavBtnsShop() {
    // Dropdown: https://www.w3schools.com/howto/howto_css_dropdown.asp
    document.getElementById('nav-btns').innerHTML = `
                <div class="dropdown" onmouseenter="swapToWhiteNavIcon('shopIcon')" onmouseleave="swapToNormalNavIcon('shopIcon')">
                    <div class="dropbtn">
                        <div id="shopIcon">
                            <img src="../img/icons/shopIcon.png" alt="shop icon">
                        </div>
                        <p>Shop</p>
                    </div>
                    <div class="dropdown-content">
                        <a href="./shop-laptops.html">Laptops</a>
                        <a href="./shop-phones.html">Phones</a>
                        <a href="./shop-monitors.html">Monitors</a>
                    </div>
                </div>
                <a href="./partners.html" onmouseenter="swapToWhiteNavIcon('partners')" onmouseleave="swapToNormalNavIcon('partners')">
                    <div id="partners">
                        <img id="nav-partners-biggerImg" src="../img/icons/partners.png" alt="partners icon">
                    </div>
                    <p>Partners</p>
                </a>
                <a href="${USER.logInStatus ? './account/account-overview.html' : './account/account-login.html'}" onmouseenter="swapToWhiteNavIcon('check')" onmouseleave="swapToNormalNavIcon('check')">
                    <div id="check">
                        <img src="../img/icons/check.png" alt="check icon">
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
                    <input type="number" name="min-price" id="min-price"> €
                </div>
                <div class="filterText">
                    <p>Min</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="number" name="max-price" id="max-price"> €
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
                    <input type="range" name="min-displaySize" id="min-displaySize" min="0" max="40" step="0.1" oninput="outputMinDispSize()">
                </div>
                <div class="filterText" id="min-displaySize-value">
                    <p>Min: ${0}</p>
                </div> 
            </div>
            <div>
                <div>
                    <input type="range" name="max-displaySize" id="max-displaySize" min="0" max="40" step="0.1" oninput="outputMaxDispSize()">
                </div>
                <div class="filterText" id="max-displaySize-value">
                    <p>Max: ${0}</p>
                </div>
            </div>
        </div>

        <div id="filter-saveBtn" onclick="checkFilterSettings()">
            <p>Save</p>
        </div>
    `;

    MIN.price = document.getElementById('min-price');
    MAX.price = document.getElementById('max-price');
    MAX.displaySize = document.getElementById('max-displaySize');
    MIN.displaySize = document.getElementById('min-displaySize');
}
initFilter()

function getShopDropdownValue() {
    shopDropdown = document.getElementById('shops-dropdown').value;
    window.location.href = `./shop-${shopDropdown}.html`;
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

function getHighestPrice(deviceType) {
    let price = 0;
    for (let i = 0; i < ITEMS.type[deviceType].device.length; i++) {
        if (ITEMS.type[deviceType].device[i].price > price) {
            price = ITEMS.type[deviceType].device[i].price
            MAX.price.value = price
        }
    }
    console.log(MAX.price.value);
    return price;
}

function getLowestPrice(deviceType) {
    let price = 99999999;
    for (let i = 0; i < ITEMS.type[deviceType].device.length; i++) {
        if (ITEMS.type[deviceType].device[i].price < price) {
            price = ITEMS.type[deviceType].device[i].price
            MIN.price.value = price
        }
    }
    console.log(MIN.price.value);
    return price;
}

function getHighestDisplaySize(deviceType) {
    let displaySize = 0;
    for (let i = 0; i < ITEMS.type[deviceType].device.length; i++) {
        if (ITEMS.type[deviceType].device[i].displaySize > displaySize) {
            displaySize = ITEMS.type[deviceType].device[i].displaySize

            MIN.displaySize.max = displaySize;
            MAX.displaySize.max = displaySize;
            MAX.displaySize.value = displaySize
        }
    }
    console.log(MAX.displaySize.value);
    outputMaxDispSize()
    return displaySize;
}

function getLowestDisplaySize(deviceType) {
    let displaySize = 99999999;
    for (let i = 0; i < ITEMS.type[deviceType].device.length; i++) {
        if (ITEMS.type[deviceType].device[i].displaySize < displaySize) {
            displaySize = ITEMS.type[deviceType].device[i].displaySize

            MIN.displaySize.min = displaySize;
            MAX.displaySize.min = displaySize;
            MIN.displaySize.value = displaySize
        }
    }

    console.log(MIN.displaySize.value);
    outputMinDispSize()
    return displaySize;
}

function checkFilterSettings() {
    checkMinPrice()
    checkMaxPrice()

    outputMinDispSize()
    outputMaxDispSize()

    initItemBoxes()
    initAnimations()
}


function isInPriceArea(deviceType, index) {
    if (ITEMS.type[deviceType].device[index].price >= MIN.price.value && ITEMS.type[deviceType].device[index].price <= MAX.price.value) {
        return true;
    }
    return false;
}

function isInDispSizeArea(deviceType, index) {
    if (ITEMS.type[deviceType].device[index].displaySize >= MIN.displaySize.value && ITEMS.type[deviceType].device[index].displaySize <= MAX.displaySize.value) {
        return true;
    }
    return false;
}

function checkMinPrice() {
    if (MIN.price.value < 0) {
        MIN.price.value = 0;
    }
    if (MIN.price.value > MAX.price.value) {
        // MAX.price.value = MIN.price.value;
    }
    console.log(MIN.price.value);
}

function checkMaxPrice() {
    if (MAX.price.value < 0) {
        MAX.price.value = 0;
    }
    if (MAX.price.value < MIN.price.value) {
        // MIN.price.value = MAX.price.value;
    }
    console.log(MAX.price.value);
}

function outputMinDispSize() {
    document.getElementById('min-displaySize-value').innerHTML = `<p>Min: ${MIN.displaySize.value}"</p>`
    console.log("E");
}

function outputMaxDispSize() {
    document.getElementById('max-displaySize-value').innerHTML = `<p>Max: ${MAX.displaySize.value}"</p>`
    console.log("F");
}

function changeFavBtnColourYellow(index) {
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.backgroundColor = 'var(--yellow)'
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.transform = `scale(1.35)`
}

function changeFavBtnColourGray(index) {
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.backgroundColor = 'transparent'
    document.getElementsByClassName('itemFavouriteBtnBackground').item(index).style.transform = `scale(1)`
}

function addToCart(deviceType, index) {
    if (!USER.logInStatus) {
        showWarningMessage('Log in to add to cart!')
        return;
    }

    let device = ITEMS.type[deviceType].device[index];
    // let itemType = ITEMS.type[deviceType];

    if (!device.isInCart) {
        device.isInCart = !device.isInCart;
        localStorage['acc-isInCart'] = JSON.stringify(device.isInCart)

        // Check if localStorage value is null
        if (localStorage['acc-cart'] != null) {
            USER.cart = JSON.parse(localStorage['acc-cart']);
        }
        if (USER.cart.item[0].onDate == null) {
            USER.cart.item.splice(0, 1);
        }
        USER.cart.item.push(device);

        let date = new Date()
        USER.cart.item[USER.cart.item.length - 1].onDate = `${date.getUTCDate()}-${date.getUTCMonth() + 1 /* Remove +1 when it works again */}-${date.getUTCFullYear()}`

        // Assign new cart to localStorage
        localStorage['acc-cart'] = JSON.stringify(USER.cart);
        console.log(USER.cart.item);
        console.log(USER.cart.item[USER.cart.item.length - 1].onDate);

        document.getElementsByClassName('toCartBtn').item(device.id).innerHTML = `<img class="toCartBtnImg" src="../img/icons/shopIcon-filled.png" alt="shop icon">`
        document.getElementsByClassName('toCartBtnImg').item(device.id).style.filter = 'grayscale(0)'
    } else {
        for (let i = 0; i < USER.cart.item.length; i++) {
            if (USER.cart.item[i] == device) {
                device.isInCart = !device.isInCart;

                USER.cart.item.splice(i, 1);
                localStorage['acc-cart'] = JSON.stringify(USER.cart)
                console.log(USER.cart.item);

                document.getElementsByClassName('toCartBtn').item(device.id).innerHTML = `<img class="toCartBtnImg" src="../img/icons/shopIcon.png" alt="shop icon">`
                document.getElementsByClassName('toCartBtnImg').item(device.id).style.filter = 'grayscale(1)'
                return true;
            }
        }
    }
}

function inCartStatus() {
    if (!itemType.isInCart) {
        document.getElementsByClassName('toCartBtn').item(device.id).innerHTML = `<img class="toCartBtnImg" src="../img/icons/shopIcon-filled.png" alt="shop icon">`
        document.getElementsByClassName('toCartBtnImg').item(device.id).style.filter = 'grayscale(0)'
    } else {
        document.getElementsByClassName('toCartBtn').item(device.id).innerHTML = `<img class="toCartBtnImg" src="../img/icons/shopIcon.png" alt="shop icon">`
        document.getElementsByClassName('toCartBtnImg').item(device.id).style.filter = 'grayscale(1)'
    }
    itemType.isInCart = !itemType.isInCart;
}

function toLogIn() {
    window.location.href = `./account/account-login.html`;
}

function toSignUp() {
    window.location.href = `./account/account-signup.html`;
}

function toCartPage() {
    window.location.href = `./cart.html`;
}

function toPaymentPage() {
    window.location.href = `./shop-payment.html`;
}

function toSignUpSetupScreen() {
    window.location.href = `./account/account-signup-setup.html`;
}

function toLogOutScreen() {
    window.location.href = `./account/account-signout-done.html`;
}

function toAccountDeleteScreen() {
    window.location.href = `./account/account-delete.html`;
}

function toAccountDeleteDone() {
    window.location.href = `./account/account-delete-done.html`;
}

function toAccountOverview() {
    window.location.href = `./account/account-overview.html`;
}

function toHomepage() {
    window.location.href = `../index.html`;
}


// If displayRes == 1200: WUXGA
// 1280 = WUXGA+

// REGISTER ANIMATION
function generateScrollAnimation(i) {
    let element = sections[i];

    /* SET START KEY FRAME */
    gsap.set(element, {
        y: '20%',
        opacity: 0
    });

    /* SET END KEY FRAME */
    gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.1,
        scrollTrigger: {
            trigger: element,
            start: '0% 85%',  /* 'Ankerpunkt Offset' */
        }
    });
}