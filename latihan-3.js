function cariKataKunci(elemen) {
  regexp = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
  if (regexp.test(elemen)) {
    alert("Kalimat ditemukan");
  } else {
    alert("kalimat tidak ditemukan");
  }
}

let huruf = prompt("Cari kata pencurian yang ingin anda masukkan : ");
cariKataKunci(huruf);
