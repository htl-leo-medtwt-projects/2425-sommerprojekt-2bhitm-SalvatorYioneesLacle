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
    return INPUTS.email.value.includes('@')
        && INPUTS.email.value.includes('.')
}

function isPasswordValid() {
    return INPUTS.pw.value.length > 5;
}

function isEmailEqual() {
    return INPUTS.email.value != 'null' && INPUTS.email.value == localStorage['acc-email']
}

function isPasswordEqual() {
    return INPUTS.pw.value != 'null' && INPUTS.pw.value == localStorage['acc-pw']
}

function isSamePassword() {
    return INPUTS.pwConfirm.value == INPUTS.pw.value
}

function checkSignUpStage1() {
    if (!isEmailValid()) {
        showWarningMessage('Invalid email address');
        INPUTS.email.value = '';
        return false;
    }

    if (!isPasswordValid()) {
        showWarningMessage('Password too short!');
        INPUTS.pw.value = '';
        return false;
    }

    if (!isSamePassword()) {
        showWarningMessage('Passwords do not match!');
        INPUTS.pwConfirm.value = '';
        return false;
    }

    TEMP.email = INPUTS.email.value
    TEMP.pw = INPUTS.pw.value
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
    if (!isEmailEqual() && !isPasswordEqual()) {
        showWarningMessage('Wrong email address and password!')
        INPUTS.email.value = ''
        INPUTS.pw.value = ''
        return false;
    }

    if (!isEmailEqual()) {
        showWarningMessage('Wrong email address!')
        INPUTS.email.value = ''
        return false;
    }

    if (!isPasswordEqual()) {
        showWarningMessage('Wrong password!')
        INPUTS.pw.value = '';
        return false;
    }

    saveUserData()

    USER.logInStatus = true;
    localStorage['acc-logInStatus'] = USER.logInStatus

    toAccountOverview();
}

function saveEmail() {
    TEMP.email = INPUTS.email.value
}

function savePassword() {
    TEMP.pw = INPUTS.pw.value
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