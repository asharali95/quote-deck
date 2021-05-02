const fs = require("fs");

exports.readFile = (path, format) =>{
    return new Promise((res, rej) =>{
        fs.readFile(path,format,(err,data) =>{
            if(err) rej (err)
            res(JSON.parse(data))
        })
    })
}
