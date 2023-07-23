
const logoSrc = '../Images/image1.png';
const name = 'John\'s Training'; //only thing that changes per user
const tabs = [
  {
    label: 'Home',
    onclick: showHome 
  },
  {
    label: 'Friends',
    onclick: showFriends,
    active: true 
  },
  {
    label: 'Locations',
    onclick: showLocations 
  },
  {
    label: 'Drinks',
    onclick: showDrinks 
  },
  {
    label: 'History',
    onclick: showHistory 
  },
  {
    label: 'New Entry',
    onclick: showEntry 
  },
  {
    label: 'FaQ',
    onclick: showFaQ 
  }
];


export function renderNavbar() {
  const navbarElement = document.createElement('div');
  navbarElement.className = 'nav-bar';
  
  const logoImg = document.createElement('img');
  logoImg.className = 'logo';
  logoImg.src = logoSrc;
  logoImg.alt = 'Logo';

  const nameHeading = document.createElement('h4');
  nameHeading.className = 'name';
  nameHeading.textContent = name;

  const tabsDiv = document.createElement('div');
  tabsDiv.className = 'tabs';

  tabs.forEach(tab => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = tab.label;
    buttonElement.onclick = tab.onclick;

    if (tab.active) {
      buttonElement.className = 'active';
    }

    tabsDiv.appendChild(buttonElement);
  });

  navbarElement.appendChild(logoImg);
  navbarElement.appendChild(nameHeading);
  navbarElement.appendChild(tabsDiv);

  return navbarElement;
}
// Have to be temporary as we will route based on /friends /locations etc. as validation will be done on server

export  function showFriends() {
  window.location.href = '../Views/friends.html';
}
export function showLocations() {
  window.location.href = '../Views/locations.html';
}
export function showDrinks() {
  window.location.href = '../Views/drinks.html';
}
export function showHistory() {
  window.location.href = '../Views/history.html';
}
export  function showEntry() {
  window.location.href = '../Views/entry.html';
}
export function showFaQ() {
  window.location.href = '../Views/FAQ.html';
}
export function showHome() {
  window.location.href = '../Views/dashboard.html';
}


