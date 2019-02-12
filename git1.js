var angka = [1, 25, 10, 29, 30]

x = angka.sort ((a, b) => a - b)

console.log(angka);
console.log(x);

jumlah = () => {
    var hasil = angka[1] + angka[3]
    
    return hasil
}
console.log(jumlah());

kurang = () => {
    var hasil = angka[1] - angka[3]
    
    return hasil
}
console.log(jumlah());
