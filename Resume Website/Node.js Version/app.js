const express           = require('express'),
      app               = express(),
      mongoose          = require('mongoose'),
      flash             = require('connect-flash'),
      bodyParser        = require('body-parser'),
      methodOverride    = require('method-override'),
      passport          = require('passport'),
      LocalStrategy     = require('passport-local');

const port = 3000;

//set view engine to ejs.
app.set("view engine", "ejs");

//Setup Body-Parser
app.use(bodyParser.urlencoded({extended:true}));

//Setup app to serve public folder
app.use(express.static(__dirname + "/public"));

//Setup methodOverride
app.use(methodOverride("_method"));
app.use(flash());

//===========================
// Passport config
//===========================

app.use(require("express-session")({
    secret: "This is only a temp password",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get("/", (req,res) => {
    res.send("Hello!");
})


app.listen(port, () => {
    console.log("The server has started!");
})
