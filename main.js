function clock()
{
    const deg   =   6;
    const time  =   new Date();
    var second  =   time.getSeconds() * deg;
    var minute  =   time.getMinutes() * deg;
    var hour    =   time.getHours()   * 30 +(minute / 12); //akrebin yavaş yavaş dönmesini sağlıyor
    document.querySelector('.second').style.transform="rotate(" + second + "deg)";
    document.querySelector('.minute-hand').style.transform="rotate(" + minute + "deg)";
    document.querySelector('.scorpion').style.transform="rotate(" + hour + "deg)";
}
clock(); //setInterval 1sn geç başladığı için önce fonksiyonu çağırdım.
setInterval(clock, 1000);