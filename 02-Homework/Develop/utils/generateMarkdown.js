// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// github api to get liscensing badge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
