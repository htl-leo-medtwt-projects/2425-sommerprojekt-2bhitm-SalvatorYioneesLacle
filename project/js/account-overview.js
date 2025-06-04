function initAccountOverview() {
    document.getElementById('accountDetails').innerHTML = `
        <div>
            <p>${USER.username}</p>
        </div>
        <div onclick="toAccountEdit()">
            <img src="${USER.pfp.split(':')[0].includes('http') ? USER.pfp : '../../' + USER.pfp}" alt="${USER.username}">
        </div>
    `;

    document.getElementById('accountBalance').innerHTML = `
        <p>${USER.money.toFixed(2)} €</p>
    `;
}
initAccountOverview()