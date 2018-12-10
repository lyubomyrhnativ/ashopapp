var express=require('express');
var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var Product=require('./models/product');

app.use(express.static(__dirname+'/dist/ashop-angular-app'));
//підключаємо body-parser
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//var User=require('./models/user');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/dist/ashop-angular-app/index.html');
})
app.get('/getproducts',(req,res)=>{
    console.log('dataproducts:');
    Product.find((err,data)=>{
        if(err) console.log(err.message);
        //console.log(data);
        res.send(data);
    })
})
app.post('/adduser',(req,res)=>{
    console.log(req.body);
    var user=new User(req.body);
    user.save((err,data)=>{
        console.log(data);
        res.send('adduser');
    })
})
app.post('/removeproduct',(req,res)=>{
    console.log('remove product:');
    console.log(req.body);
    Product.remove({_id:req.body.id},(err,data)=>{
        if(err)
        console.log(err.message);
        res.send('remove product');
    })
})


app.listen(process.env.PORT||8080);
console.log('server is run!');