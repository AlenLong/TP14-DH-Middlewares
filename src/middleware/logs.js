const fs = require('fs')
const path = require('path')

const logs = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname,'..','logs','userLogs.txt'),`El Usuario ingreso a la ruta ${req.url} \n`,'utf-8')

    next()
}

module.exports = logs