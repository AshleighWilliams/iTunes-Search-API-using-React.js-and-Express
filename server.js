const { query } = require("express");
const express = require("express");
//require helmet to secure app.
const helmet = require("helmet");
//create an object called ‘app’ by calling the top level express() function. 
const app = express();
const fetch = require('node-fetch');
const path = require("path");
const cors = require('cors');
//use use process.env to get the port number from the environment variables. 
const PORT = process.env.PORT || 3001;

//app.use ensures the app uses helmet for security.
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

app.use(cors());

//app.get function is used to handle routing.
app.get('/media', function (req, res) {
    //fetch itunes api.
    fetch(`https://itunes.apple.com/search?term=${req.query.artist}&limit=25&entity=${req.query.radioValue}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            res.send(json)
        });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    //read the file 'index.html' in the frontend or build directory.
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}

//app.listen listens on port 3001 (Port 3000 by default).
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});