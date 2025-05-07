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
    localStorage['acc-email'] = USER.email = TEMP.email
    localStorage['acc-pw'] = USER.pw = TEMP.pw
    localStorage['acc-username'] = USER.username = TEMP.username
    localStorage['acc-pfp'] = USER.pfp = TEMP.pfp
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
    TEMP.pfp = `/img/pfp/${index}.png`
    console.log(TEMP.pfp);

    for (let i = 0; i < 10; i++) {
        if (i == index) {
             document.getElementById(`pfp-${i}`).style.border = 'var(--accountBorder)'
            // document.getElementById(`pfp-${i}`).style.transform = 'scale(1.2)'
        } else {
            document.getElementById(`pfp-${i}`).style.transform = 'scale(1)'
        }
    }
}

function saveCustomPfp() {
    TEMP.pfp = `<img src="/img/pfp/${"own"}.png" alt="image-${"own"}">`
    console.log(TEMP.pfp);
}