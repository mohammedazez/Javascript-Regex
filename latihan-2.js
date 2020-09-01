function memvalidasi(cekNomor) {
  regexp = /^\d{10,12}$/;
  if (regexp.test(cekNomor)) {
    alert("Terimakasih nomor yang anda masukkan sudah benar");
  } else {
    alert("Nomor handphone minimum 10 digit dan maksimum 12 digit");
  }
}

let nomer = parseInt(prompt("masukan nomor yang ingin anda masukkan: "));
memvalidasi(nomer);
