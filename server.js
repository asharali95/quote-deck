const express = require("express");
//const quoteRouter = require("./routes/quotesRoute")
const PORT = 8000;

// server initialization
const app = express();
// middleware
//app.use("/api/v1/quotes",quoteRouter)

app.listen(PORT,() =>{
    console.log(`server started at PORT ${PORT}`);
})