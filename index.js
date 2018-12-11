const jwt = require('jsonwebtoken');

module.exports ={
    protect : (secret)=>{
        return (req,res,next)=>{
            const token = req.query.token || req.header('x-access-token');
            if(!token){
                res.status(400).send({status:false,response:'please provide token'});
                return;
            }
            else{
                jwt.verify(token,secret,(err,payload)=>{
                    if(err) res.status(400).send({status:false,response:'invalid token'});
                    else{
                        req.user = payload;
                        next();
                    }
                });
            }
        }
    }
}