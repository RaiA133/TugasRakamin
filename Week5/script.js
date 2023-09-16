class Pendaftar {
    constructor(nama, umur, uangSangu) {
        this.setNama(nama);
        this.setUmur(umur);
        this.setUangSangu(uangSangu);
    }

    setNama(nama) {
        if (nama.length < 10) {
            throw new Error('Nama minimal 10 karakter.');
        }
        this.nama = nama;
    }

    setUmur(umur) {
        if (umur < 25) {
            throw new Error('Umur minimal 25 tahun.');
        }
        this.umur = umur;
    }

    setUangSangu(uangSangu) {
        if (uangSangu < 100000 || uangSangu > 1000000) {
            throw new Error('Uang Sangu harus antara Rp.100.000 dan Rp.1.000.000.');
        }
        this.uangSangu = uangSangu;
    }
}

class PendaftarManager {
    constructor() {
        this.pendaftarList = [];
    }

    tambahPendaftar(nama, umur, uangSangu) {
        const pendaftar = new Pendaftar(nama, umur, uangSangu);
        this.pendaftarList.push(pendaftar);
    }

    hitungRataRata() {
        const totalUmur = this.pendaftarList.reduce((acc, pendaftar) => acc + pendaftar.umur, 0);
        const totalUangSangu = this.pendaftarList.reduce((acc, pendaftar) => acc + pendaftar.uangSangu, 0);
        const rataRataUmur = totalUmur / this.pendaftarList.length;
        const rataRataUangSangu = totalUangSangu / this.pendaftarList.length;
        return {
            rataRataUmur,
            rataRataUangSangu
        };
    }
}

const pendaftarManager = new PendaftarManager();

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.style.display = 'none');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    document.getElementById(`tab${tabName}`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    openTab('Registrasi'); // Membuka tab 'Registrasi' secara default saat halaman dimuat
});

function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);

    try {
        pendaftarManager.tambahPendaftar(nama, umur, uangSangu);

        // Update tabel dan resume
        updateTabel();
        updateResume();

        // Reset form
        document.getElementById('nama').value = '';
        document.getElementById('umur').value = '';
        document.getElementById('uangSangu').value = '';

        // Tampilkan pesan sukses dengan countdown
        const keterangan = document.getElementById('keterangan');
        keterangan.innerHTML = "Data Berhasil Ditambahkan, Ke List Pendaftar (<span id='countdown'>5</span>)";

        // Hitung mundur selama 5 detik
        let countdown = 5;
        const countdownElement = document.getElementById('countdown');
        const countdownInterval = setInterval(function () {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                keterangan.innerHTML = ""; // Hapus pesan setelah hitungan mundur selesai
            }
        }, 1000); // Update setiap 1 detik (1000 milidetik)

    } catch (error) {
        alert(error.message);
    }
}


function updateTabel() {
    const tableBody = document.getElementById('pendaftarBody');
    const newRow = tableBody.insertRow();
    const cellNama = newRow.insertCell(0);
    const cellUmur = newRow.insertCell(1);
    const cellUangSangu = newRow.insertCell(2);

    const pendaftar = pendaftarManager.pendaftarList[pendaftarManager.pendaftarList.length - 1];

    cellNama.innerHTML = pendaftar.nama;
    cellUmur.innerHTML = pendaftar.umur;
    cellUangSangu.innerHTML = pendaftar.uangSangu;
}

function updateResume() {
    const { rataRataUmur, rataRataUangSangu } = pendaftarManager.hitungRataRata();
    const resume = document.getElementById('resume');
    resume.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar Rp. ${rataRataUangSangu.toFixed(2)} dengan rata-rata umur ${rataRataUmur.toFixed(2)} tahun.`;
}
