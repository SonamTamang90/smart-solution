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
     alert('Light Mode Activate')
 } else {
     setTheme('theme-dark');
     alert('Dark Mode Activate')
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

////////////////////////////////////////////
// ADDING ROOM DEVICES FUNCTIONALITY
let deviceController = (function() {
  const devices = function(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  };

  let data = {
    allDevices: []
  }


  return {
    addNewDevice: function(name, type) {
      let ID, newDevice;

      if(data.allDevices.length > 0) {
        ID = data.allDevices[data.allDevices.length - 1].id + 1;
      }else {
        ID = 0;
      }

      newDevice = new devices(ID, name, type);

      data.allDevices.push[newDevice];

    },

    testing: function() {
      return data;
    }
  }
})();


let UIController = (function() {
  var DOMstrings = {
    inputDeviceName: '#device-name',
    inputDeviceType: '#device-type',
    addButton: '#device-add'
  };

  return {
    getInput: function() {
      return {
        deviceName: document.getElementById(DOMstrings.inputDeviceName).value,
        devieType: document.getElementById(DOMstrings.inputDeviceType).value 
      }
    },

    addDevice: function(obj) {
      let element, html, newHTML;

      html = ` <div class="room-device" id="show-modal">
                  <div class="room-device__icon">
                      <i class="ion-ios-monitor-outline"></i>
                  </div>
                  <h4 class="room-device__title">%deviceName%</h4>
                  <h4 class="room-device__title">%deviceType%</h4>
              </div>`;
      
      newHTML = html.replace('%deviceName%', obj.name);
      newHTML = html.replace('%deviceType', obj.type);

      document.querySelector('.rooms-devices__content').insertAdjacentHTML('beforeend', newHTML);
    }
  }

})();


let controller = (function(deviceCtrl, UICtrl) {

  let ctrlAddDevice = function() {
    //1. Get the input values 
    let input = UICtrl.getInput();

    //2. Add to the Device Controller
    let newDevice = deviceCtrl.addNewDevice(input.deviceName, input.devieType);

    //3. Display in the UI
    UICtrl.addDevice(newDevice);

    //4. Clear the input fields
  }

  const setEventListener = function() {
    document.getElementById('device-add').addEventListener('click', ctrlAddDevice);
  };

  return {
    init: function() {
      setEventListener();
    }
  }

})(deviceController, UIController);

controller.init();





