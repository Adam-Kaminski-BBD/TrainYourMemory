document.addEventListener('DOMContentLoaded',()=>{
  setupForm();
});

function setupForm(){
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', submit);
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