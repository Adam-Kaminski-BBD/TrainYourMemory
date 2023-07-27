import * as Fn from './navbar.js';
document.addEventListener('DOMContentLoaded',async ()=>{
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();
  
  const name = userInfo.name;
  const token = userInfo.token;
  const id = userInfo.id;
  isVerified();
  populateFriends(id, token);
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

async function populateFriends(user, token){
  
  try {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/friends/${user}`, data);
    let friends = [];
    if(response.ok){
      friends = await response.json();
    }
    const tbody = document.getElementsByTagName('tbody')[0];

    for (const friend of friends) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.innerText = friend;
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  } catch (error) {
    alert(error);
  }
}
