const express = require('express');
const router = express.Router();
let authservice = require('../services/authservice');

router.post('', function (req,res,next) {
    authservice.registeruser(req.body,function (err, doc) {
        if(!err){
            res.json(doc)
        } else {
            res.json(err);
        }
    })

})

router.post('/userlogin', function(req, res, next) {
    authservice.loginuser(req.body, function(err, data){
        if(err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})
module.exports = router