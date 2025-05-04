function initAccountOverview() {
    document.getElementById('accountDetails').innerHTML = `
        <div>
            <p>${USER.username}</p>
        </div>
        <div>
            <img src="${USER.pfp}" alt="${USER.username}">
        </div>
    `;

    document.getElementById('accountBalance').innerHTML = `
        <p>${USER.money} €</p>
    `;
}
initAccountOverview()