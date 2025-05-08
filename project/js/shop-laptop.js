/// <reference path="../data/laptops.js"/>

console.log(laptops);
let ITEMS = {
    device: [null],
    isFavourite: [false],
    isFittingFilter: [false],
    isDetailsPressed: [false],
    id: 0
}

// Laptop name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let str = '';
    for (let i = 0; i < laptops.length; i++) {
        ITEMS.device[i] = laptops[i];
        ITEMS.id = i;
        console.log(ITEMS.id);
        ITEMS.isFavourite[i] = false;
        ITEMS.isDetailsPressed[i] = false;

        str += `
        <div class="itemBox scrollReveal">
            <div class="itemBoxFront">
                ${initItemBoxFront(i)}
            </div>

            <div class="itemDetailsBtn" onclick="showDeviceDetails(${ITEMS.id})">
                <p>+</p>
            </div>

            <div class="itemFavouriteBtn">
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${ITEMS.id})" onmouseenter="changeFavBtnColourYellow(${ITEMS.id})" onmouseleave="changeFavBtnColourGray(${ITEMS.id})">
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;

    for (let i = 0; i < laptops.length; i++) {
        initItemName(i)
    }
}
initItemBoxes();

function initItemBoxFront(index) {
    return `
        <div class="itemBoxFrontGrid">
            <div class="itemImg">
                <img src="${ITEMS.device[index].img}" alt="${ITEMS.device[index].name}">
            </div>

            <div class="itemStats">
                <h2>${ITEMS.device[index].name}</h2>
            </div>
        </div>`;
}

function initItemName(index) {
    let str = '';
    for (let i = 0; i < ITEMS.device[index].name.split(' ').length; i++) {
        if (ITEMS.device[index].name.split(' ')[i].at(0) == '('
            && ITEMS.device[index].name.split(' ')[i].at(ITEMS.device[index].name.split(' ')[i].length - 1) == ')') {
            console.log('EEEEEEEE EEEEEEEE');

            let temp = `<smol>${ITEMS.device[index].name.split(' ')[i]}</smol>`
            ITEMS.device[index].name.split(' ')[i].innerHTML = temp;;
        }
        str += ITEMS.device[index].name.split(' ')[i] + ' '
    }
    console.log(str);
}

function showDeviceDetails(index) {
    ITEMS.isDetailsPressed[index] = !ITEMS.isDetailsPressed[index]
    let str = `
        <div class="itemDetails">
            <div class="itemDetailsHeader">
                <h1>${ITEMS.device[index].name}</h1>
            </div>
            <div>
                <p>OS: ${ITEMS.device[index].os}</p>
                <p>Storage: ${ITEMS.device[index].rom} GB</p>
                <p>RAM: ${ITEMS.device[index].ram} GB</p>
                <p>CPU: ${ITEMS.device[index].cpu}</p>
            </div>
            <div class="itemDetailsFooter">
                <p>${ITEMS.device[index].price} €</p>
            </div>
        </div> 
    `;
    if (ITEMS.isDetailsPressed[index]) {
        document.getElementsByClassName('itemBoxFront').item(index).innerHTML = str
        document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'none'
    } else {
        document.getElementsByClassName('itemBoxFront').item(index).innerHTML = initItemBoxFront(index)
        document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'block'
    }

    console.log(ITEMS.isDetailsPressed[index]);
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

function changeFavBtnSaved(index) {
    ITEMS.isFavourite[index] = !ITEMS.isFavourite[index]
    console.log(ITEMS.isFavourite);

    if (ITEMS.isFavourite[index]) {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
    } else {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
    }
}

// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

// SHOW CONTENT
window.onload = () => {
    document.querySelector('body').style.opacity = 1;
}

// ITERATE ALL ELEMENTS
let sections = document.querySelectorAll('.scrollReveal');
for (let i = 0; i < sections.length; i++) {
    generateScrollAnimation(i);
}

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
            start: '0% 75%',  /* 'Ankerpunkt Offset' */
        }
    });
}
