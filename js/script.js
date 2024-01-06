 $(document).ready(function(){
            $('.slider').slick({
                autoplay: true,
                autoplaySpeed: 2500,
                dots: true
            });
        });

const items = document.querySelectorAll('.item');

function fadeInItems() {
  items.forEach((item, index) => {
    const delay = index * 200; // Delay untuk setiap item

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, delay);
  });
}

function checkFade() {
  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight * 0.75) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

fadeInItems(); // Menampilkan item dengan fade saat halaman dimuat

window.addEventListener('scroll', checkFade);
window.addEventListener('resize', checkFade);
window.addEventListener('load', checkFade);
