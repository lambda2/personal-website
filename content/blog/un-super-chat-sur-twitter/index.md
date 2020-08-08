---
title: Un super chat sur Twitter
date: 2015-06-23T19:30:00.000Z
lang: fr
description: "L'idée de base est relativement simple: créer un nouveau compte Twitter, et faire un programme qui va — périodiquement — retweeter, liker et suivre des personnes.
Parce que un robot, c'est beaucoup plus patient que moi."
---

Il y a quelques temps, un copain, [Flavien](https://twitter.com/fguilloc), a eu la superbe idée de monter sa première start-up. [PandaScore](http://pandascore.co) était né, et avec, son compte Twitter. Au bout d'un an, et après plus de 700 tweets, il passe péniblement la barre des 250 followers. Pour m'être essayé à une époque à une semaine intensive de community management, (je n'avais pas vraiment de conseil à lui donner, j'ai plus précisément fait perdre une vingtaine de followers à la boîte, mettant ainsi fin à ma performance du moment), mais je voulais quand même essayer quelque chose: laisser un robot aux commandes.

Parce que un robot, c'est beaucoup plus patient que moi.

## Sur le papier

L'idée de base est relativement simple: créer un nouveau compte Twitter, et faire un programme qui va — périodiquement — retweeter, liker et suivre des personnes. L'API twitter ne permet de faire qu'on nombre limité d'actions dans un intervalle fixe de 15 minutes, on va donc se baser sur cette durée pour espacer nos actions.

## Choisir nos followers

On veut également se faire suivre par des personnes ayant des centres d'intérêts précis. Un compte qui parle de yoga, par exemple, ne doit pas essayer de copiner avec un militant pour les armes à feu. À moins que ce dernier soit fan de yoga (qui sait ?). Alors comment savoir ?
De toute façon, il n'y a pas beaucoup de solutions, et on va donc prendre la méthode la plus évidente, c'est à dire chercher toutes les personnes Tweetant sur un hashtag donné.

## Personne n'aime Jacques

Allez, c'est parti ! Je crée un compte bidon, "Jacques Martin", et je lui fait une bio audacieuse, sensible et sincère:

> Je suis Jacques, j'aime manger et cuisiner.

Et oui, Jacques aime la cuisine. On va ensuite configurer ensuite le robot pour chercher tous les gens qui tweetent sur le hashtag [#cuisine](https://twitter.com/hashtag/cuisine), et les suivre. Commence alors la grande quête de l'amitié. Le robot se connecte au compte toutes les 15 minutes, et à chaque appel, suit 10 nouvelles personnes.

Au bout d'un jour, Jacques suit ~ 1400 personnes, et est suivi par 6 personnes.

Au bout de deux jours, ~ 2600 personnes, et suivi par 13 personnes. On a donc à peu près une personne sur 200 qui se décide à suivre le compte de Jacques. C'est pas vraiment un bon ratio.

Twitter commence alors à bloquer mes demandes, et les comptes qui ont suivi Jacques se désabonnent peu à peu.

Une semaine plus tard, Twitter bloque le compte de ce pauvre Jacques. Décidément, personne ne l'aime. Ce moment a été un coup dur dans ma vie.

D'abord je ne comprends pas. Je me dis qu'il y a un bug, quelque part, dans ces 30 lignes de code aussi lumineuses que brillantes d'intelligence. Je commence alors à douter de tout, et, ivre de colère, je supprime le compte.

Après avoir repris goût à la vie, je me lance dans une nouvelle tentative.

## Mais tout le monde aime les chats

J'essaie alors de comprendre pourquoi ça n'a pas marché.
Premièrement, Jacques n'a jamais rien posté, et personne n'a envie de suivre un compte inconnu qui ne poste aucun contenu.
Ensuite, je n'ai pas joué avec les limites de twitter: 1000 abonnements par jours, 5000 abonnements maximum.
Enfin, personne n'aimait Jacques, il n'a eu aucun ami. C'est un fait.

Je repars donc sur de bonnes bases, et je fais plusieurs modifications sur le programme du robot.
À partir de maintenant, il va suivre un compte de référence, et retweeter chaque jour le tweet qui a eu le plus de succès (on s'assure ainsi que le contenu est bon). On va aussi se donner la peine de planifier quelques tweets au début, pour donner au compte un petit coup de pouce, et l'aider à décoller.
Il faut également qu'il se souvienne de toutes les personnes qu'il a suivies, et ne pas dépasser une limite de 3000 personnes, au bout de laquelle il va commencer à lâchement se désabonner des personnes qui ne l'ont pas suivies.
Enfin, il faut un compte qui plaise à tout le monde. Tout le monde aime les chats, et tout le monde aime les super héros. Ca sera donc un chat super héros (maintenant, avec le recul, c'était d'une évidence frappante).

J'ai donc publié mon premier tweet de super héros avec [@DaSuperCat](https://twitter.com/DaSuperCat), et j'ai laissé la main — non sans émotion — à la nouvelle version du robot.

`oembed: https://twitter.com/DaSuperCat/status/597085898770112512`

Au fil des jours, les gens suivent peu à peu mon chat, et il passe la barre des 500 followers au bout de deux semaines. Je rajoute aussi au robot quelques fantaisies, plus originales, comme liker des tweets ou [miauler quand les gens lui parlent](https://twitter.com/DaSuperCat/status/598047481734258688).

`oembed: https://twitter.com/DaSuperCat/status/598047481734258688`

## Postmortem

Entretemps, je me fais spammer. Je n'avais jamais réalisé que pas mal de personnes utilisent ce que je j'ai décidé d'appeler "l'application de l'enfer": Crowdfire. Développée par Méphistophélès en personne, elle permet d'envoyer un message privé automatique à une personne qui vient de te suivre. Mes larmes coulent à flots, et ma boite mail n'est plus qu'un tas de ruines fumantes.

Au bout de presque trois mois, le compte atteint les 3000 followers avec une progression stable, et — mon expérience étant un succès — je coupe le robot.

Pour des raisons sentimentales, je n'ai pas pu supprimer le compte Twitter de mon super chat.

## Bonus: le Cookbook du bot swag.

Au cours de cette formidable épopée, j'ai quand même croisé la route de beaucoup d'autres bots, la plupart n'ayant aucune morale (sans surprise), et aucun respect. La notion de respect, pour un robot, ca peux sembler abstrait, complexe et même inutile. C'est vrai, mais quelques petits gestes permettent néanmoins de rendre votre bot beaucoup plus respectueux  des autres, et donc de construire un monde meilleur, bla, bla, bla... Voici donc mes trois petits points que tout développeur gentleman se doit d'implémenter, ou de méditer. Parce que les méchants, c'est pas vous.

#### 1. Arrêtons l'acharnement.

Quand un humain dit non, c'est non ! Gardons donc en mémoire nos précédents échecs, et, par exemple, ne demandons pas en ami quelqu'un qui nous a déjà supprimé. Il en va de même pour les messages privés, et toute forme de répétition, pour essayer au maximum de limiter les interactions nuisibles avec les autres utilisateurs.

#### 2. Maîtrisons les patois locaux.

Si vous avez déjà croisé un post en anglais, entièrement en majuscules, et bourrés de fautes d'orthographe, vous voyez de quoi je parle. Un bot se doit d'écrire correctement, si possible dans la langue de l'interlocuteur, sinon en anglais, sans autres majuscules que celles décrites par les (saintes) écritures de la grammaire locale.

#### 3. Restons dignes.

Quoi de pire que les programmes qui envoient des milliers de messages pour nous supplier d'acheter `VERY GOOD WATCH BEST OFER 90% DISCOUNT ONLY TODAY` ? Personne ne veut de votre viagra.

Je pense qu'en respectant ces trois règles, on peut commencer à dire qu'un bot possède une once de respect.

---

En conclusion, si vous aussi, vous voulez aller toucher les limites de Twitter, ou [bosser pour le département de Haute Savoie](http://rue89.nouvelobs.com/2016/05/18/twitter-haute-savoie-sachete-mauvaise-reputation-264072), le code du robot est libre, et est [disponible ici](https://gist.github.com/lambda2/a2cd62116913878d4c81e85cc68b4866).
