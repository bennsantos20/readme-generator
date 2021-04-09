// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else if (license == "Mozilla Public License") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
  } else if (license == "Boost Software License") {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]"
  } else if (license === "Apache 2.0") {
    return license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return license = "(https://opensource.org/licenses/MIT)"
  } else if (license === "Mozilla Public License") {
    return license = "(https://opensource.org/licenses/MPL-2.0)"
  } else if (license == "Boost Software License") {
    return license = "(https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Apache 2.0") {
    return license = "(https://opensource.org/licenses/Apache-2.0)"
  } else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license)+renderLicenseLink(license)
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.Title}
  
  
  ## Description
  ${userInput.Description}
  ***
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ***
  ## Installation
  ${userInput.Installation}
  ## Usage
  ${userInput.Usage}
  ## License
  ${userInput.License}
  ## Contributing
  If you would like to contribute to this project, please ${userInput.Know}.
  ## Tests
  ${userInput.Tests}
  ## Questions
  Please reach out to my email at ${userInput.Questions} and my github ${userInput.Contributing}.
      
    `;
  }
  


module.exports = generateMarkdown;
