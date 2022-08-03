const express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    const URL = req.body.link;
    console.log(URL);

    ytdl(URL)
        .pipe(fs.createWriteStream('video.mp4'));

    console.log("the video is download in your project file directory with a name video.mp4 ");

    const request = https.request(URL,function(response){
        if(response.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
    
    });
    request.end();
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});






