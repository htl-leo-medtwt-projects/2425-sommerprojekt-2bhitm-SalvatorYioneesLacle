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

        str += `
                <div class="transactionDateBox" id="2025-04-09">
                    <div>09. 04. 2025</div>
                    <div class="transactionPosBox">
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
                    </div>
                </div>`

        console.log(USER.cart.item[i]);
    }
    
    // document.getElementsByClassName('transactionBox').item(index).innerHTML = str
    document.getElementById('transactions').innerHTML = str
}
showNewDevice(0)
