const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');  
const mongodbSrv = require("./mongo");

const app = express();

app.options('*', cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route POST du test login
app.post('/api/login', cors(), (request, response) => {
    let req = request.body; //données à traités

    response.set({ "Content-Type": "application/json" });

    //check du login
    mongodbSrv.isLoginOk(req.login, req.pass, (res) => {
        response.json(res);
    });
});


app.listen(5000);
console.log('server listening on port 5000');




