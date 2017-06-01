// Based on 
// https://ilovecoding.org/lessons/creating-a-simple-web-app-with-nodejs#!

var http = require('http')
var url = require('url')

///////////////////////
// Connexio BBDD
//////////////////////
var basex  = require("./basex_connection/index");

//var log = require("./basex_connection/debug");
basex.debug_mode = false;



///////////////////////
// Part del servidor
///////////////////////
http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);

   showPage(response, pathName);

 
}


function showPage(response, pathName){
  if(contentMap[pathName]){
   response.writeHead(200, {'Content-Type' : 'text/html'})

    // Si es una funcio, l'executem
    if (typeof(contentMap[pathName]) == 'function'){
      // Per parametre li passo el response
      contentMap[pathName](response);
      //response.write(data);
      return;

    } else {
      // Si es una cadena, doncs mostrem el contingut ...
      response.write(contentMap[pathName]);  
    }

    response.end();
 }else {
  response.writeHead(404, {'Content-Type' : 'text/html'})
  response.write('404 Page not found');
  response.end();
 }

}
////////////////////////////////
  

function paginaXQuery( response){

  // create session
  var session = new basex.Session("localhost", 1984, "admin", "admin");


  // Query a llençar (XQuery)
  var input = 'for $i in 1 to 10 return <h1>Text { $i }</h1>';
  
  //var self = this;
  var query = session.query(input);

  // Escriura directament al response
  query.results(function(error,reply){ 
      if (error){
        // Hi ha hagut error! (el mostrem in tornem)
        console.log(error);
        return;
      }
      // Ha anat be, recollim la query
      resultat = reply['result'];
      
      // Escrivim el resultat (servidor ...) (linea a linea ...)
      var paginaHTML  = ""; //resultat.toString(); // resultat[0];
      for (item in resultat){
        paginaHTML = paginaHTML + resultat[item];
      }
      console.log(paginaHTML);

      response.write(paginaHTML);
      response.end(); // Ull! Es una funció asincrona.. s'acaba aquí!
      // Mes sobre funcions asíncrones : https://stackoverflow.com/questions/23667086/why-is-my-variable-unaltered-after-i-modify-it-inside-of-a-function-asynchron
      // Lectura recomanada : https://www.html5rocks.com/en/tutorials/async/deferred/
     
    });


  // Tenquem la instancia de la query
  query.close();
    
      // Tanquem la sessio
  session.close();

}

////////////////////////////
// Pagines 
///////////////////////////

function paginaBenvingut(response){
  // Seguint filosofia asincrona nodejs, passem el response i escrivim el resultat
  var paginaHTML = "<h1>Benvingut</h1>";
  response.write(paginaHTML);
  response.end();
}

function paginaAbout(response){
  // Seguint filosofia asincrona, passem el response i escrivim el resultat ... 
  var paginaHTML = "<h2>Sobre ...</h2>";
  response.write(paginaHTML);
  response.end();
}


var contentMap = {

 '/': paginaBenvingut,
 '/query' : paginaXQuery,
 '/about' : paginaAbout,


}

