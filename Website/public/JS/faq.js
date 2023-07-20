document.addEventListener('DOMContentLoaded',()=>{
  clickerSetup();
});

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
