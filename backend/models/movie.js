const mongoose = require('mongoose')
const genres = require('../utils/genres')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    storyLine: {
        type: String,
        trim: true,
        required: true
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
    },
    releaseDate: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        required: true,
        enum: ['public', 'private']
    },
    type: {
        type: String,
        required: true,
    },
    genres: {
        type: [String],
        required: true,
        enum: genres
    },
    tags: {
        type: [String],
        required: true,
    },
    cast: [
        {
            mentor: {type: mongoose.Schema.Types.ObjectId, ref: 'Mentor'},
            roleAs : String,
            leadActor : Boolean
        }
    ],
    writers: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Mentor'
        }
    ],
    posters:{
        type : Object,
        url: {type: String,required: true},
        public_id : {type: String,required: true},
        required: true,
    },
    trailer:{
        type : Object,
        url: {type: String,required: true},
        public_id : {type: String,required: true},
        required: true,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Reviews'
        }
    ],
    language : {
        type: String,
        required: true
    }
},{timestamps : true});


const Movie =new mongoose.model("Movie",movieSchema);
module.exports = Movie