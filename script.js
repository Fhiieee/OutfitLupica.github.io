const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupPrice = document.getElementById('popup-price');
const popupImg = document.getElementById('popup-img');
const popupDesc = document.getElementById('popup-desc');
const popupBtn = document.getElementById('popup-btn');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

/* Search produk */
if (searchInput) {
    searchInput.addEventListener('keyup', () => {
        const keyword = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(keyword) ? '' : 'none';
        });
    });
}

/* Active menu saat scroll */
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

/* Navbar berubah saat scroll */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

/* Toggle menu mobile */
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

/* Tutup menu setelah klik link */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

/* Scroll ke produk */
function scrollToProduk() {
    document.getElementById('produk').scrollIntoView({
        behavior: 'smooth'
    });
}

/* Popup produk */
function openProduk(nama, harga, gambar, deskripsi, link) {
    popupTitle.textContent = nama;
    popupPrice.textContent = harga;
    popupImg.src = gambar;
    popupImg.alt = nama;
    popupDesc.textContent = deskripsi;
    popupBtn.href = link;

    popup.style.display = 'block';
}

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
