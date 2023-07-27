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
    // request to api
    //Test data

    // Get from token in session or local storage
    const user = 'john@doe.com';
    const response = await fetch(`/api/history/${user}`);
    let history = [];
    if(response.ok){
      history = await response.json();
    }
    const tbody = document.getElementsByTagName('tbody')[0];

    for(let i = 0; i < history.length; i++){
      // create tr and td for each key in the object
      const tr = document.createElement('tr');
      const keys = Object.keys(history[i]);
      keys.forEach(key=>{
        const td = document.createElement('td');
        td.innerText = history[i][key];
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    }
  } catch (error) {
    alert(error);
  }

}