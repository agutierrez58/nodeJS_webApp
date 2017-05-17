// Based on 
// https://ilovecoding.org/lessons/creating-a-simple-web-app-with-nodejs#!

var http = require('http')
var url = require('url')

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
  response.write(contentMap[pathName]);
  response.end();
 }else {
  response.writeHead(404, {'Content-Type' : 'text/html'})
  response.write('404 Page not found');
  response.end();
 }

}

var contentMap = {

 '/': '<h1>Benvingut</h1>',
 '/query' : '<h1> Consulta a la bbdd</h1> <p> La idea es que .. </p>',
 '/about' : '<h1> Sobre tu mateix </h1>'

}

