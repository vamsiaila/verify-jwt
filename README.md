# verify-jwt

verify-jwt is a middleware used to protect the route handlers from from fake requests

## Getting Started

install #verify-jwt through npm install and use in the routes as middleware as simple as that

While requesting send the token through 

queryparams with field name token
```
http://www.google.com/api?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
```

or headers with field name x-access-token
```
x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
```

verify-jwt automatically authunticates the token if error it will send valid error response else if success the token payload will be available in the req.user object


### Installing

A step by step series of examples that tell you how to get a development env running


```
npm install verify-jwt
```

```javascript
const vj = require('verify-jwt');

app.get('/auth', vj.protect('secret'),(req,res)=>{
    // you can get token payload with req.user object
})

```

## Built With

* [jwt](https://jwt.io/) - The web framework used
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Dependency Management


## Authors

* **Vamsi Aila**

## License

This project is licensed under the MIT License

