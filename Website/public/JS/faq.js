import * as Fn from './navbar.js';
document.addEventListener('DOMContentLoaded',async ()=>{
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();
  
  const name = userInfo.name;

  menuSetup(name);
  clickerSetup();
});

function menuSetup(name){
  const navbarElement = Fn.renderNavbar(name);
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

function clickerSetup(){
  const titles = document.getElementsByClassName('title');
  for(let i = 0; i < titles.length; i++){
    titles[i].addEventListener('click', clicked);
  }
}

function clicked(e){
  const article = e.currentTarget.nextElementSibling;
  if(article.classList.contains('display')){
    article.classList.remove('display');
  }else{
    article.classList.add('display');
  }
}
