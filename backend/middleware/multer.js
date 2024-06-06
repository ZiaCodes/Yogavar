const multer = require('multer');
const storage = multer.diskStorage({});

const imageFileFilter = (req, file, cb) =>{
    if(!file.mimetype.startsWith('image')){
        cb("Supported only image file", false)
    }
    cb(null, true);
}

const videoFileFilter = (req, file, cb) =>{
    if(!file.mimetype.startsWith('video')){
        cb("Supported only video file", false)
    }
    cb(null, true);
}

const excelSheetFileFilter = (req, file, cb) =>{
    if(!file.mimetype.startsWith('xlsx')){
        cb("Supported only Xlsx file", false)
    }
    cb(null, true);
}

exports.uploadImage = multer({storage, fileFilter: imageFileFilter});
exports.uploadVideo = multer({storage, fileFilter: videoFileFilter});
exports.uploadExcelSheet = multer({storage, fileFilter: excelSheetFileFilter});