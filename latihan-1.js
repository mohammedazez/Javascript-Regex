function cekHuruf(huruf) {
  regexp = /^[A-Z]/;
  if (regexp.test(huruf)) {
    alert("Huruf pertama adalah huruf besar");
  } else {
    alert("Huruf pertama adalah huruf kecil");
  }
}

let input = prompt("masukkan kata kunci untuk cek hasil dan besarnya: ");
console.log(cekHuruf(input));
