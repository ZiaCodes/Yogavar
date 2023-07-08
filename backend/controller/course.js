const cloudinary = require("../cloud");
const { sendError } = require("../utils/helper");

exports.uploadCourse = async(req,res) => {
    const {file} = req;
    if(!file) 
        return sendError(res, 'video file is missing!');

    const {secure_url : url, public_id} = await cloudinary.uploader.upload(file.path, {
        resource_type : 'video'
    });
    res.status(201).json({url, public_id})
}

exports.createCourse = async(req,res) => {
    const {file, body} = req;

    
    const {
        title,
        storyLine,
        director,
        releaseDate,
        status,
        genres,
        tags,
        cast,
        writers,
        poster,
        trailer,
        language
    } = body
}