const btnTema = document.querySelector ('#btnToggleTema');
const bodyHalaman = document.querySelector ('body');

btnTema.addEventListener ('click' , function (){ 
    bodyHalaman. classList. toggle ('light-mode');
    if (bodyHalaman.classList.contains ('light-mode')) {
      btnTema.textContent = ' 🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang'
    }
});

const btnBukaModal = document.querySelector ('#btnKontak');
const elemenModal = document.querySelector ('#modalKontak');
const btnTutupModal = document.querySelector ('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault(); 
    elemenModal.classList.add ('show');
});

btnTutupModal.addEventListener ('click', function(){
    elemenModal.classList.remove('show');
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if (elemenModal.classList.contains('show')) {
            elemenModal.classList.remove('show');
            console.log('modal ditutup menggunakan tombol ESC');
        }
    }
});

const avatarIcon = document.querySelector('.avatar-icon');

if (avatarIcon) {
    avatarIcon.addEventListener('click', function () {
        avatarIcon.classList.remove('putar');

        // Memulai ulang animasi setiap kali avatar diklik
        void avatarIcon.offsetWidth;

        avatarIcon.classList.add('putar');
    });
}

function ubahGreetingOtomatis(juniorWebDeveloper) {
    const jam = new Date().getHours();
    let ucapan = "";

    if (jam >= 5 && jam < 10) {
        ucapan = "Selamat Pagi 🌇";
    } else if (jam >= 10 && jam < 14) {
        ucapan = "Selamat Siang ☀️";
    } else if (jam >= 14 && jam < 18) {
        ucapan = "Selamat Sore 🌅";
    } else if (jam>= 18 && jam < 22) {
        ucapan = "Selamat Malam 🌙"; 
    }
    const hasilucapan = juniorWebDeveloper.replace(/Junior Web Developer/g,ucapan);

    return hasilucapan;
}

const elemenRole = document.querySelector('.student-role');
elemenRole.textContent =
ubahGreetingOtomatis(elemenRole.textContent);

const avatar = document.querySelector("#avatarProfil");

if (avatar) {
    avatar.addEventListener("click", function() {
        avatar.classList.add("putar-avatar");
        avatar.addEventListener("animationend", function() {
            avatar.classList.remove("putar-avatar");
        }, { once: true });
    });
}
