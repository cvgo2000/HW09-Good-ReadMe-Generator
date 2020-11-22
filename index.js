const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "projectDesc",
      message: "Please provide a description of your project.",
    },
    {
      type: "input",
      name: "instructions",
      message: "Please enter installation instructions for your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information for your project.",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Please enter information on how someone can contribute to your project.",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Please enter information on how someone can test your program.",
    },
    {
      type: "list",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU GPLv3",
        "ISC License",
        "MIT License",
      ],
      message: "Please select the license type for your project.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address",
    },
  ])
  .then((data) => {
    var licenseImage = "";

    switch (data.license) {
      case "Apache License 2.0":
        licenseImage =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GNU GPLv3":
        licenseImage =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "ISC License":
        licenseImage =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      case "MIT License":
        licenseImage =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      default:
        break;
    }

    var licenseInfo = "";

    switch (data.license) {
      case "Apache License 2.0":
        licenseInfo =
          "The Apache License 2.0 makes sure that the user does not have to worry about infringing any patents by using the software. The user is granted a license to any patent that covers the software. This license is terminated if the user sues anyone over patent infringement related to this software. This condition is added in order to prevent patent litigations.";
        break;
      case "GNU GPLv3":
        licenseInfo =
          "Software under the GPL may be run for all purposes, including commercial purposes and even as a tool for creating proprietary software, such as when using GPL-licensed compilers. Users or companies who distribute GPL-licensed works (e.g. software), may charge a fee for copies or give them free of charge. This distinguishes the GPL from shareware software licenses that allow copying for personal use but prohibit commercial distribution, or proprietary licenses where copying is prohibited by copyright law. The FSF argues that freedom-respecting free software should also not restrict commercial use and distribution (including redistribution).";
        break;
      case "ISC License":
        licenseInfo =
          "The ISC License grants permission to use, copy, modify, and/or distribute this software for any purpose with or without fee, provided that the copyright notice and this permission notice appear in all copies.";
        break;
      case "MIT License":
        licenseInfo =
          "The MIT License grants permission, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.";
        break;
      default:
        break;
    }

    var filename =
      "./SampleREADME/" + data.projectTitle.replace(/\s/g, "") + "_README.md";

    fs.writeFile(
      filename,

      `# ${data.projectTitle}
` +
        licenseImage +
        `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Description
${data.projectDesc}
## Installation
${data.instructions}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.testInstructions}
## License
` +
        licenseInfo +
        `
## Questions
Should you have any questions regarding this project please open an issue or contact the creator at the below email address.
[GitHub - ${data.github}](https://github.com/${data.github})
[${data.email}](${data.email})`,
      (err) => (err ? console.log(err) : console.log("Success!!"))
    );
  });