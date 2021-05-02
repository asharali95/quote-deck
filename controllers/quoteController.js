const {v4:uuid} = require('uuid')
const { readFile,writeFile } = require("../utility/common");
exports.fetchQuotes = async(req, res) =>{
    try {
        var quotes = await readFile(`${__dirname}/../data/quotes.json`,'utf-8')
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
        var{id, title, quote, author} = req.body;

        //fetch file
        var quotes = await readFile(`${__dirname}/../data/quotes.json`,'utf-8')
        //push new quote
        var newQuotes = {
            id: uuid(), 
            title,
            quote,
            author
        }
        console.log(newQuotes)
        quotes.push(newQuotes)
        // write file with updated data
        await writeFile(`${__dirname}/../data/quotes.json`,quotes)
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