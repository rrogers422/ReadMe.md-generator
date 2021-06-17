// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT](https://www.shields.io/badge/license-MIT-green)';
  }
  if (license === 'GPL') {
    return '![GPL](https://www.shields.io/badge/license-GPL-blue)';
  }
  if (license === 'None') {
    return '';
  }
}
// github api to get liscensing badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://www.mit.edu/~amini/LICENSE.md)';
  }
  if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  }
  if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return 'This project is licensed under the ${renderLicenseLink(license)} License.';
  } else {
    return 'No license.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 


 ${data.descript}
 ##Description

 ${data.contents}
 ## Table of Contents

 ${data.usage}
 ## Usage

 ${data.liscense}
 ##Liscensing
 `;
}

module.exports = generateMarkdown;
