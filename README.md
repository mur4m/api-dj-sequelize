# 🇫🇷 PROJET: SE FAMILIARISER AVEC SEQUELIZE 🇫🇷 

Tes tâches :

Installer et configurer Sequelize sur l'API
Créer les migrations pour les différentes tables
Créer les différents modèles
Lancer les migrations
Créer un seeder pour les genres de musique et le lancer (un fichier seed avec les données est fourni)
Coder la logiquer métier dans les contrôleurs (intéractions avec la base de données)
On doit pouvoir :

---

On doit pouvoir :

ajouter un DJ
récupérer les informations concernant un DJ
récupérer la liste de tous les DJs
modifier un DJ
supprimer un DJ
récupérer la liste de tous les genres de musique
ajouter un club
récupérer la liste de tous les clubs
récupérer les informations concernant un club

---
4 tables :

Djs (stocke les informations concernant les DJs)
Musicalgenres (stocke les différentes genres de musique)
Clubs (stocke les informations concernant les clubs)
DjMusicalgenres (stocke les relations entre Djs et Musicalgenres)

---
Relations :

Un DJ mixe un ou plusieurs genres de musique (relation many-to-many).
Un genre de musique peut être lié à plusieurs DJs (relation many-to-many).
Un DJ peut être résident dans un et un seul club (relation one-to-many).

---
Routes :

GET /api/djs - récupérer la liste de tous les DJs
GET /api/djs/:name - récupérer les informations concernant le DJ "name"
POST /api/djs - ajouter un DJ
PUT /api/djs/:name - modifier les informations concernant le DJ "name"
DELETE /api/djs/:name - supprimer le DJ "name"
GET /api/musicalgenres - récupérer la liste des genres de musique
GET /api/clubs - récupérer la liste des clubs
POST /api/clubs - ajouter un club
GET /api/clubs/:name - récupérer les informations concernant le club "name"

---
---
---

# 🏴󠁧󠁢󠁥󠁮󠁧󠁿 PROJECT : GETTING STARTED WITH SEQUELIZE 🏴󠁧󠁢󠁥󠁮󠁧󠁿


Your tasks :

Install et set Sequelize up on the API
Create all tables' migrations
Create all models
Launch migrations
Create a seeder for musical genres and launch it (a seed file is provided with the data)
Code the logic of the app within the controllers (interacting with the database) 

--- 

We should be able to :

add a DJ
get data relative to a DJ
get a list of all DJs
updtate a DJ
delete un DJ
get a list of all musical genres
add a club
get a list of all clubs
get data relative to a club

---

4 tables :

Djs (stores data relative to Djs)
Musicalgenres (stores data relative to Musicalgenres)
Clubs (stores data relative to Clubs)
DjMusicalgenres (stores relations between Djs et Musicalgenres)

---
Relations :

A DJ mixes one to many musical genres un ou plusieurs genres de musique (relation many-to-many).
A musical genres is related to many djs (relation many-to-many).
A DJ belongs to one club only (relation one-to-many).

---

Routes :

GET /api/djs - get all DJs 
GET /api/djs/:name - get all data relative to a DJ by "name"
POST /api/djs - add a DJ
PUT /api/djs/:name - update data relative to a DJ by "name"
DELETE /api/djs/:name - delete a DJ by "name"
GET /api/musicalgenres - get all musical genres
GET /api/clubs - get all clubs
POST /api/clubs - add a club
GET /api/clubs/:name - get all data related to a club by "name"
