var admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express();
var engines = require('consolidate');

require('es6-promise').polyfill();
require('isomorphic-fetch');
const Unsplash = require('unsplash-js').default;
const toJson =  require('unsplash-js').toJson;


const unsplash = new Unsplash({
  applicationId: "30bec4c9a180eea6631123f50433fe7d3c689d4aa899598a194cb67cb86aca11",
  secret: "e4c72929d40c80dfbbfc5fb28cdd2ab49d8e5baada1ffed2633448cbdc94ebb7"
});




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
/*
app.get('/prueba',function(req,res){

    

    res.render('prueba')
});
*/
app.get('/prueba', function(req,res){
  var salida = []
  unsplash.search.photos("food", 1,10)
  .then(toJson)
  .then(response => {
  
    
    (response.results).forEach(element => {
      salida.push(element.urls.thumb)        
  });
  //console.log(salida)
    
    res.render('publicarSorteo', {imagenes: salida})
  });


  

   

})

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
 
