// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![license](https://img.shields.io/badge/license-${license.replace(" ", "%20")}-brightgreen)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  switch(license){
    case 'Apache License 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'Boost Software License 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/';
    case 'GNU General Public License v3.0':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';
    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    default:
      return 'https://choosealicense.com/licenses/unlicense/';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(`[![license](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`);
  return `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Test](#tests)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how_to_contribute)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}
  
  ## Tests
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license[0])}

  ## How to Contribute
  ${data.contributions}`;
}

module.exports = generateMarkdown;
