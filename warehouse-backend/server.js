const express = require("express");
const initialiseDb = require('./initialiseDb');

const app = express();
const port = 3001;


async function seed(){
    await initialiseDb()

}

seed()
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});