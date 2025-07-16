
require('dotenv').config()
const app = require('./src/app')



app.listen(process.env.PORT||3000,()=>{ 
    console.log("server is running on hhtp://localhost:3000")
})