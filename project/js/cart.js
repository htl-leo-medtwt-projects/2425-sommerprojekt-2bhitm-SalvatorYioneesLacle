function showNewDevice(index) {
    document.getElementsByClassName('transactionBox').item(index).innerHTML = `
        <div>
            <p>${USER.cart.device[index].name}</p>
        </div>
        <div>
            <p>379,54 €</p>
        </div>
        <div class="transactionBoxImg">
            <img src="/img/util/trWhTr70.png" alt="Transparent Go Around">
        </div>
    `;
}

showNewDevice(0)