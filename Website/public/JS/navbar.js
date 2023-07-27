const logoSrc = './icon.png';
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


export function renderNavbar(user) {
  //I'll get the ude from local/sessional storage or wherever else they store it
  const name = user;
  const navbarElement = document.createElement('div');
  navbarElement.className = 'nav-bar';
  
  const logoImg = document.createElement('img');
  logoImg.className = 'logo';
  logoImg.src = logoSrc;
  logoImg.alt = 'Logo';

  const nameHeading = document.createElement('h5');
  nameHeading.className = 'name';
  nameHeading.textContent = `${name}'s Training`;

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
  window.location.href = '/friends';
}
export function showLocations() {
  window.location.href = '/locations';
}
export function showDrinks() {
  window.location.href = '/drinks';
}
export function showHistory() {
  window.location.href = '/history';
}
export  function showEntry() {
  window.location.href = '/entry';
}
export function showFaQ() {
  window.location.href = '/FAQ';
}
export function showHome() {
  window.location.href = '/home';
}


