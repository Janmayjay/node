const express = require("express");
const app = express();
app.listen(2222 || process.env.PORT,()=>{
    console.log("2222");
});
app.use("/",express.static("./"));