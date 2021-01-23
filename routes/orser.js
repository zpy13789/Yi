
const express = require('express')

const router = express.Router()

router.get('/order',(req,res) => {
    res.send('order')
})
module.exports = router;