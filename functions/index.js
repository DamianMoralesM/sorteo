var admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
var engines = require('consolidate');



var serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sortegramm.firebaseio.com"
});

var db = admin.firestore();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');


// Routes
app.get('/prueba',function(req,res){

    

    res.render('prueba')
});


app.get('/dashboard',function(req,res){

    var sorteos = []
    db.collection('Sorteos').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          sorteos.push(doc.data())
        });
      
      return sorteos
    }).then((sorteos)=>{

       // res.render('dashboard',{sorts: [{Categoria_Producto: "Accesorios"},{Categoria_Producto: "Accesorios"} ]})
        console.log(sorteos)
        res.render('dashboard',{sorts: sorteos})
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

    //console.log(sorteos)
   
});


exports.app = functions.https.onRequest(app);
 
