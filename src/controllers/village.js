const Village = require('../models/village');

exports.create = async (req, res) => {
    try {
        const village = new Village(req.body);
        await village.save();
        res.status(200).json({message: "Village created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.index = async (req, res) => {
    try {
        const villages = await Village.find();
        res.status(200).json(villages);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}