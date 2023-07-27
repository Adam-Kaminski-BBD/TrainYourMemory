import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',async ()=>{
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();
  
  const name = userInfo.name;
  const token = userInfo.token;
  const id = userInfo.id;
  isVerified();
  populateHistory(id, token);
  menuSetup(name);
});

function menuSetup(name){
  const navbarElement = Fn.renderNavbar(name);
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

function isVerified(){
  console.log('You got tokens bro?');
}

async function populateHistory(user, token){
  try {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/history/${user}`, data);
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