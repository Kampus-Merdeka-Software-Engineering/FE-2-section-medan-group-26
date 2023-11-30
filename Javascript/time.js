// scripts.js
window.onload = function() {
    displayDateTime1();
    displayDateTime2();
    displayDateTime3();
    displayDateTime4();
};

function displayDateTime1() {
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let currentDate = new Date();
    let hari = days[currentDate.getDay()];
    let tanggal = currentDate.getDate();
    let bulan = months[currentDate.getMonth()];
    let tahun = currentDate.getFullYear();
    let jam = currentDate.getHours();
    let menit = currentDate.getMinutes();
    let detik = currentDate.getSeconds();

    // Format jam, menit, dan detik dengan format dua digit jika kurang dari 10
    jam = (jam < 10 ? "0" : "") + jam;
    menit = (menit < 10 ? "0" : "") + menit;
    detik = (detik < 10 ? "0" : "") + detik;

    document.getElementById('hari1').innerHTML = "" + hari;
    document.getElementById('tanggal1').innerHTML = "" + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam1').innerHTML = "" + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime, 1000); // Perbarui setiap detik
}

function displayDateTime2() {
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let currentDate = new Date();
    let hari = days[currentDate.getDay()];
    let tanggal = currentDate.getDate();
    let bulan = months[currentDate.getMonth()];
    let tahun = currentDate.getFullYear();
    let jam = currentDate.getHours();
    let menit = currentDate.getMinutes();
    let detik = currentDate.getSeconds();

    // Format jam, menit, dan detik dengan format dua digit jika kurang dari 10
    jam = (jam < 10 ? "0" : "") + jam;
    menit = (menit < 10 ? "0" : "") + menit;
    detik = (detik < 10 ? "0" : "") + detik;

    document.getElementById('hari2').innerHTML = "" + hari;
    document.getElementById('tanggal2').innerHTML = "" + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam2').innerHTML = "" + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime, 1000); // Perbarui setiap detik
}

function displayDateTime3() {
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let currentDate = new Date();
    let hari = days[currentDate.getDay()];
    let tanggal = currentDate.getDate();
    let bulan = months[currentDate.getMonth()];
    let tahun = currentDate.getFullYear();
    let jam = currentDate.getHours();
    let menit = currentDate.getMinutes();
    let detik = currentDate.getSeconds();

    // Format jam, menit, dan detik dengan format dua digit jika kurang dari 10
    jam = (jam < 10 ? "0" : "") + jam;
    menit = (menit < 10 ? "0" : "") + menit;
    detik = (detik < 10 ? "0" : "") + detik;

    document.getElementById('hari3').innerHTML = "" + hari;
    document.getElementById('tanggal3').innerHTML = "" + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam3').innerHTML = "" + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime, 1000); // Perbarui setiap detik
}

function displayDateTime4() {
    let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let currentDate = new Date();
    let hari = days[currentDate.getDay()];
    let tanggal = currentDate.getDate();
    let bulan = months[currentDate.getMonth()];
    let tahun = currentDate.getFullYear();
    let jam = currentDate.getHours();
    let menit = currentDate.getMinutes();
    let detik = currentDate.getSeconds();

    // Format jam, menit, dan detik dengan format dua digit jika kurang dari 10
    jam = (jam < 10 ? "0" : "") + jam;
    menit = (menit < 10 ? "0" : "") + menit;
    detik = (detik < 10 ? "0" : "") + detik;

    document.getElementById('hari4').innerHTML = "" + hari;
    document.getElementById('tanggal4').innerHTML = "" + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam4').innerHTML = "" + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime, 1000); // Perbarui setiap detik
}




