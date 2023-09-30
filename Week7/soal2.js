const fs = require('fs');
const localModule = require('./soal1.js')
const path = require('path')

const logFilePath = path.join(__dirname, 'log.txt')     // file yang di jadikan tempat simpan riwayat LOG

    const data1 = localModule.Segitiga(10,20,5)         // from local module
    const data2 = localModule.Segitiga(78,22,12)        //
    const data3 = localModule.Segitiga(413,152,76)      //

    pilihData = data3                                   // pilih data untuk melihat perbedaan hasil
    
    const ProgramSegitiga = `${pilihData.status} | ${pilihData.deskripsi} | luas : ${pilihData.luas} & keliling : ${pilihData.keliling}`

/* menulis ke LOG */
const writeToLog = (pesanLog, logFilePath) => {
    const waktuTerbaru = new Date().toLocaleString()
    const logEntry = `${waktuTerbaru} ${pesanLog} \n`
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) { console.error('\n\n###### LOG GAGAL DISIMPAN | ', err, ' ######') } 
        else { 
            console.log("\n###### LOG PROGRAM BERHASIL DISIMPAN ######\n Path : ", logFilePath, "\n") 
        }
    });  
}

/* membaca LOG */
const readLog = (logFilePath) => {
    try {
        const logData = fs.readFileSync(logFilePath, 'utf-8')
        console.log("###### ISI DATA LOG ######\n", logData)
    } catch(err) {
        console.error('Gagal membaca file log: ', err)
    }
}

setTimeout(() => { readLog(logFilePath) }, 1000)    // membaca LOG DI console ( <tempat simpan LOG> )
writeToLog(ProgramSegitiga, logFilePath)            // menjalankan program ( <nama Program>, <tempat Simpan Log> )