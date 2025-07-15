// SLIDER TOP 
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.slider .list');
    const items = Array.from(list.children);

    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
});

// SWIPER SLIDER
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
  });

// NAVEGAÇÃO COM SCROLL SUAVE
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          if (targetId.length > 1) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
      });
  });
});
