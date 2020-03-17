let express = require('express');
let app = express();

//Set public stactic
app.use(express.static(__dirname + '/public'));

//Use view engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
    });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

//Define router

var Tank = require('./mongo/danh');
app.get('/', function(req,res)
{
Tank.find({},function (err, kittens) {
if (err) return console.error(err);
console.log(kittens);
res.render('index',{items: kittens});
});
});


app.get('/aboutus',(req,res)=>{
    res.render('aboutus');
})

app.get('/contact',(req,res) =>
{
    res.render('contact');
})


app.get('/errorpage',(req,res) =>
{
    res.render('errorpage');
})

//Connect mongoose
const mongoose= require('mongoose');
mongoose.connect('mongodb://danh:kCMOCUyjhjF7f7DO@cluster0-shard-00-00-ueyln.mongodb.net:27017,cluster0-shard-00-01-ueyln.mongodb.net:27017,cluster0-shard-00-02-ueyln.mongodb.net:27017/ECWEB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

//Set server port and start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),() => {
    console.log('Server is running at port'+ app.get('port'));
})