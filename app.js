const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// const printProfileData = profileDataArgs => {
//     // This...
//     for (let i = 0; i < profileDataArgs.length; i++) {
//         console.log(profileDataArgs[i]);
//     }
    
//     console.log('================')

//     // Is the same as this...
//     profileDataArgs.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});