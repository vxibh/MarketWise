const app = require('./app')
const dotenv = require("dotenv");


app.listen(process.env.PORT, () =>{
    console.log(`the server is running at https://${process.env.hostname}:${process.env.PORT}`)
});
