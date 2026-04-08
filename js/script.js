const swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 600,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    depth: 120,
    modifier: 2,
    slideShadows: false
  },
  // 👇 只加这一段
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // 👆 只加这一段
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.style.backgroundColor = window.scrollY > 50
        ? "rgba(10,26,47,0.98)"
        : "rgba(10,26,47,0.9)";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});