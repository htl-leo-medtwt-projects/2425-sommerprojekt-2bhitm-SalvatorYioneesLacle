function initHTML() {
    let str = `
    <div>
        <div>
            <nav>
                <div id="nav-logo">
                    <img src="./img/logo.png" alt="ExpertShop logo">
                </div>
                <div id="nav-btns"></div>
                <div id="nav-account"></div>
                <div id="nav-items"></div>
            </nav>
        </div>
    </div>
    `;
    document.getElementsByTagName('body').item(0).innerHTML = str;
}
// initHTML()