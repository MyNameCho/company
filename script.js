document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animation');

    // Buat observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Hentikan pengamatan setelah animasi selesai (opsional)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Elemen harus terlihat 20% sebelum animasi dimulai
    });

    // Daftarkan semua elemen dengan class .scroll-animation
    elements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".lazy-load");

    images.forEach((img) => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });

        // Jika gambar sudah dalam cache browser (diulang-ulang), langsung tambahkan animasi.
        if (img.complete) {
            img.classList.add("loaded");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".lazy-load");

    icons.forEach((icon) => {
        icon.addEventListener("load", () => {
            icon.classList.add("loaded");
        });

        // Jika ikon sudah dalam cache browser, langsung tambahkan class loaded.
        if (icon.complete) {
            icon.classList.add("loaded");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('testi-slider');

    // Fungsi untuk menggeser ke slide berikutnya
    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;  // Loop kembali ke awal jika sudah mencapai akhir
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Set interval untuk mengganti slide setiap 3 detik
    setInterval(goToNextSlide, 3000);
});