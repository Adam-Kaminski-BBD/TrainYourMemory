import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',()=>{
  menuSetup();
  setupForm();
  drinkSetup();
  locationSetup();
});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

function setupForm(){
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', submit);

  const option_drink = document.getElementById('drop_drink');
  option_drink.addEventListener('change', enableDrink);
  const option_location = document.getElementById('drop_location');
  option_location.addEventListener('change', enableLocation);
}

function enableDrink(e){
  const target = e.target;
  const txtBox = document.getElementById('custom_drink');
  if(target.value.trim().toLowerCase() !== 'default'){
    txtBox.value = '';
    txtBox.readOnly = true;
    txtBox.style.backgroundColor = '#00000050';
  }else{
    txtBox.readOnly = false;
    txtBox.style.backgroundColor = '';
  }
}
function enableLocation(e){
  const target = e.target;
  const txtBox = document.getElementById('custom_location');
  if(target.value.trim().toLowerCase() !== 'default'){
    txtBox.value = '';
    txtBox.readOnly = true;
    txtBox.style.backgroundColor = '#00000050';
  }else{
    txtBox.readOnly = false;
    txtBox.style.backgroundColor = '';
  }
}

function submit(e){
  e.preventDefault();

  // Improve below access of form
  const form = document.getElementsByTagName('form')[0];
  const formData = new FormData(form);

  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  
  // Object of data, to be sent in post request
  console.log(formDataObject);
}

async function drinkSetup(){
  try {
    const response = await fetch('/api/drinks');
    let drinks = [];
    if(response.ok){
      drinks = await response.json();
    }

    const drop_drink = document.getElementById('drop_drink');
    drinks.forEach(drink =>{
      const option = document.createElement('option');
      option.value = drink.trim().toLowerCase();
      option.text = drink;
      drop_drink.appendChild(option);
    });

  } catch (error) {
    alert(error);
  }
}
async function locationSetup(){
  try {
    const response = await fetch('/api/locations');
    let drinks = [];
    if(response.ok){
      drinks = await response.json();
    }

    const drop_drink = document.getElementById('drop_location');
    drinks.forEach(drink =>{
      const option = document.createElement('option');
      option.value = drink.trim().toLowerCase();
      option.text = drink;
      drop_drink.appendChild(option);
    });

  } catch (error) {
    alert(error);
  }
}