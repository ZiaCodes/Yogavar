const fs = require('fs');

exports.generateUserPersonalData = (userDeltails,userId) =>{

    const content = JSON.stringify(userDeltails);
    try {
    fs.writeFileSync(`./generateData/${userId}.txt`, content);
    // file written successfully
    } catch (err) {
    console.error(err);
    }
}