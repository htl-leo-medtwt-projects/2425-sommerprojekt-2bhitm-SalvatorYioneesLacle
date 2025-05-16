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

function isEmailValid() {
    return document.getElementById('email').value.includes('@')
        && document.getElementById('email').value.includes('.')
}

function isPasswordValid() {
    return document.getElementById('password').value.length > 5;
}

function isEmailEqual() {
    return document.getElementById('email').value != 'null' && document.getElementById('email').value == localStorage['acc-email']
}

function isPasswordEqual() {
    return document.getElementById('password').value != 'null' && document.getElementById('password').value == localStorage['acc-pw']
}

function isSamePassword() {
    return document.getElementById('password-confirm').value == document.getElementById('password').value
}

function checkSignUpStage1() {
    if (!isEmailValid()) {
        showWarningMessage('Invalid email address');
        document.getElementById('email').value = '';
        return false;
    }

    if (!isPasswordValid()) {
        showWarningMessage('Password too short!');
        document.getElementById('password').value = '';
        return false;
    }

    if (!isSamePassword()) {
        showWarningMessage('Passwords do not match!');
        document.getElementById('password-confirm').value = '';
        return false;
    }

    TEMP.email = document.getElementById('email').value
    TEMP.pw = document.getElementById('password').value

    USER.email = TEMP.email
    localStorage['acc-email'] = USER.email

    console.log(TEMP.email, USER.email, localStorage['acc-email']);

    USER.pw = TEMP.pw
    localStorage['acc-pw'] = USER.pw
    toSignUpSetupScreen()
}

function checkSignUpStage2() {
    TEMP.username = INPUTS.username.value

    saveUserData()
    toAccountOverview()
}

function saveUserData() {
    USER.email = TEMP.email
    localStorage['acc-email'] = USER.email

    console.log(TEMP.email, USER.email, localStorage['acc-email']);

    USER.pw = TEMP.pw
    localStorage['acc-pw'] = USER.pw

    USER.username = TEMP.username
    localStorage['acc-username'] = USER.username

    USER.pfp = TEMP.pfp
    localStorage['acc-pfp'] = USER.pfp

    USER.logInStatus = true;
    localStorage['acc-logInStatus'] = USER.logInStatus
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

function deleteAccount() {
    USER.logInStatus = false

    localStorage['acc-username'] = null
    localStorage['acc-email'] = null
    localStorage['acc-pw'] = null
    localStorage['acc-pfp'] = '/img/pfp/0.png'
    localStorage['acc-money'] = 0
    localStorage['acc-cart'] = null
    localStorage['acc-favourites'] = null
    localStorage['acc-logInStatus'] = USER.logInStatus

    toHomepage()
}

function logOut() {
    USER.logInStatus = false
    localStorage['acc-logInStatus'] = USER.logInStatus;
    toHomepage()
}

function checkLogin() {
    if (!isEmailEqual()) {
        showWarningMessage('Wrong email address!')
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        return false;
    }

    if (!isPasswordEqual()) {
        showWarningMessage('Wrong password!')
        document.getElementById('password').value = '';
        return false;
    }

    saveUserData()
    toAccountOverview();
}

function saveEmail() {
    TEMP.email = document.getElementById('email').value
}

function savePassword() {
    TEMP.pw = document.getElementById('password').value
}

function saveUsername() {
    TEMP.username = INPUTS.username.value
}

function savePfp(index) {
    TEMP.pfp = `/img/pfp/${index}.png`
    console.log(TEMP.pfp);

    for (let i = 0; i < 10; i++) {
        if (i == index) {
            document.getElementById(`pfp-${i}`).style.border = 'var(--accountBorder)'
        } else {
            document.getElementById(`pfp-${i}`).style.transform = 'scale(1)'
        }
    }
}

function saveCustomPfp() {
    TEMP.pfp = `${"ownURL"}`
    console.log(TEMP.pfp);
}