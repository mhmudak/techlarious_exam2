const Url = require("../models/urlModel");
const validator = require("validator");

exports.shorter = async(req,res) => {
    try {
        let urlOriginal = req.body.urlOriginal;

        if (!validator.isURL(urlOriginal)) {
            return res.status(400).json({message: "Invalid URL."});
        }

        const urlCustomize = await Url.findOne({ urlCustomize: req.body.urlCustomize });
        if (urlCustomize) {
            return res.status(409).json({ message: "URL is already taken." });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};