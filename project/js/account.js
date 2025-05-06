let TEMP = {
    email: USER.email,
    pw: USER.pw,
    username: USER.username,
    pfp: USER.pfp
}

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logos/logo.png" alt="ExpertShop logo">
            </a>`;
}
initNavigationbar()

function toSignUpSetupScreen() {
    window.location.href = `/pages/account/account-signup-setup.html`;
}

function toLogOutScreen() {
    window.location.href = `/pages/account/account-signout-done.html`;
}

function toAccountDeleteScreen() {
    window.location.href = `/pages/account/account-delete.html`;
}

function toAccountDeleteDone() {
    window.location.href = `/pages/account/account-delete-done.html`;
}

function toAccountOverview() {
    window.location.href = `/pages/account/account-overview.html`;
}

function toHomepage() {
    window.location.href = `/index.html`;
}

function checkLogin() {
    toAccountOverview()
}

function saveEmail() {
    TEMP.email = document.getElementById("email").value
}

function savePassword() {
    TEMP.pw = document.getElementById("password").value
}

function saveUsername() {
    TEMP.username = document.getElementById("username").value
}

function savePfp(index) {
    TEMP.pfp = `<img src="/img/pfp/${index}.png" alt="image-${index}">`
    console.log(TEMP.pfp);
    
}