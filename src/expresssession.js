import express from 'express';
import expressSession from 'express-session';

var app = express();
var port = 3000;

app.use(expressSession({
    name: "sessionName",
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 300000

    },
    secret: "absgych",
    // rolling: true
}));


app.get("/", (req, res) => {


    req.session.views = (req.session.views || 0) + 1;

    res.send(`Page views ${req.session.views}`);

});

app.listen(port, () => {
    console.log("Server listening at ", port);
});
