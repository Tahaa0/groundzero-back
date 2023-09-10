const Association = require('../models/association');

exports.apply = async (req, res) => {
    try {
        const association = new Association(req.body);
        await association.save();
        res.status(200).json({message: "Application submitted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
