var express = require('express');
var router = express.Router();
var List = require("../model/listModel");

/* GET home page. */
router.get('/list', function(req, res, next) {
    List.find({},(err,data)=>{
        if(err){
            return res.status(201).json({msg:"Somethingwent wrong"});
        }
        if(data){
            return res.status(200).json(data);
        }
    })

});

module.exports = router;