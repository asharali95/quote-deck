const fs = require("fs");
const { readFile } = require("../utility/common");
exports.fetchQuotes = async(req, res) =>{
    try {
        var quotes = await readFile(`${__dirname}/../data/quotes.json`,'utf-8')
        console.log(quotes)
        res.status(200).json({
            status:"success",
            data:{
                quotes
            }
        })
    } catch (error) {
        console.log(error)
    }
}
exports.addQuotes = async(req, res) =>{
    try {
        //take out data from body req
        var{title, quote, author} = req.body;

        //fetch file
        var quotes = await readFile(`${__dirname}/../data/quotes.json`,'utf-8')
        //push new quote
        quotes.push({
            title,
            quote,
            author
        })
        // write file with updated data
        fs.writeFile(`${__dirname}/../data/quotes.json`,JSON.stringify(quotes),(err) =>{
            if (err) console.log(err)
            console.log("file written")
        })
        //send back response
        res.status(200).json({
            msg:"add quote"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.fetchQuote = async(req, res) =>{
    try {
        res.status(200).json({
            msg:"fetch quote"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.updateQuotes = async(req, res) =>{
    try {
        res.status(200).json({
            msg:"update quote"
        })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteQuotes = async(req, res) =>{
    try {
        res.status(200).json({
            msg:"delete quote"
        })
    } catch (error) {
        console.log(error)
    }
}