let TEMP = {
    email: USER.email,
    pw: USER.pw,
    username: USER.username,
    pfp: USER.pfp
}

let INPUTS = {
    email: document.getElementById('email'),
    pw: document.getElementById('password'),
    pwConfirm: document.getElementById('password-confirm'),
    username: document.getElementById('username')
}

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="/index.html">
                <img src="/img/logos/logo.png" alt="ExpertShop logo">
            </a>`;
}
initNavigationbar()

function checkSignUpStage1() {
    
}

function checkSignUpStage2() {
   
}

function saveUserData() {
    
}

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
