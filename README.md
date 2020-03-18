Description de l'exercice :
Le but est de développer un serveur Web/API basique qui répondra systématiquement “Hello World” à toutes les requêtes HTTP GET émises par des clients au chemin / (racine). Nous allons pour cela utiliser la bibliothèque Express.js.

NODE.JS API:\n
Ce dépot contient un serveur web / API en NODE.JS.
Ce serveur répond "Hello World" quand on envoie une requête HTTP GET à la racine.

Installation & Exécution:
$ git clone https://github.com/adrienjoly/node-esgi.git
$ cd node-esgi
$ npm install # pour installer les dépendances
$ npm start # pour exécuter le serveur
# presser ctrl-c pour quitter le serveur

Tester le serveur:
$ curl http://localhost:3000/ # doit retourner le texte “Hello World”



