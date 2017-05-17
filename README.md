# nodeJS_webApp
Aplicació simple utilitzant NodeJS i BaseX

## Instruccions
Testejeu que teniu l'entorn ben configurat:
1) Engegueu basex en mode servidor:
	app_basex/bin/basexserver
2) Instaleu-vos el NodeJS  (si esteu amb Windows, es pot instal·lar nodejs sense versió administrador)
 sudo apt-get install nodejs

3) Proveu que funciona l'exemple Example.js de :
	./basex-node-master/examples

4) Estudiar una mica el codi (veure possibilitats)
Fixeu-vos que el codi fa el següent:
// Importa els la informació necessària per connectar-se al baseX (per tant cal que tingueu la carpeta index en el vostre projecte!!)
var basex  = require("../index");
// Es connecta al pot 1984 al localhost amb usuari "admin" i password "admin" (per defecte)
var client = new basex.Session("localhost", 1984, "admin", "admin");

...
// Executa una sentència XQuery
client.execute("xquery 1 to 10",print);

// Exploreu els exemples i el codi...

5) Exploreu més exemples ... per exemple (i comenteu-los amb el vostre company/a de grup):

StreamAddExample.js

6) Executeu la pàgina web de proves. Aneu a la carpeta:
      simpleWebApp_NodeJS
      
   I executeu: 
    node webapp_nodejs.js
        I ja podeu anar a:
            http://localhost:8888/
    ... per comprovar que funciona!
    
7) Ara ja podeu modificar l'aplicació web per fer la vostra aplicació. 
   Podeu partir d'aquí (podeu canviar el nom de la carpeta "simpleWebApp_NodeJS" i modificar-la per que funcioni el vostre projecte).
   
   Recordeu que el BaseX ha d'estar en mode servidor! (escolta pel port 1984)
   
   La informació de l'.XML pot ser la que cregueu convenient (per defecte podeu utilitzar la dels jugadors de bàsquet).
