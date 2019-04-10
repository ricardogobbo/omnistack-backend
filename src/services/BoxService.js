const Box = require('../models/Box');

class BoxService {

    async get(id){
        if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
            const box = await Box.findById(id).populate('files');
            
            if(box){
                return box;
            } 
        }
        return null;
    }

}

module.exports = new BoxService();
