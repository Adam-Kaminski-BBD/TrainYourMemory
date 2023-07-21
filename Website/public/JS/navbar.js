

export function renderNavbar(logoSrc, name, tabs) {
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
export  function showFriends() {
  window.location.href='../Views/friends.html';
}
export function showLocations() {
  window.location.href='../Views/locations.html';
}
export function showDrinks() {
  window.location.href='../Views/drinks.html';
}
export function showHistory() {
  window.location.href='../Views/history.html';
}
export  function showEntry() {
  console.log("Showing friends...");
}
export function showFaQ() {
  console.log("Showing friends...");
}
export function showHome() {
  window.location.href='../Views/dashboard.html';
}


