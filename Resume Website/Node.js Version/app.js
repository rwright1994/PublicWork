const express           = require('express'),
      app               = express(),
      session           = require('express-session'),
      cookieParser      = require('cookie-parser'),
      mongoose          = require('mongoose'),
      MongoStore        = require('connect-mongo')(session),
      flash             = require('connect-flash'),
      bodyParser        = require('body-parser'),
      methodOverride    = require('method-override'),
      passport          = require('passport'),
      LocalStrategy     = require('passport-local'),
      User              = require('./models/user');

// Require page routes
const indexRoute = require('./routes/index'),
      profileRoute = require('./routes/profile'),
      resumeRoute = require('./routes/resume');
    

require('jquery');

const port = 3000;

//Setup cookieParser
app.use(cookieParser());

//Connect to MongoDB to the Resume_website_Users table.
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/Resume_Website", {useNewUrlParser: true, useUnifiedTopology: true});

//set view engine to ejs.
app.set("view engine", "ejs");

//Setup Body-Parser
app.use(bodyParser.urlencoded({extended:true}));

//Setup app to serve public folder
app.use(express.static(__dirname + "/public"));

//Setup methodOverride
app.use(methodOverride("_method"));

//Setup Flash.
app.use(flash());

//===========================
// Passport config
//===========================

app.use(session({
    secret: "This is only a temp password",
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 60000
    },
    name: "id",
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoute);
app.use("/resume", resumeRoute);
app.use("/profile", profileRoute);


app.listen(port, () => {
    console.log("The server has started!");
})
