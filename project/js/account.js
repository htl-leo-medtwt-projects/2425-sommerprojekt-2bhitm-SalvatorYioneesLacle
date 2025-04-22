function initNavigationbar() {
document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logos/logo.png" alt="ExpertShop logo">
            </a>`;
}
initNavigationbar()

function toLogOutScreen() {
    window.location.href = `/pages/account/account-signout.html`;
}

function toAccountDeleteScreen() {
    window.location.href = `/pages/account/account-delete.html`;
}

function toHomepage() {
    window.location.href = `/index.html`;
}