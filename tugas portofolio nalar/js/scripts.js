/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

    // Teks yang ingin ditampilkan
    var teks = "I'm a Full Stack Developer";

    // Kecepatan mengetik (dalam milidetik)
    var kecepatanKetik = 100; // Anda bisa mengatur kecepatan sesuai kebutuhan

    // Inisialisasi variabel
    var i = 0;
    var teksLengkap = "";

    // Fungsi untuk menampilkan teks dengan efek ketik berulang-ulang
    function ketikBerulang() {
        if (i >= teks.length) {
            i = 0; // Kembalikan indeks ke awal setelah selesai mengetikkan teks
            teksLengkap = ""; // Bersihkan teks lengkap
        }
        teksLengkap += teks.charAt(i);
        document.getElementById("teks-ketikan").innerHTML = teksLengkap;
        i++;
        setTimeout(ketikBerulang, kecepatanKetik);
    }

    // Panggil fungsi ketikBerulang saat halaman dimuat
    window.onload = function() {
        ketikBerulang();
    };

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});