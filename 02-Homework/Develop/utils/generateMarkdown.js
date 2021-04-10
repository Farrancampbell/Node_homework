// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  
  **Description**
  ## ${data.description}

  ## ${data.license}
  
  **Installation**
  ## -Command To Install Dependancies :  ${data.dependancies}

  #**Usage**
  ## -To use this Repo, please note that, ${data.user} 

  #**Contributing**
  ## If you want to contribute to this repo be mindful of, ${data.contributing}

  #**Tests**
  ## -To Run Tests You have to type in : ${data.command} 
  
  #**Questions**
  ## Email: *${data.email}*
  ## GitHub Username: *${data.name}* 
  [GitHub](${data.link} "GitHub Page")'

`;
}

module.exports = generateMarkdown;
