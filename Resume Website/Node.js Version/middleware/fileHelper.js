const gridfs                    = require('mongoose-gridfs'),
      multer                    = require('multer');

let fileHelper = {}

fileHelper.upload = (req,res,next) => {

    console.log(req);

}