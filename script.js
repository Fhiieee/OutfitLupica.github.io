const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupPrice = document.getElementById('popup-price');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");
const popupImg = document.getElementById('popup-img');
const popupDesc = document.getElementById('popup-desc');

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

/* Toggle menu mobile */
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/* Tutup menu setelah klik link */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

/* Scroll ke section produk */
function scrollToProduk() {
    document.getElementById('produk').scrollIntoView({
        behavior: 'smooth'
    });
}

/* Buka popup produk */

function openProduk(nama, harga, gambar, deskripsi, link) {
    popupTitle.textContent = nama;
    popupPrice.textContent = harga;
    popupImg.src = gambar;
    popupDesc.textContent = deskripsi;

    popupBtn.href = link; // ini buat tombol

    popup.style.display = 'block';
}

const popupBtn = document.getElementById('popup-btn');

/* Tutup popup */
function closePopup() {
    popup.style.display = 'none';
}

/* Tutup popup kalau klik area luar */
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
