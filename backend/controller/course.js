const cloudinary = require("../cloud");
const { sendError } = require("../utils/helper");
const Course = require('../models/course');
const { isValidObjectId } = require("mongoose");

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

    const newCourse = new Course({
        title,
        storyLine,
        releaseDate,
        status,
        genres,
        tags,
        cast,
        trailer,
        language
    })

    if(director){
        if(!isValidObjectId(director))
            return sendError(res, "Invalid Director id!");

        newCourse.director = director;
    }

    if(writers){
        for(let writerId of writers){
            if(!isValidObjectId(writerId))
                return sendError(res, "Invalid writer id!");
        }
    
        newCourse.writers = writers;
    }

    //uploading poster
    const cloudRes = await cloudinary.uploader.upload(
        file.path, {
            transformation: {
                width: 1280,
                height: 1280
            },
        responsive_breakpoints: {
            create_derived : true,
            max_width: 640,
            max_images: 3
        }
        }
    );

    console.log(cloudRes);
    console.log(cloudRes.responsive_breakpoints[0].breakpoints)
    res.send('ok')
}