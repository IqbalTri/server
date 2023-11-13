const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = '127.0.0.1';
const port = 3001;

// request = data masuk
// response = data keluar
const server = http.createServer(function (request, response){
    const name = "Iqbal Tri";
    let uang = 500000;
    let jajan = 100000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang berhasil disimpan');
    });

    const hasil = `halo nama saya ${name} saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa} `;
    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '', function(){
    console.log(`server menyala di ${host}:${port}`);
});