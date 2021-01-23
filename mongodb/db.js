let mongoose = require('mongoose')

let dbUrl = 'mongodb://localhost/disco'

mongoose
    .connect(dbUrl)
    .then(() => console.log('链接成功'))
    .catch(err => {console.log('链接失败' +err) })

module.exports = mongoose