const { isValidObjectId } = require("mongoose");
const Mentor = require("../models/mentor");
const { sendError } = require("../utils/helper");
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
        const {secure_url, public_id } = await 
            cloudinary.uploader.upload(file.path,{gravity: "face", height: 500, width: 500, crop: "thumb"})
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


exports.updateMentor = async(req,res) => {
    const {name , about, gender} = req.body;
    const {file} = req
    const {mentorId} = req.params;

    if(!isValidObjectId(mentorId)) 
        return sendError(res, "Invalid request!")

    const mentor = await Mentor.findById(mentorId);
    if(!mentor) 
        return sendError(res, "Invalid request, Mentor not found!")

    const public_id = mentor.avatar?.public_id

    //remove old image if there was one
    if(public_id && file){
        const {result} = await cloudinary.uploader.destroy(public_id)
        if(result !=='ok') 
            return sendError(res, 'Could not remove image from cloud!');
    }

    //upload new avatar if there is one

    if(file){
        const {secure_url, public_id } = 
        await cloudinary.uploader.upload(file.path, {gravity: "face", height: 500, width: 500, crop: "thumb"})
        mentor.avatar = {url : secure_url, public_id};

    }
        console.log(public_id)
        mentor.name = name;
        mentor.about = about;
        mentor.gender = gender;

        await mentor.save();

        res.status(201).json({
            id : mentor._id,
            name,
            about,
            gender,
            avatar: mentor.avatar?.url
        });
}

exports.removeMentor = async(req,res) => {
    const {mentorId} = req.params;

    if(!isValidObjectId(mentorId)) 
        return sendError(res, "Invalid request!")

    const mentor = await Mentor.findById(mentorId);
    if(!mentor) 
        return sendError(res, "Invalid request, Mentor not found!")

    const public_id = mentor.avatar?.public_id

    //remove old image if there was one
    if(public_id){
        const {result} = await cloudinary.uploader.destroy(public_id)
        if(result !=='ok') 
            return sendError(res, 'Could not remove image from cloud!');
    }

    await Mentor.findByIdAndDelete(mentorId);

    res.json({
        message: 'Mentor Record has been removed successfully.'
    })
}


exports.searchMentor = async(req,res) =>{
    const {query} = req

    const result = await Mentor.find({ $text: {$search: `"${query.name}"` }});
    res.json(result)
}

exports.getLatestMentors = async(req, res) =>{
    const result = await Mentor.find().sort({createdAt: '-1'}).limit(12);

    res.json(result)
}

exports.getSingleMentor = async(req,res) =>{
    const {id} = req.params;

    if(!isValidObjectId(id)) 
        return sendError(res, "Invalid request!")

    const mentor = await Mentor.findById(id);

    if(!mentor) 
        return sendError(res, "Invalid request, Mentor not found!",404)
    
    res.json(mentor);

}