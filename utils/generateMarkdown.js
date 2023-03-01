// Function that displays badge for which license is being used
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return '';
}

// Function that displays the link to the licesne
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function that displays license section in the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

      licensed under the ${license} license.`
  }
  return '';
}

// Template to generate markdown README
function generateMarkdown(data) {
  return `# ${data.title}
## Created By
   - ${renderLicenseBadge(data.license)}
   - ${data.name} 
   - @${data.username}, 
## Table of Contents
  - [Description](#description)
  - [Installations](#installations)
  - [Usage](#usage)
  - [Contact-Info](#contact)
  - [Contributions](#contributions)
  - [Testing](#testing)
  ${renderLicenseLink(data.license)}
## Description
${data.description}
## Installations
${data.installations}
## Usage
${data.usage}
## Contributors
${data.contributions}
## Contact-Info
- Name: ${data.name}
- Email: ${data.email}
- Github: [${data.username}](https://github.com/${data.username}/)
## Testing
\`\`\`
${data.tests}
\`\`\`
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
