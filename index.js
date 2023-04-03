const jwt = require('jsonwebtoken');

module.exports ={
    protect : (secret)=>{
        return (req,res,next)=>{
            const token = req.query.token || req.header('x-access-token');
            if(!token){
                return res.status(400).send({status:false,response:'please provide token'});
            }
            jwt.verify(token,secret,(err,payload)=>{
                if(err){ 
                    return res.status(400).send({status:false,response:'invalid token'});
                }
                req.user = payload;
                next();
            });
        }
    }
}
