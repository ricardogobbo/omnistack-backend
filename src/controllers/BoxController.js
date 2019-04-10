const Box = require('../models/Box');
const boxService = require('../services/BoxService');

class BoxController{

    async list(req, res){
        const boxes = await Box.find();
        res.json(boxes);
    }

    async show(req, res){
        
        const myBox = await boxService.get(req.params.id);

        if(!myBox) 
            res.status(404)
            
        return res.json(myBox);

       
    }

    async store(req, res){
        const box = await Box.create({title: req.body.title});
        if(box){
            res.status(201);
        }else{
            res.status(400);
        }
        res.json(box);
    }

}

module.exports = new BoxController();