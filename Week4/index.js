// inisialisasi array random (1-50) 100 baris
const nilaiRandom = [];
for ( let i = 1; i <= 100 ; i++) {
    nilaiRandom.push(Math.floor(Math.random() * 50) + 1);
}
console.log(nilaiRandom);

// function memecah array dengan index genap & ganjil
function pecahArray(arr) {
    const arrGenap = [];
    const arrGanjil = [];
    for ( key in arr) {
        if ( key % 2 == 0 ) arrGenap.push(arr[key])
        else arrGanjil.push(arr[key])
}
return [arrGenap, arrGanjil];
}

// function mencari nilai MAX
function maxArray(arr) {
    let max = arr[0];
    for (key in arr) {
        while ( arr[key] > max) {
            max = arr[key]
        }
    }
    return max;
}

// function mencari nilai MIN
function minArray(arr) {
    let min = arr[0];
    for (key in arr) {
        while ( arr[key] < min) {
            min = arr[key]
        }
    }
    return min;
}

// menghitung total/SUM array
function total(arr) {
    let total = 0
    for (key in arr) {
        total += arr[key]
    }
    return total
}

// menghitung rata - rata array
function rataRata(arr) {
    return total(arr) / arr.length
}

// menghitung perbandingan 2 data
function perbandingan(data1, data2) {
    if (data1 > data2) return  "Genap <b>Lebih Besar</b> dari Ganjil | " + data1 + " > " + data2
    else if (data1 < data2) return "Genap <b>Lebih Kecil</b> dari Ganjil | " + data1 + " < " + data2
    else return "Genap <b>Sama Besar</b> dari Ganjil | " + data1 + " = " + data2
}


const [arrGenap, arrGanjil] = pecahArray(nilaiRandom);
console.log("nilai random genap  = ", arrGenap);
console.log("nilai random ganjil = ", arrGanjil);

let nilaiMaxGenap = maxArray(arrGenap);
let nilaiMinGenap = minArray(arrGenap);
let nilaiTotalGenap = total(arrGenap);
let nilaiRataRataGenap = rataRata(arrGenap);
let nilaiMaxGanjil = maxArray(arrGanjil);
let nilaiMinGanjil = minArray(arrGanjil);
let nilaiTotalGanjil = total(arrGanjil);
let nilaiRataRataGanjil = rataRata(arrGanjil);
let bandingMax = perbandingan(nilaiMaxGenap, nilaiMaxGanjil);
let bandingMin = perbandingan(nilaiMinGenap, nilaiMinGanjil);
let bandingTotal = perbandingan(nilaiTotalGenap, nilaiTotalGanjil);
let bandingRataRata = perbandingan(nilaiRataRataGenap, nilaiRataRataGanjil);

console.log("nilai array MAX GENAP = ", nilaiMaxGenap);
console.log("nilai array MIN GENAP = ", nilaiMinGenap);
console.log("nilai array Total GENAP = ", nilaiTotalGenap);
console.log("nilai array Rata - Rata GENAP = ", nilaiRataRataGenap);
console.log("nilai array MAX GANJIL = ", nilaiMaxGanjil);
console.log("nilai array MIN GANJIL = ", nilaiMinGanjil);
console.log("nilai array Total GANJIL = ", nilaiTotalGanjil);
console.log("nilai array Rata - Rata GANJIL = ", nilaiRataRataGanjil);
console.log("nilai array Perbandingan data MAX = ", bandingMax);
console.log("nilai array Perbandingan data MIN = ", bandingMin);
console.log("nilai array Perbandingan data TOTAL = ", bandingTotal);
console.log("nilai array Perbandingan data Rata - Rata = ", bandingRataRata);

nilaiRandom.forEach((item, index) => {
    document.getElementById("nilaiRandomIndex").innerHTML += `<td class="fw-light text-center"> ${index} </td>`; //tabel 1#
    document.getElementById("genapGanjilIndex").innerHTML += `<td class="fw-light text-center"> ${index} </td>`; //tabel 2#
    document.getElementById("nilaiRandom").innerHTML += `<td class="text-center fs-4"> ${item} </td>`; //tabel 1#
});
arrGenap.forEach((item) => {
    document.getElementById("arrGenap").innerHTML += `<td class="text-center fs-4 align-middle"> ${item} </td><td></td>`; //tabel 2#
});
arrGanjil.forEach((item) => {
    document.getElementById("arrGanjil").innerHTML += `<td></td><td class="text-center fs-4 align-middle"> ${item} </td>`; //tabel 2#
});
document.getElementById("nilaiMaxGenap").innerHTML = nilaiMaxGenap
document.getElementById("nilaiMinGenap").innerHTML = nilaiMinGenap
document.getElementById("nilaiMaxGanjil").innerHTML = nilaiMaxGanjil
document.getElementById("nilaiMinGanjil").innerHTML = nilaiMinGanjil
document.getElementById("nilaiTotalGenap").innerHTML = nilaiTotalGenap
document.getElementById("nilaiRataRataGenap").innerHTML = nilaiRataRataGenap
document.getElementById("nilaiTotalGanjil").innerHTML = nilaiTotalGanjil
document.getElementById("nilaiRataRataGanjil").innerHTML = nilaiRataRataGanjil
document.getElementById("bandingMax").innerHTML = bandingMax
document.getElementById("bandingMin").innerHTML = bandingMin
document.getElementById("bandingTotal").innerHTML = bandingTotal
document.getElementById("bandingRataRata").innerHTML = bandingRataRata

