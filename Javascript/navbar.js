// untuk tombol search




// untuk tombol bar reponsive
const mobilemenu = document.querySelector('.mobile')
const menuBtn = document.querySelector('.menuBtn');
let menuBtnDisplay = true;

menuBtn.addEventListener('click', function() {
    mobilemenu.classList.toggle("hidden")
    console.log('Tombol Menu diklik!');
});

// penggabungan

    const header = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    fetch('./navbar.html').then(snap => snap.text()).then(result =>{
        navbar.innerHtml = result;
    })