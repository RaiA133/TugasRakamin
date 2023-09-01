
function suhu() {
    let suhu = document.getElementById("suhuInput").value;
    let keadaan = "";

    if (suhu >= 101 && suhu <= 500) {
        keadaan = "UAP";
    } else if (suhu >= 1 && suhu <= 100 ) {
        keadaan = "CAIR";
    } else if (suhu >= -100 && suhu <= 0) {
        keadaan = "BEKU"; 
    } else {
        keadaan = "tidak terdefinisi";
    }
    document.getElementById("suhu").innerHTML = keadaan;
}
function bbm() {
    let plat = document.getElementById("platInput").value;
    let mobilCC = document.getElementById("ccInput").value;
    let BBM = "";

    if (plat == "kuning" || plat == "motor") {
        BBM = "SUBSIDI";
    } else if (mobilCC < 1500 && plat != "kuning") {
        BBM = "PERTAMAX";
    } else if (mobilCC >= 1500 && plat != "kuning") {
        BBM = "PERTAMAX TURBO";
    } else if (plat == "" || mobilCC == "") {
        BBM = "silahkan pilih"
    }
    return document.getElementById("bbm").innerHTML = BBM; 
}