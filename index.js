require("dotenv").config(); //For importing .env file
require('./src/configs/db.config')//For database connection
const express = require('express')
const router = require('./src/routes/web')
const app = express()
const port=process.env.PORT
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));//POST api data

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})