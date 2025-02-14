function initHTML() {
    let str = `
    <header>
        <div><img src="./img/hp-logo.png" alt="hp-logo"></div>
        <div></div>
    </header>
    `;
    document.getElementsByTagName('body').item(0).innerHTML = str;
}
initHTML()