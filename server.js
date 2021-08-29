var express = require("express");
var app = express();
var router = express.Router();
var youtubeStream = require('youtube-audio-stream');
const { google } = require('googleapis');
const youtube = google.youtube('v3');
const ytlist = require('youtube-playlist');

app.get("/", function (request, response){
  response.sendFile(__dirname+"/views/index.html");
});


app.get('/stream/:videoId', function (req, res) {
    try {
        youtubeStream(req.params.videoId).pipe(res);
    } catch (exception) {
        res.status(500).send(exception)
    }
});

app.listen(7000);
