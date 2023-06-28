const Mentor = require("../models/mentor");
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
  });

exports.createMentor = async(req,res) => {
    const {name , about, gender} = req.body;
    const {file} = req

    const newMentor = new Mentor({name, about, gender});

    if(file){
        const {secure_url, public_id } = await cloudinary.uploader.upload(file.path)
        newMentor.avatar = {url : secure_url, public_id};
    }
    await newMentor.save();
    res.status(201).json({
        id : newMentor._id,
        name,
        about,
        gender,
        avatar: newMentor.avatar?.url
    });

}