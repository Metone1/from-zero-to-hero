// burger//

const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger__list');
const burgerBg = document.querySelector('.burger__bg');
if (burger) {
   burger.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      burger.classList.toggle('active');
      burgerBg.classList.toggle('active');
      burgerList.classList.toggle('active');
   });
}


//preloader//

let container = document.querySelector('._container')
let bg = document.querySelector('.bg')
let information = document.querySelector('.block__information')
let education = document.querySelector('.block__education')
let about = document.querySelector('.block__aboutMe')
let slider = document.querySelector('.swiper')
let animation = document.querySelector('.animation')

window.onload = function () {
   document.body.classList.add('loaded_hiding');
   container.classList.add('inactive');
   bg.classList.add('inactive');
   information.classList.add('inactive');
   education.classList.add('inactive');
   about.classList.add('inactive');
   slider.classList.add('inactive');
   animation.classList.add('inactive');
   burgerBg.classList.add('inactive');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      container.classList.add('active');
      container.classList.remove('inactive');
      information.classList.add('active');
      information.classList.remove('inactive');
   }, 700);
   window.setTimeout(function () {
      bg.classList.remove('inactive');
      bg.classList.add('active');
      education.classList.add('active');
      education.classList.remove('inactive');
      about.classList.add('active');
      about.classList.remove('inactive');
      slider.classList.add('active');
      slider.classList.remove('inactive');
      animation.classList.add('active');
      animation.classList.remove('inactive');
      burgerBg.classList.remove('inactive');
      burgerBg.classList.add('show');
   }, 1000);
}

//swiper//

const swiper = new Swiper(
   '.swiper', {
   direction: 'horizontal',
   initialSlide: 3,
   grabCursor: true,
   loop: true,

   pagination: {
      el: '.swiper-pagination',
   }
});

// scroll//

const burgerLinks = document.querySelectorAll('.burger__link[data-goto]');

if (burgerLinks.length > 0) {
   burgerLinks.forEach(burgerLink => {
      burgerLink.addEventListener("click", onBurgerLinkClick)
   });

   function onBurgerLinkClick(e) {
      const burgerLink = e.target;
      if (burgerLink.dataset.goto && document.querySelector(burgerLink.dataset.goto)) {
         const gotoBlock = document.querySelector(burgerLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 15;

         window.scrollTo
            ({
               top: gotoBlockValue,
               behavior: "smooth"
            });
         e.preventDefault();
      }
   }
};