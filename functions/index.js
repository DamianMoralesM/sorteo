const functions = require('firebase-functions');
const express = require('express');
const app = express();
var engines = require('consolidate');

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');


// Routes
app.get('/prueba',function(req,res){

    res.render('prueba')
});

 exports.app = functions.https.onRequest(app);
 
