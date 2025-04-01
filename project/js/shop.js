function initLaptops() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += `
        <div class="itemBox"></div>
        `;
    }
    document.getElementById('items-grid').innerHTML = str;
}
initLaptops()