

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

