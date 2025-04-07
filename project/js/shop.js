function initLaptops() {
    let str = '';
    for (let i = 0; i < 10; i++) {
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
                <p></p>
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;
}
initLaptops();

initNavBtnsHome()

function checkMinValue() {
    if (document.getElementById('min-price').value < 0) {
        document.getElementById('min-price').value = 0;
    }

    if (document.getElementById('min-price').value > document.getElementById('max-price').value) {
        document.getElementById('min-price').value = document.getElementById('max-price').value;
    }
}

function checkMaxValue() {
    if (document.getElementById('max-price').value < 0) {
        document.getElementById('max-price').value = 0;
    }

    if (document.getElementById('max-price').value < document.getElementById('min-price').value) {
        document.getElementById('max-price').value = document.getElementById('min-price').value;
    }
}