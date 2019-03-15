// require syntax
require('es6-promise').polyfill();
require('isomorphic-fetch');
const Unsplash = require('unsplash-js').default;
const toJson =  require('unsplash-js').toJson;


const unsplash = new Unsplash({
  applicationId: "30bec4c9a180eea6631123f50433fe7d3c689d4aa899598a194cb67cb86aca11",
  secret: "e4c72929d40c80dfbbfc5fb28cdd2ab49d8e5baada1ffed2633448cbdc94ebb7"
});
var salida = []
unsplash.search.photos("dogs", 1,10)
  .then(toJson)
  .then(response => {
    
   
      (response.results).forEach(element => {
          salida.push(element.urls.thumb)        
      });

      console.log( salida )
   
  });