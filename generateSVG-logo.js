// function to generate markdown for README
// function renderLicenseBadge(license) {
//   if  (license === "none") {
//     return ''; 
// }
//   else {
//     return `![License:](https://img.shields.io/badge/License-${license}-yellow.svg)`;
//   } 
// }

// function renderLicenseLink(license) {
//   if (license === "none") {
//     return ''; 
// }
//   else {
//     return `* [License](#license)`;
//   } 

// }

// function renderLicenseSection(license) {
//   if (license === "none") {
//     return '';
// } else {
//   return ` ## License
//   License used for this project - ${license}
//   * For more information on license types, please reference this website
//   for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).`;
// }
// }

// module.exports = renderLicenseBadge;


function generateCircle(data) {

    return `
    
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.characterColor}">${data.characters}</text>
  
  </svg>
    
  `;
  }

  
  
  module.exports = generateCircle;