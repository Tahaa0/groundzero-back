const MissingPerson = require('../models/missingperson');

exports.create = async (req, res) => {
    try {
        const missingPerson = new MissingPerson(req.body);
        await missingPerson.save();
        res.status(200).json({message: "Missing person created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.index = async (req, res) => {
    try {
        const missingPersons = await MissingPerson.find();
        res.status(200).json(missingPersons);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}