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

//Define router home/ get mongo categories

var Tank = require('./mongo/categories');
app.get('/', function(req,res)
{
Tank.find({},function (err, mydata) {
if (err) 
return console.error(err);
else
res.render('index',{loai: mydata});

});
});

//end Define router home/ get mongo categories

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

app.get('/thoitrang',(req,res) =>
{
    res.render('product');
})

app.get('/dienthoai',(req,res) =>
{
    res.render('product');
})

app.get('/sach',(req,res) =>
{
    res.render('product');
})

//Set server port and start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'),() => {
    console.log('Server is running at port'+ app.get('port'));
})