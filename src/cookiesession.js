import express from 'express';
import cookieSession from 'cookie-session';

var app = express();
var port = 3000;

app.use(cookieSession({
    name: "sessionName",
    secret: "abyxgst",
    maxAge: 10000, //10 sec
    httpOnly: true
}));


app.get("/", (req, res) => {

    req.session.views = (req.session.views || 0) + 1;

    res.send(`Page views ${req.session.views}`);
});

app.listen(port, () => {
    console.log("Server listening at ", port);
});
