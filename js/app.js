'use strict';
//////////////////////////////////////
// Detecting broswer
function myFunction() { 
  if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
      alert('Your Browser is Google Chrome');
    }
    else if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) 
    {
      alert('Your Browser is Opera');
    }
      else if(navigator.userAgent.indexOf("Safari") != -1)
    {
      alert('Your Browser is Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        alert('Your Browser is Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
    alert('Your Browser is Internet Explorer'); 
    }  
    else 
    {
      alert('Unknown Browser');
    }
}

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
     alert('Activate Light Mode')
 } else {
     setTheme('theme-dark');
     alert('Activate Dark Mode')
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
  //console.log(indexDevices);

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
 
////////////////////////////////////////////
// DEVICE CONTROLLER PANEL 
// let range = document.getElementById('range');
// let container = document.getElementById('device-brightness');

// range.addEventListener('change', function() { 
//   container.style.filter = "brightness(" + range.value + "%)";
// });






