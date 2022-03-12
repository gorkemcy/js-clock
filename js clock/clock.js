let userName =prompt("Adınızı Griniz :")
if( (userName != "") && (userName != null) ) {
    document.getElementById("myName").innerHTML=`${userName[0].toUpperCase()}${userName.slice(1)}` 
} else if (userName=="")
alert ("BOŞ GİRİŞ YAPTINIZ !")

else if (userName==null)
alert ("Giriş yapmaktan vazgeçtiniz")

//date
// Day
let d;
switch (new Date().getDay()) {
    case 0:
        d = "Pazar";
        break;
    case 1:
        d = "Pazartesi";
        break;
    case 2:
        d = "Salı";
        break;
    case 3:
        d = "Çarşamba";
        break;
    case 4:
        d = "Perşembe";
        break;
    case 5:
        d = "Cuma";
        break;
    case 6:
        d = "Cumartesi";
        break;
}

// Clock
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + d;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();