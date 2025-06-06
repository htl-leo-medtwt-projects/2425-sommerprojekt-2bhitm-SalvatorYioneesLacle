/// <reference path="../data/phones.js"./>
/// <reference path="../data/details.js"./>

console.log(phones);
console.log(details);

let phoneItems = ITEMS.type[1]

function initDevices() {
    for (let i = 0; i < phones.length; i++) {
        phoneItems.device[i] = phones[i];

        // Laptops get a new ID after each reload
        phoneItems.device[i].id = i;

        phoneItems.isFavourite[i] = false;
        phoneItems.isDetailsPressed[i] = false;
        phoneItems.isInCart[i] = false;
    }
}
initDevices()

function getHighestDisplaySize() {
    let displaySize = 0;
    for (let i = 0; i < details.diagonal.length; i++) {
        if (details.diagonal[i].mm > displaySize) {
            displaySize = details.diagonal[i].mm

            MIN.displaySize.max = displaySize;
            MAX.displaySize.max = displaySize;
            MAX.displaySize.value = displaySize
        }
    }
    console.log(MAX.displaySize.value);
    outputMaxDispSize()
    return displaySize;
}

function getLowestDisplaySize() {
    let displaySize = 99999999;
    for (let i = 0; i < details.diagonal.length; i++) {
        if (details.diagonal[i].mm < displaySize) {
            displaySize = details.diagonal[i].mm

            MIN.displaySize.min = displaySize;
            MAX.displaySize.min = displaySize;
            MIN.displaySize.value = displaySize
        }
    }
    console.log(MIN.displaySize.value);
    outputMinDispSize()
    return displaySize;
}


function isInDispSizeArea(deviceType, index) {
    if (details.diagonal[ITEMS.type[deviceType].device[index].display.diagonal].mm >= MIN.displaySize.value && details.diagonal[ITEMS.type[deviceType].device[index].display.diagonal].mm <= MAX.displaySize.value) {
        return true;
    }
    return false;
}

function initFilterValues() {
    getLowestPrice(1);
    getHighestPrice(1);
    getLowestDisplaySize();
    getHighestDisplaySize();
}
initFilterValues()

// phone name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let usedIndex = [];
    let rnd = Math.floor(Math.random() * phones.length);
    let notPassed = 0;

    let str = '';
    for (let i = 0; i < phones.length - notPassed; i++) {
        while (usedIndex.includes(rnd)) {
            rnd = Math.floor(Math.random() * phones.length);
            console.log("calc new rnd");
        }
        usedIndex.push(rnd);

        // Phones get a new ID after each reload
        phoneItems.device[rnd].id = i;
        // console.log(phoneItems.device[rnd].id);

        if (isInPriceArea(1, rnd) && isInDispSizeArea(1, rnd)) {
            str += `
            <div class="itemBox scrollReveal">
                <div class="itemBoxFront">
                    ${initItemBoxFront(rnd)}
                </div>

                <div class="itemDetailsBtn" onclick="showDeviceDetails(${phoneItems.device[rnd].id})">
                    <p>+</p>
                    <div class="itemDetailsText">
                        <p>Show more</p>
                        <div class="itemDetailsBackgr">
                        </div>
                    </div>
                </div>

                <div class="toCartBtn" onclick="addToCart(${1}, ${rnd})">
                    <img class="toCartBtnImg" src="../img/icons/shopIcon.png" alt="shop icon">
                </div>

                <div class="itemFavouriteBtn">
                    <div class="itemFavouriteBtnBackground"></div>
                    <img class="itemFavouriteBtnImg" src="../img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${1}, ${phoneItems.device[rnd].id})" onmouseenter="changeFavBtnColourYellow(${phoneItems.device[rnd].id})" onmouseleave="changeFavBtnColourGray(${phoneItems.device[rnd].id})">
                </div>

                <div class="itemDetails">
                    <div>
                        <div class="itemDetailsHeader">
                            <h1>${phoneItems.device[rnd].name}</h1>
                        </div>
                        <div class="itemDetailsMain">
                            <div class="itemDetailsMainGrid">
                                <div>
                                    <h2>Operating System</h2>
                                    <p>${details.os[phoneItems.device[rnd].os]}</p>
                                </div>
                                <div>
                                    <h2>CPU</h2>
                                    <p>${details.CPU[phoneItems.device[rnd].CPU].model}</p>
                                </div>
                                <div>
                                    <h2>Display</h2>
                                    <p>${details.display[phoneItems.device[rnd].display.type]}</p>
                                </div>
                                <div>
                                    <h2>Display diameter</h2>
                                    <p>${details.diagonal[phoneItems.device[rnd].display.diagonal].mm} mm</p>
                                </div>
                                <div>
                                    <h2>RAM</h2>
                                    <p>${phoneItems.device[rnd].RAM} GB</p>
                                </div>
                                <div>
                                    <h2>ROM</h2>
                                    <p>${phoneItems.device[rnd].ROM} GB</p>
                                </div>
                            </div>
                        </div>
                        <div class="itemDetailsFooter">
                            <p>${phoneItems.device[rnd].price} €</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } else {
            notPassed++;
            i--;
        }
    }
    document.getElementById('items-grid').innerHTML = str;
}
initItemBoxes();

function initItemBoxFront(index) {
    let img = `<img src="../img/phones/${phones[index].name.split(' ')[0] ?
        phones[index].name.split(' ')[0] : 'logo'}${phones[index].name.split(' ')[1] ? '-' + phones[index].name.split(' ')[1] : ''}${phones[index].name.split(' ')[2] ? '-' + phones[index].name.split(' ')[2] : ''}${phones[index].name.split(' ')[3] ? '-' + phones[index].name.split(' ')[3] : ''}.png" 
                alt="${phones[index].name.split(' ')[0]} 
                ${phones[index].name.split(' ')[1]} 
                ${phones[index].name.split(' ')[2] ? phones[index].name.split(' ')[2] : ''} 
                ${phones[index].name.split(' ')[3] ? phones[index].name.split(' ')[3] : ''}">
                `;
    return `
        <div class="itemBoxFrontGrid">
            <div class="itemImg">
                ${img}
            </div>

            <div class="itemStats">
                <h2>${phoneItems.device[index].name}</h2>
            </div>
        </div>`;
}


function showDeviceDetails(index) {
    phoneItems.isDetailsPressed[index] = !phoneItems.isDetailsPressed[index]

    if (phoneItems.isDetailsPressed[index]) {
        document.getElementsByClassName('itemDetails').item(index).style.left = '0'
    } else {
        document.getElementsByClassName('itemDetails').item(index).style.left = '110%'
    }

    console.log(phoneItems.isDetailsPressed[index]);
}

function outputMinDispSize() {
    document.getElementById('min-displaySize-value').innerHTML = `<p>Min: ${MIN.displaySize.value} mm</p>`
    console.log("E");
}

function outputMaxDispSize() {
    document.getElementById('max-displaySize-value').innerHTML = `<p>Max: ${MAX.displaySize.value} mm</p>`
    console.log("F");
}

function changeNavLogoCart() {
    document.getElementById('nav-logo').innerHTML = `<img src="../img/logos/logo${JSON.parse(localStorage['acc-darkMode']) == true ? '_dark' : ''}.png" alt="ExpertShop logo">`;
    document.getElementById('nav-items').innerHTML = `<img src="../img/icons/shopping-cart${JSON.parse(localStorage['acc-darkMode']) == true ? '-white' : ''}.png" alt="shopping cart">`
    document.getElementById('darkMode-btn').innerHTML = `<img src="../img/icons/darkmode_${JSON.parse(localStorage['acc-darkMode']) == true ? 'on' : 'off'}.png" alt="Dark Mode Icon">`
    document.getElementById('headerBoxImg').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr.png" alt="Transparent Go Around">`

    for (let i = 0; i < document.getElementsByClassName('itemStats').length; i++) {
        document.getElementsByClassName('itemStats').item(i).style.backgroundImage = `url(../img/util/tr${JSON.parse(localStorage['acc-darkMode']) == true ? 'bl' : 'wh'}Tr.png)`
    }

    document.getElementById('footerBorder').innerHTML = `<img src="../img/util/${JSON.parse(localStorage['acc-darkMode']) == true ? 'blTrBl' : 'whTrWh'}.png" alt="gradient">`
    document.getElementById('footerBorder').style.backgroundImage = `url(../img/util/Shadow${JSON.parse(localStorage['acc-darkMode']) == true ? 'White' : 'Black'}Tr.png)`
}
changeNavLogoCart()

// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

// ITERATE ALL ELEMENTS
let sections;
function initAnimations() {
    sections = document.querySelectorAll('.scrollReveal');
    for (let i = 0; i < sections.length; i++) {
        generateScrollAnimation(i);
    }
}
initAnimations()
