/// <reference path="../data/monitors.js"/>

console.log(monitors);

let monitorItems = ITEMS.type[2]

// Laptop name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let usedIndex = [];
    let rnd = Math.floor(Math.random() * monitors.length);

    let str = '';
    for (let i = 0; i < monitors.length; i++) {
        while (usedIndex.includes(rnd)) {
            rnd = Math.floor(Math.random() * monitors.length);
            console.log("calc new rnd");
        }
        usedIndex.push(rnd);

        monitorItems.device[rnd] = monitors[rnd];

        // Monitors get a new ID after each reload
        monitorItems.id = i;
        console.log(monitorItems.id);
        monitorItems.isFavourite[rnd] = false;
        monitorItems.isDetailsPressed[rnd] = false;

        str += `
        <div class="itemBox scrollReveal">
            <div class="itemBoxFront">
                ${initItemBoxFront(rnd)}
            </div>

            <div class="itemDetailsBtn" onclick="showDeviceDetails(${monitorItems.id})">
                <p>+</p>
                <div class="itemDetailsText">
                    <p>Show more</p>
                    <div class="itemDetailsBackgr">
                    </div>
                </div>
            </div>

            <div class="toCartBtn" onclick="addToCart(${2}, ${rnd})">
                <img class="toCartBtnImg" src="/img/icons/shopIcon.png" alt="shop icon">
            </div>

            <div class="itemFavouriteBtn">
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${2}, ${monitorItems.id})" onmouseenter="changeFavBtnColourYellow(${monitorItems.id})" onmouseleave="changeFavBtnColourGray(${monitorItems.id})">
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
                        <h1>${monitorItems.device[rnd].name}</h1>
                    </div>
                    <div class="itemDetailsMain">
                        <div class="itemDetailsMainGrid">
                            <div>
                                <h2>Display size</h2>
                                <p>${monitorItems.device[rnd].display.size}"</p>
                            </div>
                            <div>
                                <h2>Resolution</h2>
                                <p>${monitorItems.device[rnd].display.resWidth} x ${monitorItems.device[rnd].display.resHeight}</p>
                            </div>
                            <div>
                                <h2>Memory</h2>
                                <p>${monitorItems.device[rnd].display.type} GB</p>
                            </div>
                            <div>
                                <h2>RAM</h2>
                                <p>${monitorItems.device[rnd].display.fps} GB</p>
                            </div>
                        </div>
                    </div>
                    <div class="itemDetailsFooter">
                        <p>${monitorItems.device[rnd].price} €</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;

    // for (let i = 0; i < monitors.length; i++) {
    //     initItemName(i)
    // }
}
initItemBoxes();

function initItemBoxFront(index) {
    return `
        <div class="itemBoxFrontGrid">
            <div class="itemImg">
                <img src="${monitorItems.device[index].img}" alt="${monitorItems.device[index].name}">
            </div>

            <div class="itemStats">
                <div>
                    <h2>${monitorItems.device[index].name}</h2>
                </div>
                <div>
                    <p>${monitorItems.device[index].price} €</p>
                </div>
            </div>
        </div>`;
}

// function initItemName(index) {
//     let str = '';
//     for (let i = 0; i < monitorItems.device[index].name.split(' ').length; i++) {
//         if (monitorItems.device[index].name.split(' ')[i].at(0) == '('
//             && monitorItems.device[index].name.split(' ')[i].at(monitorItems.device[index].name.split(' ')[i].length - 1) == ')') {
//             console.log('EEEEEEEE EEEEEEEE');

//             let temp = `<smol>${monitorItems.device[index].name.split(' ')[i]}</smol>`
//             monitorItems.device[index].name.split(' ')[i].innerHTML = temp;;
//         }
//         str += monitorItems.device[index].name.split(' ')[i] + ' '
//     }
//     console.log(str);
// }

function showDeviceDetails(index) {
    monitorItems.isDetailsPressed[index] = !monitorItems.isDetailsPressed[index]

    if (monitorItems.isDetailsPressed[index]) {
        // document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'none'
        document.getElementsByClassName('itemDetails').item(index).style.left = '0'
    } else {
        document.getElementsByClassName('itemDetails').item(index).style.left = '110%'
        // document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'block'
    }

    console.log(monitorItems.isDetailsPressed[index]);
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
            start: '0% 5%',  /* 'Ankerpunkt Offset' */
        }
    });
}

