import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',()=>{
  isVerified();
  populateHistory();
  menuSetup();
});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

function isVerified(){
  console.log('You got tokens bro?');
}
async function populateHistory(){
  try {
    const user = 'john@doe.com';
    const response = await fetch(`/api/locations/${user}`);
    let locations = [];
    if(response.ok){
      locations = await response.json();
    }
    const tbody = document.getElementsByTagName('tbody')[0];

    for (const location of locations) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.innerText = location;
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  } catch (error) {
    alert(error);
  }
}