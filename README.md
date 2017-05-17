# nodeJS_webApp
Aplicació simple utilitzant NodeJS i BaseX

## Instruccions
Testejeu que teniu l'entorn ben configurat:
1) Engegueu basex en mode servidor:
	app_basex/bin/basexserver
2) Instaleu-vos el NodeJS
 sudo apt-get install nodejs

3) Proveu que funciona l'exemple Example.js :
	./basex-node-master/examples

4) Fixeu-vos que el codi fa el següent:
// Importa els la informació necessària per connectar-se al baseX (per tant cal que tingueu la carpeta index en el vostre projecte!!)
var basex  = require("../index");
// Es connecta al pot 1984 al localhost amb usuari "admin" i password "admin" (per defecte)
var client = new basex.Session("localhost", 1984, "admin", "admin");

...
// Executa una sentència XQuery
client.execute("xquery 1 to 10",print);

// Exploreu els exemples i el codi...

5) Una vegada familiartizats, anem a la part web ...

StreamAddExample.js

5) 
