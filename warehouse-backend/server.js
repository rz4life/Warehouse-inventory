const express = require("express");
const seed = require("./index")



const app = express();
const port = 3001;





app.listen(port, async() => {
    
    await seed()
    console.log(`Server listening at http://localhost:${port}`);
});