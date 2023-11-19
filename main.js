let slideIndex = 0;  // ini untuk gambar
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Ganti gambar setiap 5 detik
}

window.onload = function() {
    displayDateTime1();
    displayDateTime2();
};

function displayDateTime1() { // ini untuk hari, tanggal, jam
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

    document.getElementById('hari1').innerHTML = hari + ",";
    document.getElementById('tanggal1').innerHTML = " " + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam1').innerHTML = " " + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime1, 1000); // Perbarui setiap detik
}

function displayDateTime2() { // ini untuk hari, tanggal, jam
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

    document.getElementById('hari2').innerHTML = hari + ",";
    document.getElementById('tanggal2').innerHTML = " " + tanggal + " " + bulan + " " + tahun;
    document.getElementById('jam2').innerHTML = " " + jam + ":" + menit + ":" + detik;

    setTimeout(displayDateTime2, 1000); // Perbarui setiap detik
}