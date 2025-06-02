function initPfp() {
    let str = ``;
    for (let i = 0; i < 10; i++) {
        str += `
        <div id="pfp-${i}" onclick="savePfp(${i})">
            <img src="../../img/pfp/${i}.png" alt="image-${i}">
        </div>
        `;
    }
    document.getElementById('accountPfpBox').innerHTML = str;
}
initPfp()