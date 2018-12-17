# verify-jwt

verify-jwt is a small middleware for using jwt token verification to protect the routes in a simple way.

sample code:

run > npm i verify-jwt

const vj = require('verify-jwt')

app.get('/auth',vj.protect('secret'),(req,res)=>{
// magic goes here
})

verify-jwt automatically detects the token available or not and verify the token and sends valid error response if no error your token payload will be saved in req.user object
