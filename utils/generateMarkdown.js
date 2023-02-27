// TODO: Create a function that returns a license badge based on which license is passed in
// Function that displays badge for which license is being used
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.sheilds.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// Function that displays the link to the licesne
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [license](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// Function that displays license section in the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

      licensed under the ${license} license.`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
// Template to generate markdown README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name},${data.username}
## Table of Contents
- [Description](#description)
- [Installations](#installations)
- [Usage](#usage)
- [Contact-Info](#contact)
- [Contributions](#contributions)
- [Testing](#testing)
- ${renderLicenseLink(data.license)}
## Description
${data.description}
## Installations
${data.installations}
## Usage
${data.usage}
## Contibutors
${data.contributions}
## Contact-Info
- Name: ${data.name}
- Email: ${data.email}
- Github: ${data.username}(https://github.com/${data.username}/)
## Testing
================================================================
${data.test}
================================================================
${renderLicenseSection(data.licesne)}
`;
}

module.exports = generateMarkdown;
