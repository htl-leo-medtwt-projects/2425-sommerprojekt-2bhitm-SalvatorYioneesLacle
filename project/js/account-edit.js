
function initPageIcon() {
    document.getElementsByTagName('head').item(0).innerHTML += `<link rel="icon" href="../../img/logos/logo.png" type="image/x-icon" />`
}
initPageIcon();

function initNavigationbar() {
    document.getElementsByTagName('nav').item(0).innerHTML = `
            <a id="nav-logo" href="../../index.html">
                <img src="../../img/logos/logo.png" alt="ExpertShop logo">
            </a>`;
}
initNavigationbar()

function checkSignUpStage2() {
    TEMP.username = INPUTS.username.value

    saveUserData()
    toAccountOverview()
}

function saveUserData() {
    USER.username = TEMP.username
    localStorage['acc-username'] = USER.username

    USER.pfp = TEMP.pfp
    localStorage['acc-pfp'] = USER.pfp

    USER.logInStatus = true;
    localStorage['acc-logInStatus'] = USER.logInStatus
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
    localStorage['acc-logInStatus'] = USER.logInStatus;

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

    USER.pfp = TEMP.pfp
    localStorage['acc-pfp'] = USER.pfp
    
    // saveUserData()
    toAccountOverview();
}

function saveUsername() {
    TEMP.username = INPUTS.username.value
}

function savePfp(index) {
    TEMP.pfp = `img/pfp/${index}.png`
    console.log(TEMP.pfp);

    for (let i = 0; i < 10; i++) {
        if (i == index) {
            document.getElementById(`pfp-${i}`).style.backgroundColor = 'var(--darkgray)'
            document.getElementById(`pfp-${i}`).style.borderRadius = '0'
        } else {
            document.getElementById(`pfp-${i}`).style.backgroundColor = 'transparent'
            document.getElementById(`pfp-${i}`).style.borderRadius = '3em'
        }
    }
}

function saveCustomPfp() {
    if (document.getElementById('custom-pfp-input').value.split(':')[0].includes('http')) {
        TEMP.pfp = document.getElementById('custom-pfp-input').value
    }

    if (document.getElementById('custom-pfp-input').value.split(':')[0].includes('C')) {
        TEMP.pfp = '../../../../../../../../..' + document.getElementById('custom-pfp-input').value.split(':')[1].replace('\ ', '/')
    }
    console.log(TEMP.pfp);
}

function toPaymentPage() {
    window.location.href = `../shop-payment.html`;
}

function toAccountEdit() {
    window.location.href = `./account-edit.html`;
}

function toSignUpSetupScreen() {
    window.location.href = `./account-signup-setup.html`;
}

function toLogOutScreen() {
    window.location.href = `./account-signout-done.html`;
}

function toAccountDeleteScreen() {
    window.location.href = `./account-delete.html`;
}

function toAccountDeleteDone() {
    window.location.href = `./account-delete-done.html`;
}

function toAccountOverview() {
    window.location.href = `./account-overview.html`;
}

function toHomepage() {
    window.location.href = `../../index.html`;
}
