/// <reference path="../data/laptops.js"/>

console.log(laptops);

let laptopItems = ITEMS.type[0]

// Laptop name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let usedIndex = [];
    let rnd = Math.floor(Math.random() * laptops.length);

    let str = '';
    for (let i = 0; i < laptops.length; i++) {
        // Randomised phone display
        while (usedIndex.includes(rnd)) {
            rnd = Math.floor(Math.random() * laptops.length);
            console.log("calc new rnd");
        } 
        usedIndex.push(rnd);

        laptopItems.device[rnd] = laptops[rnd];
        laptopItems.id = rnd;
        console.log(laptopItems.id);
        laptopItems.isFavourite[rnd] = false;
        laptopItems.isDetailsPressed[rnd] = false;

        str += `
        <div class="itemBox scrollReveal">
            <div class="itemBoxFront">
                ${initItemBoxFront(rnd)}
            </div>

            <div class="itemDetailsBtn" onclick="showDeviceDetails(${laptopItems.id})">
                <p>+</p>
                <div class="itemDetailsText">
                    <p>Show more</p>
                    <div class="itemDetailsBackgr">
                    </div>
                </div>
            </div>

            <div class="toCartBtn" onclick="updateCart(${laptopItems.device[rnd]})">
                <img class="toCartBtnImg" src="/img/icons/shopIcon.png" alt="shop icon">
            </div>

            <div class="itemFavouriteBtn">
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${laptopItems.id})" onmouseenter="changeFavBtnColourYellow(${laptopItems.id})" onmouseleave="changeFavBtnColourGray(${laptopItems.id})">
            </div>

           <!-- <div class="itemRating">
                <!-- From Uiverse.io by SelfMadeSystem, https://uiverse.io/SelfMadeSystem/selfish-starfish-40 
                <div class="rating">
                    <input type="radio" id="star-1" name="star-radio" value="star-1">
                    <label for="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-2" name="star-radio" value="star-1">
                    <label for="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-3" name="star-radio" value="star-1">
                    <label for="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-4" name="star-radio" value="star-1">
                    <label for="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                    <input type="radio" id="star-5" name="star-radio" value="star-1">
                    <label for="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                    </label>
                </div>
            </div> -->

            <div class="itemDetails">
                <div>
                    <div class="itemDetailsHeader">
                        <h1>${laptopItems.device[rnd].name}</h1>
                    </div>
                    <div class="itemDetailsMain">
                        <div>
                            <p>${laptopItems.device[rnd].os}</p>
                        </div>
                        <div>
                            <p>${laptopItems.device[rnd].rom} GB</p>
                        </div>
                        <div>
                            <p>${laptopItems.device[rnd].ram} GB</p>
                        </div>
                        <div>
                            <p>${laptopItems.device[rnd].cpu}</p>
                        </div>
                    </div>
                    <div class="itemDetailsFooter">
                        <p>${laptopItems.device[rnd].price} €</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;

    // for (let i = 0; i < laptops.length; i++) {
    //     initItemName(i)
    // }
}
initItemBoxes();

function initItemBoxFront(index) {
    return `
        <div class="itemBoxFrontGrid">
            <div class="itemImg">
                <img src="${laptopItems.device[index].img}" alt="${laptopItems.device[index].name}">
            </div>

            <div class="itemStats">
                <div>
                    <h2>${laptopItems.device[index].name}</h2>
                </div>
                <div>
                    <p>${laptopItems.device[index].price} €</p>
                </div>
            </div>
        </div>`;
}

function initItemName(index) {
    let str = '';
    for (let i = 0; i < laptopItems.device[index].name.split(' ').length; i++) {
        if (laptopItems.device[index].name.split(' ')[i].at(0) == '('
            && laptopItems.device[index].name.split(' ')[i].at(laptopItems.device[index].name.split(' ')[i].length - 1) == ')') {
            console.log('EEEEEEEE EEEEEEEE');

            let temp = `<smol>${laptopItems.device[index].name.split(' ')[i]}</smol>`
            laptopItems.device[index].name.split(' ')[i].innerHTML = temp;;
        }
        str += laptopItems.device[index].name.split(' ')[i] + ' '
    }
    console.log(str);
}

function showDeviceDetails(index) {
    laptopItems.isDetailsPressed[index] = !laptopItems.isDetailsPressed[index]

    if (laptopItems.isDetailsPressed[index]) {
        document.getElementsByClassName('itemDetails').item(index).style.left = '0'
        // document.getElementsByClassName('toCartBtnImg').item(index).style.filter = 'brightness(5)'
    } else {
        document.getElementsByClassName('itemDetails').item(index).style.left = '110%'
        // document.getElementsByClassName('toCartBtnImg').item(index).style.filter = 'grayscale(1)'
    }

    console.log(laptopItems.isDetailsPressed[index]);
}

function changeFavBtnSaved(index) {
    if (USER.logInStatus) {
        laptopItems.isFavourite[index] = !laptopItems.isFavourite[index]

        if (laptopItems.isFavourite[index]) {
            FAVOURITES.item.push(laptopItems.device[index]);
        } else {
            FAVOURITES.item.splice(FAVOURITES.item.indexOf(laptopItems.device[index]), 1);
        }

        console.log(laptopItems.isFavourite, FAVOURITES.item);

        if (laptopItems.isFavourite[index]) {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
        } else {
            document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
        }
    } else {
        showWarningMessage('Log in to save!');
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

let detailsBtnSections = document.querySelectorAll('.itemDetailsBtnText');
for (let i = 0; i < detailsBtnSections.length; i++) {
    generateScrollAnimationDetails(i);
}

// REGISTER ANIMATION
function generateScrollAnimationDetails(i) {
    let element = detailsBtnSections[i];

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

