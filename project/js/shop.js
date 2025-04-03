function initLaptops() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += `
        <div class="itemBox">
            <div class="itemImg">
                <img src="/img/phone.jpg" alt="phone">
            </div>

            <div class="itemStats">
                <h2>Samsung</h2>
            </div>
        </div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;
}
initLaptops();

function checkMinValue() {
    if (document.getElementById('min-price').value < 0) {
        document.getElementById('min-price').value = 0;
    }

    if (document.getElementById('min-price').value > document.getElementById('max-price').value) {
        document.getElementById('min-price').value = document.getElementById('max-price').value;
    }
}

function checkMaxValue() {
    if (document.getElementById('max-price').value < document.getElementById('min-price').value) {
        document.getElementById('max-price').value = document.getElementById('min-price').value;
    }
}