const express = require('express');
const ytdl = require('ytdl-core');
// const cors = require("cors");
const fs = require('fs');

const app = express();
// app.use(cors());

app.listen(4000, function(){
    console.log("Server started on port 4000");
});

app.get('/download', function(req,res){
    let URL = req.query.URLinput;
    res.header('Content-Disposition', 'attachment; filename="video.mp4');

    // ytdl(URL, {
    //     format: 'mp4'
    // }).pipe(res);
    ytdl(URL)
        .pipe(fs.createWriteStream('video.mp4'));

});




