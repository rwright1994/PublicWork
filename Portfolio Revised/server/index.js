//Node packages 
const path = require('path');

//Required NPM Packages
const express                =         require('express'),
      app                    =         express(),
      cors                   =         require('cors'),
      bodyParser             =         require('body-parser'),
      mongoose               =         require('mongoose'),
      methodOverride         =         require('method-override');

//MongoDB models.
const Product                =         require('./models/Product');

//Routes.
const indexRoute             =         require('./routes/index');
const demoRoute              =         require('./routes/demo');
const bootstrapTemplateRoute =         require('./routes/bootstrapTemplate');

//Port.
const _PORT = process.env.PORT || 5000;

//Connect to mongoDB.
mongoose.connect("mongodb://localhost:27017/rwrightdemo", {useNewUrlParser:true, useUnifiedTopology:true});

//Setup body-parser.
app.use(bodyParser.urlencoded({extended:true}));

//Allow express/node to accept Cross-origin resource sharing.
app.use(cors());

//Set view engine to EJS.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'client','src','Resources','templates'));

app.use(express.static(__dirname+"/public"))
app.use(express.static("client/build"));
app.use(express.static("client/Resources/templates"));


//Setup method override.
app.use(methodOverride("_method"));

//register index route to express.
app.use('/', indexRoute);
app.use('/demo', demoRoute);
app.use('/bootstrapTemplate', bootstrapTemplateRoute)

//listen to established port.
app.listen(_PORT, () => {
    console.log(`The server has started on port ${_PORT}!`);
});


module.exports = app;