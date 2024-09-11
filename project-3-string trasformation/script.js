const input = document.querySelector('input');

const lowercase = document.querySelector('#lowercase span'); 
const uppercase = document.querySelector('#uppercase span'); 
const camelcase = document.querySelector('#camelcase span'); 
const pascalcase = document.querySelector('#pascalcase span'); 
const snakecase = document.querySelector('#snakecase span'); 
const kebabcase = document.querySelector('#kebabcase span');
const trimcase = document.querySelector('#trimcase span'); 


function capitalizeString(str) {
  // Check if the string is empty
  if (str === "") {
    return str; // Return the string as is if empty
  } else {
    // Convert the first letter to uppercase and concatenate with the rest of the string
    const firstLetter = str[0].toUpperCase(); // Capitalize the first character
    return firstLetter + str.slice(1); // Append the rest of the string
  }
}

function camelCase(str) {
  // Convert the string to lower case and split it into words
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(' ');

  // Capitalize the first letter of each word except the first one
  const finalArray = wordsArray.map((word, index) => {
    // For the first word, keep it in lower case
    if (index === 0) {
      return word;
    } else {
      // For subsequent words, capitalize the first letter
      return capitalizeString(word);
    }
  });

  // Join the words back into a single string without spaces
  return finalArray.join("");
}

function pascalCase(str) {
  // Convert the string to lower case and split it into words
  const lowerCaseString = str.toLowerCase();
  const wordsArray = lowerCaseString.split(' ');

  // Capitalize the first letter of each word
  const finalArray = wordsArray.map(word => capitalizeString(word));

  // Join the words back into a single string without spaces
  return finalArray.join("");
}

function snakeCase(str) {
  // Replace all spaces in the string with underscores
  return str.replaceAll(" ", "_");
}


function kebabCase(str) {
  // Replace all spaces in the string with hyphens
  return str.replaceAll(" ", "-");
}

function trimCase(str) {
  // Remove all spaces from the string
  return str.replaceAll(" ", "");
}

input.addEventListener('input', (e) => {
  // Get the current value of the input field
  const value = e.target.value;
  lowercase.innerText = value.trim().toLowerCase();
  uppercase.innerText = value.trim().toUpperCase(); 
  camelcase.innerText = camelCase(value); 
  pascalcase.innerText = pascalCase(value); 
  snakecase.innerText = snakeCase(value);
  kebabcase.innerText = kebabCase(value); 
  trimcase.innerText = trimCase(value); 
});
