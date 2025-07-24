
const text = document.getElementById("text-change");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 450)

  setTimeout(() => {
    text.textContent = "App Developer";
  }, 4600) //1s = 1000 milisecond

  setTimeout(() => {
    text.textContent = "Software Developer";
  }, 8500)

}

textLoad();
setInterval(textLoad, 12000);

//humbarger menu open and close
const menuOpen = document.getElementById('open-menu');
const navBar = document.getElementById('main-nav');
const navLinks1 = document.getElementById('nav-link-1');
const navLinks2 = document.getElementById('nav-link-2');
const navLinks3 = document.getElementById('nav-link-3');
const navLinks4 = document.getElementById('nav-link-4');
const navLinks5 = document.getElementById('nav-link-5');
const navLinks6 = document.getElementById('nav-link-6');

menuOpen.addEventListener('click', () => {
  menuOpen.classList.toggle('openmenu');
  navBar.classList.toggle('active');
});

function removeClick() {
  navBar.classList.remove('active');
  menuOpen.classList.remove('openmenu');
}

navLinks1.addEventListener('click', () => {
  removeClick();
});

navLinks2.addEventListener('click', () => {
  removeClick();
});

navLinks3.addEventListener('click', () => {
  removeClick();
});

navLinks4.addEventListener('click', () => {
  removeClick();
});

navLinks5.addEventListener('click', () => {
  removeClick();
});

navLinks6.addEventListener('click', () => {
  removeClick();
});

// swiper js slide service cards
const swiperCards = new Swiper(".sevices-inner", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  centerSlide: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      silderPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

//theme mode - light and dark theme
let lightMode = localStorage.getItem('lightMode');
const themeIcon = document.getElementById('theme-icon');
const header = document.getElementById('header');
const imageChange = document.getElementById('change-image');
const titles = document.getElementById('title');

const enableLightTheme = () => {
  document.body.classList.add('light-theme');
  themeIcon.src = 'Assets/moon.png';
  header.style.backgroundColor = 'rgba(255, 255, 255, 0.507)';
  imageChange.src = 'Assets/1727733792057.jpg';
  // titles.style.color = '#111827';
  localStorage.setItem('lightMode', 'enable');
}

const disableLightTheme = () => {
  document.body.classList.remove('light-theme');
  themeIcon.src = 'Assets/sun.png';
  header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  imageChange.src = 'Assets/1727722792057.jpg';
  // titles.style.color = '#f9fafb';
  localStorage.setItem('lightMode', 'disable');
}

if (lightMode === 'enable') {
  enableLightTheme();
}

themeIcon.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enable') {
    enableLightTheme();
  } else {
    disableLightTheme();
  }

})


