const Vendor = require('../models/vendor');
const { sendError } = require("../utils/helper");

exports.createVendorDetails = async(req, res) =>{
    const {name, vendorName, location, contact, email } = req.body;

    const oldVendorEmail = await Vendor.findOne({ email });
    const oldVendorContact = await Vendor.findOne({ contact });
    if(oldVendorEmail || oldVendorContact ) 
        return sendError(res, "This vendor is already exist!");
    

    const newVendor = Vendor({name, vendorName, location, contact, email});
    console.log(newVendor);
    await newVendor.save();


    res.status(201).json({ 
        name: name,
        vendorName: vendorName,
        location:location,
        contact:contact,
        email:email
    });
}

exports.removeVendorDetails = async(req, res) =>{
    const { email } = req.body;

    const isVendorExist = await Vendor.findOne({ email });
    
    if(!isVendorExist) 
        return sendError(res, "This vendor is does not exist!");
    
    await Vendor.findByIdAndDelete(isVendorExist?._id)

    res.json({message : "Vendor Removed Successfully!"});
}