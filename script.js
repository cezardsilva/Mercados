var elem = document.documentElement;
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function toggleFullScreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById("compr").style.visibility = "visible";
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        screen.orientation.lock("landscape");
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById("compr").style.visibility = "visible";
    document.getElementById("full").style.visibility = "hidden";
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    document.getElementById("full").style.visibility = "visible";
    document.getElementById("compr").style.visibility = "hidden";
}

function bodyOpen() {
    document.getElementById("compr").style.visibility = "hidden";
}
function BTC() {
    fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
        .then(res => res.json())
        .then(data => obj = data)
        .then((val) => console.log(obj.ticker.buy, obj.ticker.sell, obj.ticker.vol, obj.ticker.last, obj.ticker.high, obj.ticker.low, obj.ticker.date))
}

function atribuirCampos(val) {
    btclast.value = obj.ticker.last;
    btchigh.value = obj.ticker.high;
    btclow.value = obj.ticker.low;
    tbtc.value = obj.ticker.date;
    btcbuy.value = obj.ticker.buy;
    btcsell.value = obj.ticker.sell;
    btcvol.value = obj.ticker.vol;

    const currency = function (number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 8 }).format(number);
    };

    var t = tbtc.value;
    const datex = new Date(t * 1000);

    document.getElementById("btclast").innerHTML = currency(btclast.value);
    document.getElementById("btchigh").innerHTML = currency(btchigh.value);
    document.getElementById("btclow").innerHTML = currency(btclow.value);
    document.getElementById("btcbuy").innerHTML = currency(btcbuy.value);
    document.getElementById("btcsell").innerHTML = currency(btcsell.value);
    document.getElementById("btcvol").innerHTML = (btcvol.value);
    document.getElementById("tbtc").innerHTML = datex;
}

function Dolar() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(res => res.json())
        .then(data => obja = data)
        .then((val) => console.log(obja.USDBRL.bid, obja.USDBRL.ask, obja.USDBRL.high, obja.USDBRL.low, obja.USDBRL.timestamp))
}

function atribuirCampos2(val) {
    usdbid.value = obja.USDBRL.bid;
    usdask.value = obja.USDBRL.ask;
    usdhigh.value = obja.USDBRL.high;
    usdlow.value = obja.USDBRL.low;
    tdolar.value = obja.USDBRL.timestamp;
    var td = tdolar.value;
    var dated = new Date(td * 1000);

    const currency = function (number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 }).format(number);
    };

    document.getElementById("usdbid").innerHTML = currency(usdbid.value);
    document.getElementById("usdask").innerHTML = currency(usdask.value);
    document.getElementById("usdhigh").innerHTML = currency(usdhigh.value);
    document.getElementById("usdlow").innerHTML = currency(usdlow.value);
    document.getElementById("tdolar").innerHTML = dated;
}

function Euro() {
    fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
        .then(res => res.json())
        .then(data => objb = data)
        .then((val) => console.log(objb.EURBRL.bid, objb.EURBRL.ask, objb.EURBRL.high, objb.EURBRL.low, objb.EURBRL.timestamp))
}

function atribuirCampos3(val) {
    eubid.value = objb.EURBRL.bid;
    euask.value = objb.EURBRL.ask;
    euhigh.value = objb.EURBRL.high;
    eulow.value = objb.EURBRL.low;
    teuro.value = objb.EURBRL.timestamp;
    var te = teuro.value;
    var datee = new Date(te * 1000);

    const currency = function (number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 }).format(number);
    };

    document.getElementById("eubid").innerHTML = currency(eubid.value);
    document.getElementById("euask").innerHTML = currency(euask.value);
    document.getElementById("euhigh").innerHTML = currency(euhigh.value);
    document.getElementById("eulow").innerHTML = currency(eulow.value);
    document.getElementById("teuro").innerHTML = datee;
}

var intervalo = window.setInterval(teporizador, 1000);
function teporizador() {
    const currency = function (number) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 }).format(number);
    };
    BTC();
    atribuirCampos();
    Dolar();
    atribuirCampos2();
    Euro();
    atribuirCampos3();
    document.getElementById("price").innerHTML = currency(btclast.value / usdbid.value);
}
