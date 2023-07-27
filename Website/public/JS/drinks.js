import * as Fn from './navbar.js';
document.addEventListener('DOMContentLoaded',async ()=>{
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();
  
  const name = userInfo.name;
  const token = userInfo.token;
  const id = userInfo.id;
  isVerified();
  populateDrinks(token, id);
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

async function populateDrinks(token, id){
  try {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/drinks/${id}`, data);
    let drinks = [];
    if(response.ok){
      drinks = await response.json();
    }
    const tbody = document.getElementsByTagName('tbody')[0];

    for (const drink of drinks) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.innerText = drink;
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  } catch (error) {
    alert(error);
  }

}
