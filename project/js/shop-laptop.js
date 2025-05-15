/// <reference path="../data/laptops.js"/>

console.log(laptops);

let laptopItems = ITEMS.type[0]

// Laptop name: If Split(" ") char[0] = ( & Split(" ") char[end] = ) --> Font size smaller
function initItemBoxes() {
    let str = '';
    for (let i = 0; i < laptops.length; i++) {
        laptopItems.device[i] = laptops[i];
        laptopItems.id = i;
        console.log(laptopItems.id);
        laptopItems.isFavourite[i] = false;
        laptopItems.isDetailsPressed[i] = false;

        str += `
        <div class="itemBox scrollReveal">
            <div class="itemBoxFront">
                ${initItemBoxFront(i)}
            </div>

            <div class="itemDetailsBtn" onclick="showDeviceDetails(${laptopItems.id})">
                <p>+</p>
                <div class="itemDetailsText">
                    <p>Show more</p>
                </div>
            </div>

            <div class="toCartBtn" onclick="updateCart(${laptopItems.device[i]})">
                <img src="/img/icons/shopIcon.png" alt="shop icon">
            </div>

            <div class="itemFavouriteBtn">
                <div class="itemFavouriteBtnBackground"></div>
                <img class="itemFavouriteBtnImg" src="/img/icons/star.png" alt="star" onclick="changeFavBtnSaved(${laptopItems.id})" onmouseenter="changeFavBtnColourYellow(${laptopItems.id})" onmouseleave="changeFavBtnColourGray(${laptopItems.id})">
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
                <img src="${laptopItems.device[index].img}" alt="${laptopItems.device[index].name}">
            </div>

            <div class="itemStats">
                <h2>${laptopItems.device[index].name}</h2>
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
    let str = `
        <div class="itemDetails">
            <div class="itemDetailsHeader">
                <h1>${laptopItems.device[index].name}</h1>
            </div>
            <div>
                <p>OS: ${laptopItems.device[index].os}</p>
                <p>Storage: ${laptopItems.device[index].rom} GB</p>
                <p>RAM: ${laptopItems.device[index].ram} GB</p>
                <p>CPU: ${laptopItems.device[index].cpu}</p>
            </div>
            <div class="itemDetailsFooter">
                <p>${laptopItems.device[index].price} €</p>
            </div>
        </div> 
    `;
    if (laptopItems.isDetailsPressed[index]) {
        document.getElementsByClassName('itemBoxFront').item(index).innerHTML = str
        document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'none'
    } else {
        document.getElementsByClassName('itemBoxFront').item(index).innerHTML = initItemBoxFront(index)
        document.getElementsByClassName('itemFavouriteBtn').item(index).style.display = 'block'
    }

    console.log(laptopItems.isDetailsPressed[index]);
}

function changeFavBtnSaved(index) {
    laptopItems.isFavourite[index] = !laptopItems.isFavourite[index]

    if (laptopItems.isFavourite[index]) {
        FAVOURITES.item.push(laptopItems.device[index]);
    } else {
        FAVOURITES.item.splice(FAVOURITES.item.indexOf(laptopItems.device[index]), 1);
    }
    
    console.log(laptopItems.isFavourite, FAVOURITES.item);
    // console.log();
    

    if (laptopItems.isFavourite[index]) {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(0)`
    } else {
        document.getElementsByClassName('itemFavouriteBtnImg').item(index).style.filter = `grayscale(1)`
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
