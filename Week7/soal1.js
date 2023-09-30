// LOCAL MODULE (soal1) //

/* LUAS & KELILING SEGITIGA */
exports.Segitiga = (alas, tinggi, sisi) => {
    let luas = (alas * tinggi) / 2
    let keliling = sisi * 3
    const deskripsi = `Proram Hitung LUAS & KELILING Segitiga`
    const status = `BERHASil`
    return {luas, keliling, deskripsi, status}
}
