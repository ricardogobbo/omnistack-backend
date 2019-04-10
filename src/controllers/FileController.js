const File = require('../models/File');
const boxService = require('../services/BoxService');

class FileController{

    async store(req, res){
        
        const box = await boxService.get(req.params.id)
        console.log(box);

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });

        box.files.push(file);

        await box.save();

        res.json(file);
    }

    // async show(req, res){
    //     const file = await File.find({path: req.params.path});
    //     console.log(file)
    //     res.json(file);
    // }

}

module.exports = new FileController();