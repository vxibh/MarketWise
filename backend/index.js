const app = require('./app')
const { connectDatabase} = require("./database/db.js");

connectDatabase();

app.listen(process.env.PORT, () =>{
    console.log(`the server is running at http://${process.env.hostname}:${process.env.PORT}`)
});
