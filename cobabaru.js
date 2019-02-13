var data = []
var bulan = [
    "January", "Februari", "Maret",
    "April", "Mei", "Juni",
    "Juli", "Agustus", "September",
    "Oktober", "November", "Desember"
]

fnInput = () =>{
    var tglLahir = document.getElementById("tgl").value,
        j = new Date (tglLahir)
        y = j.getMonth()
        day = parseInt(j.getDate()),
        month = bulan[y],
        year = parseInt(j.getFullYear()),
        nama = document.getElementById("nama").value,
        kota = document.getElementById("city").value,
        usia = 2019 - year,
        pensiun = (2019 - year) - 55
        zodiak = fnZod((y+1), day)

        data [data.length] = {nama, day, month, year, usia, kota, pensiun, zodiak}
    FakeMap()
    fnTable()
}

FakeMap = () => {
    var x = []
    for (let i = 0; i < data.length; i++) {
        x [x.length] =
        `<tr>
            <td>${data[i].nama}</td>
            <td>${data[i].day}</td>
            <td>${data[i].month}</td>
            <td>${data[i].year}</td>
            <td>${data[i].zodiak}</td>
            <td>${data[i].usia}</td>
            <td>${data[i].pensiun}</td>
            <td>${data[i].kota}</td>
            <td><button onclick = "fnHapus(${i})">Hapus</button>
            <button onclick = "fnEdit(${i})">Edit</button></td>
        </tr>`
    }
    document.getElementById("body").innerHTML = x.join("")
}

fnTable = () => {
    if (data.length == 0) {
        document.getElementById("myTable").style.display = "none"
    } else {
        document.getElementById("myTable").style.display = ""
    }
}

fnZod = (val1, val2) => {
    if (val1 == 1) {
        if (val2 >= 1 && val2 <= 20 ) {
            var zodiak = "Capricorn"
        } else {
            var zodiak = "Aquarius"
        }
    } else if (val1 == 2) {
        if (val2 >= 1 && val2 <= 18 ) {
            var zodiak = "Aquarius"
        } else {
            var zodiak = "Pieces"
        }
    } else if (val1 == 3) {
        if (val2 >= 1 && val2 <= 20 ) {
            var zodiak = "Pieces"
        } else {
            var zodiak = "Aries"
        }
    } else if (val1 == 4) {
        if (val2 >= 1 && val2 <= 19 ) {
            var zodiak = "Aries"
        } else {
            var zodiak = "Taurus"
        }
    } else if (val1 == 5) {
        if (val2 >= 1 && val2 <= 20 ) {
            var zodiak = "Taurus"
        } else {
            var zodiak = "Gemini"
        }
    } else if (val1 == 6) {
        if (val2 >= 1 && val2 <= 20 ) {
            var zodiak = "Gemini"
        } else {
            var zodiak = "Cancer"
        }
    } else if (val1 == 7) {
        if (val2 >= 1 && val2 <= 22 ) {
            var zodiak = "Cancer"
        } else {
            var zodiak = "Leo"
        }
    } else if (val1 == 8) {
        if (val2 >= 1 && val2 <= 22 ) {
            var zodiak = "Leo"
        } else {
            var zodiak = "Virgo"
        }
    } else if (val1 == 9) {
        if (val2 >= 1 && val2 <= 22 ) {
            var zodiak = "Virgo"
        } else {
            var zodiak = "Libra"
        }
    } else if (val1 == 10) {
        if (val2 >= 1 && val2 <= 22 ) {
            var zodiak = "Libra"
        } else {
            var zodiak = "Scorpio"
        }
    } else if (val1 == 11) {
        if (val2 >= 1 && val2 <= 21 ) {
            var zodiak = "Scorpio"
        } else {
            var zodiak = "Sagitarius"
        }
    } else if (val1 == 12) {
        if (val2 >= 1 && val2 <= 21 ) {
            var zodiak = "Sagitarius"
        } else {
            var zodiak = "Capricorn"
        }
    }
    return zodiak
}

fnHapus = (hapus) => {
    data.splice(hapus, 1)
    FakeMap()
    fnTable()
}

fnEdit = (edit) => {
    document.getElementById("ubah").style.display = ""

}

fnSortNamaA = () => {
    var k = data.sort(function (a, b) {
        l = a.nama.toLowerCase();
        m = b.nama.toLowerCase();
        if (l < m) {
            return -1
        }
        if (l > m) {
            return 1
        }
        return 0;
    });
    FakeMap()
    return k
}

fnSortNamaD = () => {
    var k = data.sort(function (a, b) {
        l = a.nama.toLowerCase();
        m = b.nama.toLowerCase();
        if (l > m) {
            return -1
        }
        if (l < m) {
            return 1
        }
        return 0;
    });
    FakeMap()
    return k
}

fnSortUmurA = () => {
    var k = data.sort(function (a, b) {
        return a.usia - b.usia
    })
    FakeMap()
    return k
}

fnSortUmurD = () => {
    var k = data.sort(function (a, b) {
        return b.usia - a.usia
    })
    FakeMap()
    return k
}

fnSortKotaA = () => {
    var k = data.sort(function (a, b) {
        l = a.kota.toLowerCase();
        m = b.kota.toLowerCase();
        if (l < m) {
            return -1
        }
        if (l > m) {
            return 1
        }
        return 0;
    });
    FakeMap()
    return k
}

fnSortKotaD = () => {
    var k = data.sort(function (a, b) {
        l = a.kota.toLowerCase();
        m = b.kota.toLowerCase();
        if (l > m) {
            return -1
        }
        if (l < m) {
            return 1
        }
        return 0;
    });
    FakeMap()
    return k
}