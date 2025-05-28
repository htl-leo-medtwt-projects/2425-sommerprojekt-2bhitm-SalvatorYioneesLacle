/// <reference path="../data/phones.js"/>
/// <reference path="../data/details.js"/>

console.log(phones);
console.log(details);



let phoneItems = ITEMS.type[1]

// phone name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let usedIndex = [];
    let rnd = Math.floor(Math.random() * phones.length);

    let str = '';
    for (let i = 0; i < phones.length; i++) {
        while (usedIndex.includes(rnd)) {
            rnd = Math.floor(Math.random() * phones.length);
            console.log("calc new rnd");
        }
        usedIndex.push(rnd);

        phoneItems.device[rnd] = phones[rnd];

        // Phones get a new ID after each reload
        phoneItems.id = i;
        console.log(phoneItems.id);
        phoneItems.isFavourite[rnd] = false;
        phoneItems.isDetailsPressed[rnd] = false;

        str += `
        <div class="itemBox scrollReveal">
            <div class="itemBoxFront">
                ${initItemBoxFront(rnd)}
            </div>

            <div class="itemDetailsBtn" onclick="showDeviceDetails(${phoneItems.id})">
                <p>+</p>
                <div class="itemDetailsText">
                    <p>Show more</p>
                    <div class="itemDetailsBackgr">
                    </div>
                </div>
            </div>

            <div class="toCartBtn" onclick="addToCart(${phoneItems.device[rnd]})">
                <img class="toCartBtnImg" src="/img/icons/shopIcon.png" alt="shop icon">
            </div>

            <div class="itemFavouriteBtn">
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${phoneItems.id})" onmouseenter="changeFavBtnColourYellow(${phoneItems.id})" onmouseleave="changeFavBtnColourGray(${phoneItems.id})">
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
                                <p>${details.display[phoneItems.device[rnd].display.type]}, ${details.diagonal[phoneItems.device[rnd].display.diagonal].zoll}"</p>
                            </div>
                            <div>
                                <h2>RAM</h2>
                                <p>${phoneItems.device[rnd].ram} GB</p>
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
    }
    document.getElementById('items-grid').innerHTML = str;
}
initItemBoxes();

function initItemBoxFront(index) {
    let img = `<img src="../img/phones/${phones[index].brand}-${phones[index].model.split(' ')[0] ?
        phones[index].model.split(' ')[0] : 'logo'}${phones[index].model.split(' ')[1] ? '-' + phones[index].model.split(' ')[1] : ''}${phones[index].model.split(' ')[2] ? '-' + phones[index].model.split(' ')[2] : ''}${phones[index].model.split(' ')[3] ? '-' + phones[index].model.split(' ')[3] : ''}.png" 
                alt="${phones[index].brand} ${phones[index].model.split(' ')[0]} 
                ${phones[index].model.split(' ')[1]} 
                ${phones[index].model.split(' ')[2] ? phones[index].model.split(' ')[2] : ''} 
                ${phones[index].model.split(' ')[3] ? phones[index].model.split(' ')[3] : ''}">
                `;
    return `
        <div class="itemBoxFrontGrid">
            <div class="itemImg">
                ${img}
            </div>

            <div class="itemStats">
                <h2>${phoneItems.device[index].brand} ${phoneItems.device[index].model}</h2>
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
function changeFavBtnSaved(index) {
    if (USER.logInStatus) {
        phoneItems.isFavourite[index] = !phoneItems.isFavourite[index]

        if (phoneItems.isFavourite[index]) {
            FAVOURITES.item.push(phoneItems.device[index]);
        } else {
            FAVOURITES.item.splice(FAVOURITES.item.indexOf(phoneItems.device[index]), 1);
        }

        console.log(phoneItems.isFavourite, FAVOURITES.item);

        if (phoneItems.isFavourite[index]) {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
        } else {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
        }
    } else {
        showWarningMessage('Log in to save!')
    }
}

// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

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
