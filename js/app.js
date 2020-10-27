// DEVICE ON AND OFF
// function deviceConnection() {
//   let status = document.querySelector('.device__connected-1').textContent;
//   let status2 = document.querySelector('.device__connected-2').textContent;

//   console.log(status);

//   if(status === 'OFF' && status2 === 'OFF') {
//     document.querySelector('.device__connected-1').textContent = "ON";
//     document.querySelector('.device__connected-2').textContent = "ON";
//     document.querySelector('.page-banner__info-devices').textContent = 1 + ' ' + 'devices';
//   }else {
//     document.querySelector('.device__connected-1').textContent = "OFF";
//     document.querySelector('.device__connected-2').textContent = "OFF";
//   }
// }

// document.querySelector('#device__status-1').addEventListener('click', deviceConnection);
// document.querySelector('#device__status-2').addEventListener('click', deviceConnection);

// USER NAV DROPDOWN PANEL
function showUserPanel() {
    document.querySelector(".dropdown-panel").classList.toggle("dropdown-show");
}

document.querySelector('#dropdown-panel').addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  showUserPanel();
});

window.onclick = function(event) {
  if (!event.target.matches('.user-nav__button')) {
    let dropdowns = document.getElementsByClassName("dropdown-panel");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown-show')) {
        openDropdown.classList.remove('dropdown-show');
      }
    }
  }
}


// THEME TOGGLING
// function to set a given theme/color-scheme
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



// DEVICE CONTROLLER MODAL
const modal = document.querySelector('.device-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-device');
const btnsOpenModal = document.querySelectorAll('#show-device');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

