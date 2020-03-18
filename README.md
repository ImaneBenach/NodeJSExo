# NODE.JS - CHAT-BOT 

Ce dépot contient un serveur web / API en Node.js.
Ce serveur répond "Hello World" quand on envoie une requête HTTP GET à la racine.

## Installation & Exécution

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
$ git clone https://github.com/adrienjoly/node-esgi.git
$ cd node-esgi
$ npm install # pour installer les dépendances
$ npm start # pour exécuter le serveur
# presser ctrl-c pour quitter le serveur
```
## Utilisation: Tester le serveur

```python
$ curl http://localhost:3000/ # doit retourner le texte “Hello World”
```

## Points d'accès

```
$ curl http://localhost:3000/ #retourne bien le texte “Hello World”.
$ curl http://localhost:3000/hello?nom=Sasha #répondra Bonjour, Sasha !
$ curl http://localhost:3000/hello?nom=Michel #répondra Bonjour, Michel !
$ curl http://localhost:3000/hello #répondra Quel est votre nom ?
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat #répondra “Nous sommes à Paris."
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat #répondra “Il fait beau”.
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" http://localhost:3000/chat #répondra “Je ne connais pas demain…”
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain = Mercredi\"}" http://localhost:3000/chat #répondra “Merci pour cette information !”
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"demain\"}" http://localhost:3000/chat #répondra “demain: Mercredi” (y compris après redémarrage du serveur)
$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat #répondra “Nous sommes à Paris” (comme dans le dernier exercice de la partie précédente)
$ curl -X GET http://localhost:3000/messages/all #affichera l’historique des conversations (messages de l’utilisateur et réponses du chat-bot), tel que décrit ci-dessous, y compris après redémarrage du serveur
$ curl -X DELETE http://localhost:3000/messages/last #supprimera le dernier échange de l’historique (message de l’utilisateur + réponse du chat-bot)

```