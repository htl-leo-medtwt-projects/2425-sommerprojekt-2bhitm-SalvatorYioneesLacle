/// <reference path="../data/laptops.js"/>

console.log(laptops);

let laptopItems = ITEMS.type[0]

function initDevices() {
    for (let i = 0; i < laptops.length; i++) {
        laptopItems.device[i] = laptops[i];

        // Laptops get a new ID after each reload
        laptopItems.device[i].id = i;

        laptopItems.isFavourite[i] = false;
        laptopItems.isDetailsPressed[i] = false;
        laptopItems.isInCart[i] = false;
    }
}
initDevices()

function initFilterValues() {
    getLowestPrice(0);
    getHighestPrice(0);
    getLowestStorage(0);
    getHighestStorage(0);
}
initFilterValues()

// Laptop name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let usedIndex = [];
    let rnd = Math.floor(Math.random() * laptops.length);
    let notPassed = 0;

    let str = '';
    // Less laptops = less random numbers = if else for filter stuff
    for (let i = 0; i < laptops.length - notPassed; i++) {
        // Randomised phone display
        while (usedIndex.includes(rnd)) {
            rnd = Math.floor(Math.random() * laptops.length);
            // console.log("calc new rnd");
        }
        usedIndex.push(rnd);

        laptopItems.device[rnd].id = i;
        // console.log(laptopItems.device[rnd].id);

        if (isInPriceArea(0, rnd)) {
            str += `
            <div class="itemBox scrollReveal">
                <div class="itemBoxFront">
                    ${initItemBoxFront(rnd)}
                </div>

                <div class="itemDetailsBtn" onclick="showDeviceDetails(${laptopItems.device[rnd].id})">
                    <p>+</p>
                    <div class="itemDetailsText">
                        <p>Show more</p>
                        <div class="itemDetailsBackgr">
                        </div>
                    </div>
                </div>

                <div class="toCartBtn" onclick="addToCart(${0},${rnd})">
                    <img class="toCartBtnImg" src="/img/icons/shopIcon.png" alt="shop icon">
                </div>

                <div class="itemFavouriteBtn">
                    <div class="itemFavouriteBtnBackground"></div>
                    <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${0}, ${laptopItems.device[rnd].id})" onmouseenter="changeFavBtnColourYellow(${laptopItems.device[rnd].id})" onmouseleave="changeFavBtnColourGray(${laptopItems.device[rnd].id})">
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
                            <div class="itemDetailsMainGrid">
                                <div>
                                    <h2>Operating System</h2>
                                    <p>${laptopItems.device[rnd].os}</p>
                                </div>
                                <div>
                                    <h2>CPU</h2>
                                    <p>${laptopItems.device[rnd].cpu}</p>
                                </div>
                                <div>
                                    <h2>Memory</h2>
                                    <p>${laptopItems.device[rnd].rom} GB</p>
                                </div>
                                <div>
                                    <h2>RAM</h2>
                                    <p>${laptopItems.device[rnd].ram} GB</p>
                                </div>
                            </div>
                        </div>
                        <div class="itemDetailsFooter">
                            <p>${laptopItems.device[rnd].price} €</p>
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

// function initItemName(index) {
//     let str = '';
//     for (let i = 0; i < laptopItems.device[index].name.split(' ').length; i++) {
//         if (laptopItems.device[index].name.split(' ')[i].at(0) == '('
//             && laptopItems.device[index].name.split(' ')[i].at(laptopItems.device[index].name.split(' ')[i].length - 1) == ')') {
//             console.log('EEEEEEEE EEEEEEEE');

//             let temp = `<smol>${laptopItems.device[index].name.split(' ')[i]}</smol>`
//             laptopItems.device[index].name.split(' ')[i].innerHTML = temp;;
//         }
//         str += laptopItems.device[index].name.split(' ')[i] + ' '
//     }
//     console.log(str);
// }

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
            start: '0% 55%',  /* 'Ankerpunkt Offset' */
        }
    });
}

