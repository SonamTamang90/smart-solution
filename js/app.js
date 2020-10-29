'use strict';
/////////////////////////////////////////
// User Nav dropdown menu
function showUserPanel() {
  document.querySelector(".dropdown-panel").classList.toggle("dropdown-show");
}

document.querySelector('#dropdown-panel').addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  showUserPanel();
});

// window.onclick = function(event) {
//   if (!event.target.matches('.user-nav__button')) {
//     let dropdowns = document.getElementsByClassName("dropdown-panel");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('dropdown-show')) {
//         openDropdown.classList.remove('dropdown-show');
//       }
//     }
//   }
// }


/////////////////////////////////////////
// THEME TOGGLING
// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
     setTheme('theme-light');
 } else {
     setTheme('theme-dark');
 }
}

// Immediately invoked function to set the theme on initial load
(function () {
 if (localStorage.getItem('theme') === 'theme-dark') {
     setTheme('theme-dark');
 } else {
     setTheme('theme-light');
 }
})();


/////////////////////////////////////////
// Modal
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('#show-modal');

const btnsOpenModalArr = Array.from(btnsOpenModal).entries();

for (let [index] of btnsOpenModalArr){
  let indexDevices = index;
  console.log(indexDevices);

  const openModal = function () {
    modal[indexDevices].classList.remove('hidden');
    overlay[indexDevices].classList.remove('hidden');
  };
  
  const closeModal = function () {
    modal[indexDevices].classList.add('hidden');
    overlay[indexDevices].classList.add('hidden');
  };
  
  btnsOpenModal[indexDevices].addEventListener('click', openModal);
  btnCloseModal[indexDevices].addEventListener('click', closeModal);
  overlay[indexDevices].addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal[indexDevices].classList.contains('hidden')) {
      closeModal();
    }
  });
};
 



