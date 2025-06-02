
function initCartTemplate() {
    // Transaction Dates
    let strTransactionDates = '';
    let strTransactionBoxes = '';

    for (let i = USER.cart.item.length - 1; i > 0; i--) {
        if (i == USER.cart.item.length - 1) {
            strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i].onDate}">
                    </div>
                </div>
                `;
        }

        if (USER.cart.item[i].onDate != USER.cart.item[i - 1].onDate) {
            strTransactionDates += `
                <div class="transactionDateBox">
                    <div>${USER.cart.item[i - 1].onDate}</div>
                    <div class="transactionPosBox" id="on-${USER.cart.item[i - 1].onDate}">
                    </div>
                </div>
                `;
        }
    }

    document.getElementById('transactions').innerHTML = strTransactionDates;

    for (let i = USER.cart.item.length - 1; i > 0; i--) {
        document.getElementById(`on-${USER.cart.item[i].onDate}`).innerHTML += `
            <div class="transactionBox" id="transaction-0">
                <div>
                    <p>${USER.cart.item[i].name}</p>
                </div>
                <div>
                    <p>${USER.cart.item[i].price} €</p>
                </div>
                <div class="transactionBoxImg">
                    <img src="/img/util/trWhTr70.png" alt="Transparent Go Around">
                </div>
            </div>`
    }


}
initCartTemplate()

function showNewDevice(index) {
    let str = ''
    for (let i = 0; i < USER.cart.item.length; i++) {
        // str += `
        //     <div>
        //         <p>${USER.cart.item[index].name}</p>
        //     </div>
        //     <div>
        //         <p>${USER.cart.item[index].price} €</p>
        //     </div>
        //     <div class="transactionBoxImg">
        //         <img src="/img/util/trWhTr70.png" alt="Transparent Go Around">
        //     </div>
        // `

        document.getElementsByClassName('transactionPosBox').item(i).innerHTML = `
                <div class="transactionBox" id="transaction-1">
                    <div>
                        <p>${USER.cart.item[i].name}</p>
                    </div>
                    <div>
                        <p>${USER.cart.item[i].price} €</p>
                    </div>
                    <div class="transactionBoxImg">
                        <img src="/img/util/trWhTr70.png" alt="Transparent Go Around">
                    </div>
                </div>
                `;

        console.log(USER.cart.item[i]);
    }

    // document.getElementsByClassName('transactionBox').item(index).innerHTML = str
    // document.getElementsByClassName('transactionPosBox').item(i).innerHTML = str
}
// showNewDevice(0)
