// 1 . test() artinya mengemballikan nilai BOOLEAN (TRUE/FALSE) untuk kecocokan sebuah text
let regex1 = new RegExp("monkeys");
let regex2 = /monkeys/;
// True
console.log(regex1.test("monkeys"));
console.log(regex2.test("monkeys"));
// False
console.log(regex1.test("monkey"));
console.log(regex2.test("monkey"));

// Menggunakan karakter set
// Huruf
let regex3 = new RegExp("[a-z]");
let regex4 = /[a-z]/;
console.log(regex3.test("abcdefghij"));
console.log(regex4.test("Muhamad Aziz"));
// Angka
let regex5 = /[1-10]/;
console.log(regex5.test(5));

// 2. match() artinya mengembalikan nilai array dari karakter yang match
let myRegex = /d/;
let myName = "David Windalda";
console.log(myName.match(myRegex));

let kataKunci = /m/i;
let kataKunci2 = /m/gi;
let namaSaya = "Muhamad Aziz";
console.log(namaSaya.match(kataKunci));
console.log(namaSaya.match(kataKunci2));

// Karakter set short syntax
// \d yaitu seluruh nomor karakater contohnya  [0-9]
// \w yaitu semua abjad dan nomor contohnya [A-Za-z0-9]
// \s yaitu karakter Whitespace (space, tab, newline, and similiar) contohnya [\t\r\n\f\v]
// \D yaitu tidak mengandung seluruh nomor contohnya [^0-9]
// \W yaitu tidak mengandung abjad dan nomor contohnya [^A-Za-z0-9]
// \S yaitu tidak mengandung karakter whitespace (space, tab, newline, and similar) contohnya [^\t\r\n\f\v]

let kataKunci3 = /\w\w\w\w\w\w\w\s\w\w\w\w\s\d\d\d/;
let namaGue = "Muhamad Aziz 047";
console.log(kataKunci3.test(namaGue));

let notBinary = /[^01]/;
console.log(notBinary.test("01010101010110"));
console.log(notBinary.test("0101010101011032323"));

// Quantifiers lanjutkan belajar habis ini
