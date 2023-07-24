import * as Fn from './navbar.js';

const name = "Thabang"; 

const navbarElement = Fn.renderNavbar(
  `${name}'s Training`);

const navbarContainer = document.getElementById('navbarContainer');
navbarContainer.appendChild(navbarElement);


document.addEventListener('DOMContentLoaded',()=>{
  isVerified();
  populateHistory();
});

function isVerified(){
  console.log('You got tokens bro?');
}

function populateHistory(){
  // request to api

  // Endpoint URL
const apiUrl = 'https://api.zippopotam.us/us/33162';

// Make the API request using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Process and use the data as needed
    console.log(data.places);
    // Example: Display city and state information
    console.log('City:', data.places[0]['place name']);
    console.log('State:', data.places[0]['state']);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });

  //Test data
  const response = [
    {
      'Date': '14 July 2023',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
  ];

  const tbody = document.getElementsByTagName('tbody')[0];

  for(let i = 0; i < response.length; i++){
    const tr = document.createElement('tr');
    const keys = Object.keys(response[i]);
    keys.forEach(key=>{
      const td = document.createElement('td');
      td.innerText = response[i][key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

}
