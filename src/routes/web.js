const express = require('express');
const router = express.Router();
const apicontroller=require('../controllers/apicontroller')

router.get('/', (req, res) => {
    res.send('wsd World!')
})

router.get('/about', (req, res) => {
    res.send('about')
})

router.get('/data', apicontroller.index)

router.post('/insert',apicontroller.insertEmployee)

module.exports = router