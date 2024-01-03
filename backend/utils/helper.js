const crypto = require('crypto');
const cloudinary = require('../cloud')

exports.sendError = (res, error, statusCode = 401) => {
    res.status(statusCode).json({error});
};

exports.generateRandomByte = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(30, (err, buff) =>{
            if(err) reject(err);
            const buffString = buff.toString('hex');
            console.log(buffString);
            resolve(buffString);
          });
    });
};


exports.handleNotFound = (req,res)=>{
    this.sendError(res, "Not Found", 404);
}


exports.uploadImageToCloud = async (file) =>{
    const {secure_url: url, public_id } = await cloudinary.uploader.upload(file,{
        gravity: "face", height: 500, width: 500, crop: "thumb"
    })

    return {url, public_id};
}

exports.formateMentor = mentor =>{
    const {name, gender, about, _id, avatar} = mentor;
    return {
        id : _id,
        name,
        about,
        gender,
        avatar: avatar?.url
    }
}

exports.formateVendor = vendor =>{
    const {_id, name, vendorName, location, contact, email} = vendor;
    return {
        id : _id,
        name,
        vendorName,
        location,
        contact,
        email
    }
}

