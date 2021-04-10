// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None") 
  {return " "}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT"){
    return [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ## Email: *${data.email}*
  ## GitHub Username: *${data.name}* 

  ## ${data.description}

  ## -Command To Install Dependancies :  ${data.dependancies}
  ## -To Run Tests You have to type in : ${data.command} 
  ## -To use this Repo, please note that, ${data.user} 
  ## If you want to contribute to this repo be mindful of, ${data.contributing}
  [GitHub Link]($(data.))'
},
;

}

module.exports = generateMarkdown;
