// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let badge = ''
if(license === 'Apache License 2.0') {
  badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
} else if (license === 'GNU General Public License v3.0')  {
  badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
} else if (license === 'MIT License'){
  badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
} else {
  badge = ''
}
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null)
  return ''
}
  const link = renderLicenseLink(license) 
  
  const section = `This is covered by the ${license} license.`
  return section


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null)
  return ''

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const badge = renderLicenseBadge(data.license);
    const licenseEl = renderLicenseSection(data.license);
    return `
    ${badge}
    ## Description
      ${data.Description}
  
    ## Table of Contents 
    [Installation](#installation)
    [Usage](#usage)
    [Technology](#Technology)
    [Contributing](#contributing)
    [License](#license)
    
  
    ## Installation
      ${data.installation}
  
    ## Usage
      ${data.usage}
  
    ##Technology
      ${data.Technology}
  
    ## Contributing
      ${data.contributing}
      
      ## License
      ${licenseEl}`
};



