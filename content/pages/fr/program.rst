Programme
#########

:slug: program
:lang: fr

Conférences et Ateliers (samedi 6, dimanche 7)
==============================================

.. raw:: html

  <iframe src="http://docs.google.com/gview?url=https://www.pycon.fr/2018/images/program.pdf&embedded=true" frameborder="0"></iframe>

  <br/>

  Problème d'affichage ? <a href="/images/program.pdf">Lien direct vers le pdf</a>

Index des sprints (jeudi 4, vendredi 5)
=======================================

*Les sprints auront lieu de 9h à 18h sur les deux jours.*

.. raw:: html

  <br/>
  <br/>

AFPy : outils de communication, gestion des serveurs, actions en faveur de la diversité
---------------------------------------------------------------------------------------

.. raw:: html

  <i>Arthur Vuillard</i>
  <br/>
  <br/>

.. container:: wrap-paragraph

  L'Association Francophone Python profite de l'oganisation de PyConFr pour
  organiser un atelier de travail sur différents outils permettant de réaliser
  ses actions.

  Toute personne bénévole et volontaire pour faire la promotion de Python en
  Français est la bienvenue à ce sprint.

  Les tâches qui pourront ếtre réalisées :

  - amélioration des outils de communication : site web, réseaux sociaux, listes
    de diffusion, mail d'actualité
  - mise à jour et entretien des serveurs : nous avons des serveurs sous FreeBSD
    utilisant des jails pour chacune des services
  - actions en faveur de la diversité dans la communauté python : trouver des
    idées et la manière de les réaliser afin de diversifier le public des
    événements organisés par l'AFPy
  - toute autre tâche en lien avec l'objet de l'association

.. raw:: html

  <hr/>

Gnocchi
-------

.. raw:: html

  <i>Julien Danjou</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  A sprint around Gnocchi, a highly scalable time series database written in
  Python. Everyone's welcome and can learn how to use Gnocchi and add some
  features.

  They are low hanging fruit available for anyone who wants to begin
  playing with Python, and higher stakes for people that are familiar with REST
  API or time series data!

.. raw:: html

  <hr/>

Hapic - portage vers marshmallow 3 et support OpenAPI 3
-------------------------------------------------------

.. raw:: html

  <i>Damien Accorsi</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Hapic est une bibliothèque pour développer des APIs REST professionnelles
  auto-documentées indépendante du framework web sous-jacent.

  Elle permet notamment :

  - de développer ses APIs sans se préoccuper du framework, voire de changer de
    framework avec le strict minimum de refactoring (quelques imports)
  - de publier la documentation en même temps que les API
  - d'avoir une documentation nécessairement à jour par rapport à l'API
    publiée - le code *est* la documentation (par opposition au code qui
    *contient* la documentation - auquel cas la documentation peut ne pas être à
    jour).

  Apispec - sur lequel repose Hapic, a beaucoup évolué et support désormais
  Marshmallow 3 et OpenAPI 3, ce qui nécessite un certain travail de refactoring
  sur Hapic. C'est l'objectif du sprint proposé.

  Accessoirement, ce sera l'occasion d'améliorer la couverture de test de Hapic,
  et peut-être de finaliser le support de aiohttp si ce n'est pas terminé d'ici
  là.

  Hapic is a framework-agnostic library for implementation of professionnal REST
  APIs.

.. raw:: html

  <hr/>

Nettoyage participatif des modules Ansible
------------------------------------------

.. raw:: html

  <i>Pierre-Louis Bonicoli, Michael Scherer</i>
  <br/>

Description du sprint
~~~~~~~~~~~~~~~~~~~~~

.. container:: wrap-paragraphe

  Ansible est un outil libre de configuration et d'orchestration écrit en Python.

  Au cours de cet atelier de codage participatif, avec l'aide d'un contributeur
  (@pilou-) et d'un membre de la core team (@mscherer), nous vous proposons de
  contribuer à Ansible et plus particulièrement aux modules Ansible existants:

  - corrections de bug existants
  - reviews de pull-requests existantes
  - nettoyage de code, par exemple:
  - suppression des exceptions listées dans 'ansible/test/sanity/\*/ignore.txt'
  - vérifications module par module que la documentation et le module sont cohérents
  - amélioration des tests instables
  - ajout de tests unitaires (tox/mock) et d'intégration (docker/lxc)
  - amélioration de la documentation
  - compatibilité avec Python 3

  Le sprint débutera par une courte présentation (~1h30) du projet Ansible et du
  processus de contributions:

  - structure du dépôt Git
  - fonctionnement de la CI
  - fonctionnement du bot utilisé pour trier les issues et pull requests GitHub

  Ce sprint sera l'occasion pour vous:

  - d'échanger à propos du fonctionnement d'Ansible
  - de corriger des bugs éventuellement rencontrés
  - de contribuer à un logiciel libre utilisant Git et GitHub

Prérequis et configuration nécessaire
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: wrap-paragraph

  Les personnes débutant avec Python et Ansible sont les bienvenues.
  
  Pour participer, sont requis:

  - un compte GitHub
  - un ordinateur portable supportant l'environnement de développement suivant
    et permettant de lancer Ansible:
  - Python (2.7 ou 3.5+)
  - une installation Git fonctionnelle
  - un systéme d'exploitation Linux, \*BSD ou Mac. Le nœud de controle Ansible
    ne peut pas être sous Windows, mais une version récente de WSL marche, ainsi
    qu'une VM Linux

  Nous vous accompagnerons si nécessaire dans la mise en place de cet environnement de développement (si votre système d'exploitation n'est pas Windows).
  
  Il est recommandé d'avoir forké le projet Ansible et d'avoir parcouru la
  documentation
  (http://docs.ansible.com/ansible/latest/intro_getting_started.html) et le
  guide du développeur (http://docs.ansible.com/ansible/devel/dev_guide).


Contributions réalisées lors d'un sprint précédent
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: wrap-paragraph

  Une première version de ce sprint s'est déroulée lors des sprints PyConFR en
  septembre 2017, voici la liste des contributions qui en ont résultées :

  - https://github.com/ansible/ansible/pull/30696: pull request rejetée, un des
    commits a cependant été accepté :
    https://github.com/ansible/ansible/commit/901bc2cffef231194a5710bb068c7218590c5a91
  - https://github.com/ansible/ansible/pull/30707: ajout d'un test unitaire pour
    le plugin d'inventaire YAML
  - https://github.com/ansible/ansible/pull/30710: correctif d'une erreur Python
    3 (fixé entre-temps dans une autre PR)
  - https://github.com/ansible/ansible/pull/30713: correctif de la documentation
  - https://github.com/ansible/ansible/pull/30738 correctif du module apt (non
    mergé)
  - https://github.com/ansible/ansible/pull/30742: mise à jour de la liste des
    mainteneurs
  - https://github.com/ansible/ansible/pull/30747: correctif du module apt
  - https://github.com/ansible/ansible/pull/30762: ajout de tests unitaires pour
    le module iptables
  - vérifications et fermetures de rapports de bug obsolètes (module iptables)
  - https://github.com/ansible/ansible/issues/21182
  - https://github.com/ansible/ansible/issues/25153
  - https://github.com/ansible/ansible/issues/29379

.. raw:: html

  <hr/>

Kivy: Framework UI multitouch et multiplateforme flexible et performant
-----------------------------------------------------------------------

.. raw:: html

  <i>Gabriel Pettier</i>
  <br/>
  <br/>

.. container:: wrap-paragraph

  Kivy est un framework GUI multiplateforme (windows, linux, osx, android, ios),
  qui permet de définir rapidement des interfaces hautement customisées et des
  interactions innovantes. Il se base sur OpenGL et donne un accès assez bas
  niveau, tout en offrant une interface simple et intuitive.

  - Le but de ce sprint est principalement de corriger des bugs, que ce soit sur
    le framework lui-même, ou sur les outils de déploiement mobile,
    (python-for-android, kivy-ios), en fonction des connaissances et motivations
    des personnes présentes.
  - Une attention particulière sera apporté à la
    résolution de problèmes spécifiques au support python3.

  Pré-requis:

  - une version *de développement* de kivy installée et fonctionnelle sur un
    ordinateur windows, linux ou osx.
  - connaissances de base d'usage de git

.. raw:: html

  <hr/>

Nouvelle architecture Modoboa
-----------------------------

.. raw:: html

  <i>Antoine Nguyen</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  L'architecture actuelle de Modoboa montre des signes de fatigue et nécessite
  un bon coup de plumeau ! Le sujet a déjà commencé mais de l'aide serait plus
  que bienvenue ;-)

.. raw:: html

  <hr/>

Pysyphe
-------

.. raw:: html

  <i>Adrian Vandier Ast</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Pysyphe permet de créer et manager ses propres transactions. Il créé pour cela
  des pipelines d'actions unitaires rollbackables. Dans cet atelier, on vous
  présentera ce que ça permet de faire et comment ça fonctionne. On tentera
  également de faire des opérations complexes d'update sur plusieurs backends
  sans douleur.

.. raw:: html

  <hr/>

Python, décentralisation, fédération, et tout un écosystème de communication avec « Salut à Toi »
-------------------------------------------------------------------------------------------------

.. raw:: html

  <i>Poisson Jérôme</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  « Salut à Toi » (https://salut-a-toi.org) est un écosystème de communication
  décentralisé basé sur le protocole standard XMPP. Allant bien au delà de la
  messagerie instantanée, il offre des fonctionnalités comme le blogage/réseau
  social, le partage de fichiers, les albums photos, la création d’événements,
  les forums, les tickets et merge-requests, etc.

  C'est un projet unique qui a une architecture démon/frontaux lui permettant de
  tourner, toujours en Python, sur bureau, Android, web, console (TUI) et ligne
  de commande (CLI).

  Un développement participatif sur ce projet permet de voir des cas concrets
  d'utilisation de technologies Python excitantes comme:

  - Twisted pour le développement asynchrone et la gestion du réseau
  - Kivy pour les interfaces bureau et Android
  - Python for Android pour faire fonctionner le logiciel sur téléphone
  - Urwid pour le développement de l'interface console (TUI)

  Libervia, l'interface web, est désormais un cadriciel (framework) web unique
  en son genre, permettant de développer des sites naturellement décentralisés
  en se basant sur XMPP.

  Vous l'aurez compris, il y en a pour tous les goûts, et je souhaite proposer
  une séance de code participatif sur un ou des sujets qui plaisent aux
  participants. Quelques suggestions:

  - utilisation du framework web de Libervia
  - chiffrement de bout en bout pour le blogage (il est déjà disponible pour la
    messagerie instantanée)
  - intégration des outils Python => Javascript au framework web, en particulier
    Brython et Transcrypt
  - implémentation de la vidéo-conférence. Pour le web la difficulté devrait
    être raisonnable (grâce à WebRTC), pour le bureau/Android ça sera beaucoup
    plus compliqué puisqu'il faudra intégrer un outil comme GStreamer à Kivy, il
    s'agira surtout d'une introduction
  - une passerelle XMPP/ActivityPub, qui permettra de communiquer avec des
    projets comme Mastodon ou PeerTube
  - s'appuyer sur le système de thèmes et les outils de développement déjà
    existants (tickets et merge-requests) pour faire une forge type
    Gitlab/Gogs/Gittea décentralisée

  Au moment de la Pycon, plusieurs chantiers seront en cours ou terminés, en
  particulier le port en Python 3.

.. raw:: html

  <hr/>

Release d'AnyBlok 1.0.0
-----------------------

.. raw:: html

  <i>JS Suzanne</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Plus que du code, l'objectif de ce sprint est de préparer la release 1.0.0 d'AnyBlok par:

  - L'amélioration de la documentation
  - Ajout + résolution de tickets

.. raw:: html

  <hr/>

Socialite: Private-first social network powered by Python 3.5 and asyncio aiohttp
---------------------------------------------------------------------------------

.. raw:: html

  <i>Amirouche Boubekki</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Venez vous faire les mains sur un projet utilisant Python 3.5 et le framework
  **aiohttp** basé **asyncio** (avec des morceaux de FoundationDB dedans).

  https://github.com/amirouche/socialite/

.. raw:: html

  <hr/>

Tracim - interconnexion de Tracim avec Collabora Online
-------------------------------------------------------

.. raw:: html

  <i>Damien Accorsi</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Tracim est une plateforme libre de collaboration. Après la v1 sortie en
  janvier dernier -
  https://linuxfr.org/news/tracim-socle-libre-du-travail-en-equipe-sort-en-v1-0,
  la v2 - une refonte complète (graphisme, ergonomie et architecture) est en
  cours et devrait sortir courant d'été 2018.

  Dans cette v2, il manquera toujours une fonctionnalité importante : l'édition de
  documents en ligne. Pour implémenter cela, nous envisageons dans un premier
  temps de développer un prototype se basant sur Collabora Online, OnlyOffice ou
  autre.

  L'idée de ce sprint est de travailler de 2 à 4 développeurs pour mettre au
  point un prototype fonctionnel en 2 jours.

  Si d'autres personnes sont motivées, on peut envisager d'autres travaux :

  - bugfix sur l'api REST
  - amélioration de lib de preview de fichiers
  - client lourd python/tk ou pyqt
  - ...

.. raw:: html

  <hr/>

Traduction de la doc de Python
------------------------------

.. raw:: html

  <i>Julien Palard</i>
  <br/>
  <br/>

.. container:: wrap-paragraph

  Venez traduire un bout de la doc de Python, c'est une bonne occasion de la
  lire et donc de découvrir quelque chose que vous ne connaissiez pas, tout en
  rendant Python plus accessible.

.. raw:: html

  <hr/>

Yunohost, démocratiser l'auto-hébergement
-----------------------------------------

.. raw:: html

  <i>Élie Gavoty, Valentin Grimaud</i>
  <br/>
  <br/>

.. container:: wrap-paragraph

  YunoHost est un système d’exploitation serveur visant à rendre accessible
  l’auto-hébergement à autant de personnes que possible, sans délaisser la
  qualité et la fiabilité du logiciel. YunoHost supporte plusieurs types de
  matériel et est basé et compatible avec Debian GNU/Linux. Son coeur est écrit
  en python.

  Au programme du sprint :

  - Contribuer au système de backup de yunohost.
  - Avancer sur la migration du core vers python3
  - Chasse aux bugs
  - D'autres fonctionnalités en cours de développement peuvent également occuper
    notre temps. Comme yunohost est une distribution plutôt généraliste, les
    sujets sont plutôt variés.

.. raw:: html

  <hr/>

Index des conférences
=====================

Conférence plénière #1 Science and Open Source: what do we learn from each other?
---------------------------------------------------------------------------------

.. raw:: html

  <i>Viviane Pons - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  As both a scientist and a developer, I will discuss the values that motivate
  my work in both worlds. I will also describe the common challenges that we
  face and how we can get better.

.. raw:: html

  <hr/>

Conférence plénière #2 The emergence of consensus in the Python community
-------------------------------------------------------------------------

.. raw:: html

  <i>Julien Palard - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  This talk is about searching, finding, and maybe understanding how Python
  developers make their choices in face of alternatives. We're told "There
  should be one-- and preferably only one --obvious way to do it." let's stop
  doing our "own way". I'll try to answer simple questions like "Is the
  consensus is to use pytest or unittest?" and tricker questions.

.. raw:: html

  <hr/>

Conférence plénière #3 The CPython community: how to get more contributors?
---------------------------------------------------------------------------

.. raw:: html

  <i>Victor Stinner - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  The CPython project is now 28 years old. It has active core developers, but
  almost all of them are volunteers. It's difficult to ask someone to be commit
  into a project for 5 years without being paid. Helping newcomers and mentoring
  contributors takes time and few developers are available for that. We are
  working on improving the diversity of CPython core developers and get more
  active core developers, but it's a slow process.

.. raw:: html

  <hr/>

A multi-core Python HTTP server (much) faster than Go (spoiler: Cython)
-----------------------------------------------------------------------

.. raw:: html

  <i>Jean-Paul Smets - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  A multi-core Python HTTP server that is about 40% to 110% faster than Go can
  be built by relying on Cython language and lwan C library. A proof of concept
  validates the possibility of high performance system programming in Cython
  language.

.. raw:: html

  <hr/>

Assemblée générale de l'AFPY
----------------------------

.. raw:: html

  <i>Arthur Vuillard - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  L'assemblée générale de l'entité organisatrice de la PyConFR se tiendra durant
  l'événement. Elle est bien entendu ouverte aux curieux.

.. raw:: html

  <hr/>

Bringing Shakespeare back to life!
----------------------------------

.. raw:: html

  <i>Arnav Arora - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraph

  Language modelling is a hard task in Natural Language Processing. Each
  language has so many nuances to it and we've barely scratched the surface in
  trying to understand how we came about learning them. In the talk, I'll be
  briefly discussing the importance of language in our society, how it helps us
  become a sort of a hive mind to learn from each other. I'll show the progress
  we've made in text generation and the various techniques that have proven to
  be successful so far (bow, embeddings, language models). Lastly, I'll be
  showing some recent advances in unsupervised transfer learning in NLP (ULMFiT,
  ELMo) with a practical implementation of a pretrained model learning to write
  like Shakespeare using his texts. Will end the talk with possible areas to
  explore in the field. The code will be in the form of a Jupyter notebook.

.. raw:: html

  <hr/>

Learn BDD in Python with Behave
-------------------------------

.. raw:: html

  <i>Lionel Lonkap - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  BDD is one of the not so well known testing techniques used in Software
  development to ensure every actor involved (Business, Devs, Ops, SecOps, ...)
  build understanding on :

  - Why we build something; for WHO?
  - WHAT is built?
  - WHEN the thing we built is considered done?

  My Talk is about using BDD in Python with Behave Framework; to ensure that
  your development brings the right value your the Business. We will start as a
  beginner and try to achieve the Expert level.
  
.. raw:: html

  <hr/>

Calculer la QOS de vos infrastructures avec Asyncio
---------------------------------------------------

.. raw:: html

  <i>Nicolas Crocfer, Anthony Olea - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Notre équipe, composée de 4 développeurs chez OVH, travaille depuis plusieurs
  mois sur un projet nommé DEPC (Dependency Checker).

  Cet outil, composé d'une API et d'une WebUI, offre 2 fonctionnalités
  principales :

  - manager un graphe de dépendances entre les services d'OVH via la base de
    données Neo4j,
  - calculer la QOS de chaque noeud du graphe en fonction de metrics hébergées
    sur des bases de données TimeSeries.

  L'outil a été initialement développé avec Flask et SQLAlchemy, mais quelques
  problèmes de performance, lié à des soucis de scaling Celery, nous ont poussés
  à le migrer vers une solution asynchrone. Nous sommes donc parti sur Asyncio
  via le framework Sanic, en combinaison avec Gino pour l'accès à la base de
  données.

  Le sujet de cette conférence portera sur ce retour d'expérience : nous
  aborderons les gains de performances par rapport à l'ancienne stack, mais
  également les problèmes que nous avons rencontrés durant la migration.

.. raw:: html

  <hr/>

Can a few lines of Python help thousands of people?
---------------------------------------------------

.. raw:: html

  <i>Anuj Menta - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  I wrote a few lines of code to build a web application using Flask back in
  University. Everyone found it so good, it was like a forest fire. I could
  never have estimated that a few lines of code can help thousands of people
  with stuff they do every day. In my case, I designed and developed a website
  'Papercop' which did the simple job of downloading all the relevant question
  papers from the university's portal and all the student had to do was enter
  their roll number.

  No Ads. No signups. No logins. One input. One output. And everyone out there
  loved it. Thousands of students used the site before every examination

  I'd like to take the audience through the ups and downs of seeing how a simple
  idea they keep thinking of, can be brought to life using Python while talking
  about best practices and growth hacks.

.. raw:: html

  <hr/>

Comment j'ai automatisé la compta de ma boite
---------------------------------------------

.. raw:: html

  <i>Anthony Martinet - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  La saisie de facture, que ce soit niveau fournisseur ou client est une tâche
  simple, rigoureuse mais très fastidieuse. Hors forfait par ci, consommation au
  Giga par là, tenir une comptabilité deviens une tâche pouvant consommer pas
  mal de temps dans une petite entreprise.

  Découvrez comment nous nous servons de Python et des outils en Python pour
  automatiser tout celà. Au menu :

  - Odoo et ses API
  - Fournisseur avec API
  - Weboob : Fournisseur sans API
  - Simplifier son lettrage

  Pas de code ici, mais des pointeurs sur le process, les choses qui ont
  marchés, celles qui n'ont pas marchés et des axes d'améliorations

.. raw:: html

  <hr/>

Comment le machine-learning m'a permis de comprendre Closer
-----------------------------------------------------------

.. raw:: html

  <i>Thibault Giordan - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Retour d’expérience sur un projet personnel d'application web utilisant du
  machine-learning pour reconnaître des stars :

  - Reconnaître une star sur une photo (via des réseaux de neurones)
  - Reconnaître une star à partir de ses rôles/caractéristiques (via des
    traitements de text-mining)

  Nous parlerons de différentes librairies python (spacy, face_recognition,
  scrapy) ainsi que de concept orienté data-science (reconnaissance facile,
  text-mining...)

.. raw:: html

  <hr/>

Consommer et produire des e-mails avec Python : lire, écrire, etc.
------------------------------------------------------------------

.. raw:: html

  <i>Stéphane Blondon - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Cette conférence présentera quelques bibliothèques pratiques à un développeur
  pour exécuter des traitement automatisés sur des e-mails comme la lecture, la
  suppression ou bien évidemment l'envoi d'e-mails.

  Tous les niveaux sont attendus.

.. raw:: html

  <hr/>

Containers for developers
-------------------------

.. raw:: html

  <i>Vincent Maillol, Sami Makki - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Today, there is a big traction for containers in the production world. But
  containers are not made for developers, and it's only been recently that some
  features, such as the multi-stage dockerfiles, were introduced for them.

  Because we were a small team, we couldn't maintain both Dockerfiles for
  development and production. That's why we developed our own scripts to
  template them. Today, those are no longer scripts, but a plain OpenSource
  Software that can help all developers stopping getting crazy while maintaining
  a ton of dockerfiles... without boilerplate !

.. raw:: html

  <hr/>

Convolution Network in vanilla Python
-------------------------------------

.. raw:: html

  <i>Prakhar Srivastava - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  This workshop aims at providing the attendees an experience of implementing
  convolution neural from scratch without any big frameworks working in the
  backend supplementing the need for computation. This would give the attendees
  an overall understanding of what are Convolution Neural Networks and why do
  they work so exceedingly well in image processing!

  This session would basically focus on python and it's ecosystem and how well
  it goes up with the current research paradigm shift that is happening due to
  the boom in Artificial intelligence. The session would help developers to
  amass the importance of mathematics and the ease that python provides in
  coding it, even from scratch. This would encourage the developers only to try
  more and more python programming for deep learning. For a nascent developer,
  this session packs in a high educational reward as he will be exposed to the
  mathematics behind the most successful algorithm of the past couple of
  decades.

  This workshop aims to provide a look through the abstraction offered by big
  frameworks for developers to understand why mathematics behind data science is
  necessary yet, give them the insight into why abstraction is a key player in
  deep learning.

  Q. What can developers expect from this workshop!
  Understand what are convolution neural networks
  Why they work so well on image data?
  All the different implementation of Convolution network and how they improve
  the vanilla network
  What are the best ways to implement convolution network on a given data

  Q. What this workshop is not!
  Just another workshop telling you to use frameworks
  Mathematics will not be looked over. (It's important)
  This session would provide a much-needed exposure to python programming
  language and how its ecosystem helps deep learning so well.

.. raw:: html

  <hr/>

CRAPPY: un module pour le pilotage de systèmes multi-instrumentés
-----------------------------------------------------------------

.. raw:: html

  <i>Victor Couty - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  CRAPPY pour "Command and Real-time Acquisition in Parallelized PYthon" est un
  module Python permettant de faire interagir des capteurs et des actionneurs.
  Son développement est centré sur la polyvalence: il est prévu pour permettre
  l'intégration d'un grand nombre d'éléments. Il est déjà capable de gérer de
  nombreux dispositifs comme des caméras, moteurs et cartes d'entrée/sorties
  mais il permet surtout l'ajout de nouveaux objets dans le programme ou
  directement au sein du module de manière simple. CRAPPY contient un certain
  nombre d'outils comme le correcteur PID, le générateur de signaux ou l'attente
  de conditions, mais il permet surtout l'utilisation de fonctions Python
  définies par l'utilisateur. Il a été développé par le LaMcube (anciennement
  Laboratoire de Mécanique de Lille) afin de permettre la mise en place d'essais
  mécaniques multi-instrumentés. Au sein du laboratoire, nous développons et
  utilisons CRAPPY aussi bien pour des applications simples comme le pilotage
  d'un four par Raspberry Pi que sur des montages plus complexes, par exemple un
  banc de simulation de freinage de train. Nous pensons que par sa polyvalence,
  ce module a des applications bien au delà de la recherche scientifique et
  cette présentation a pour objectif de faire connaître ce module open-source et
  donner des exemples d'applications réelles avec du matériel accessible.
  Le code est disponible à l'adresse
  https://github.com/LaboratoireMecaniqueLille/crappy

.. raw:: html

  <hr/>

Débuter en programmation web avec asyncio et aiohttp
----------------------------------------------------

.. raw:: html

  <i>Amirouche Boubekki - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  asyncio est un nouveau module qui supporte en Python 3.5+ la syntaxe async /
  await. Il facilite grandement la programmation asynchrone en évitant la
  programmation par callback. Le principe de la programmation asynchrone est de
  traiter plus de requêtes en même temps. Nous verrons dans cette présentation
  que c'est facile de faire de la programmation web asynchrone à l'aide du cadre
  logiciel aiohttp.

.. raw:: html

  <hr/>

Deep Learning the Bayesian way : Moving towards safer AI !
----------------------------------------------------------

.. raw:: html

  <i>Ayush Singh - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  With the advancements in the domain of Deep learning, it has found application
  in various real-life problems such as self-driving cars and healthcare
  diagnosis. But with great powers comes greater responsibility, so the question
  arises, “Is our AI safe ?”

  The critical part of any machine learning system is understanding what it does
  not know. Unfortunately, today’s deep learning algorithms are usually unable
  to understand their uncertainty.

  This talk will provide an introduction to the resurging filed of Bayesian Deep
  Learning. I would be discussing various theoretical aspects and the current
  state-of-the-art in this domain. I would be taking you through the code for
  constructing Bayesian deep nets and visualizing their uncertainty in their
  results using libraries like PyMC3, Pytorch.

  The prerequisites for this talk familiarity with basic probability,
  Intermediary python, and passion to learn something new :)

.. raw:: html

  <hr/>

Déployer des applications python dans un cluster openshift
----------------------------------------------------------

.. raw:: html

  <i>Arthur Lutz - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Quelles sont les particularités et les avantages pour pouvoir livrer des
  applications web python dans un cluster OpenShift (qui a du Kubernetes en
  dessous).

  Nous verrons les mécanismes suivants :

  - s2image (source to image Docker) dans openshift : comment construire
    l'application simplement avec un requirements.txt et du WSGI
  - Comment livrer du django avec Postgresql
  - Comment livrer une application CubicWeb
  - Les mécanismes de sécurités associés
  - Les URL automatiques pour tester des contributions ou des branches nommées
  - Parallèles avec repo2docker de l’écosystème jupyter
    https://github.com/jupyter/repo2docker

  Nous exposerons aussi les avantages et inconvénients de déployer des
  applications web python sur un cluster type openshift ou kubernetes.

  - https://www.openshift.org/
  - https://kubernetes.io/
  - https://github.com/openshift/source-to-image

.. raw:: html

  <hr/>

Design Patterns pour Python Micro-services
------------------------------------------

.. raw:: html

  <i>Michael Bright - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Cette présentation introduira les notions de "micro-service design pattern" et
  comment ils peuvent etre exploites pour déployer les services a base de Python
  (ou autre) sur Kubernetes ou Docker.

  Nous regarderons comment exposer et scaler le service, puis le faire évoluer
  en nouvelle version via les "rolling upgrades" prenant en compte des détails
  pratiques tel que le besoin d'haute disponibilite, capacity, ingress
  controllers, monitoring et load balancing.

  Nous verrons comment les "health checks" permettent de valider l'état de santé
  d'une nouvelle version d'un service pour pouvoir faire un "rollback" en cas
  de besoin.

  Tous ces concepts seront démontrés visuellement avec un deploiement de bout en
  bout sur un cluster Kubernetes.

.. raw:: html

  <hr/>

Développement d'applications avec le framework Anyblok et son écosystème d'outils et modules métier
---------------------------------------------------------------------------------------------------

.. raw:: html

  <i>Franck Bret - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Présentation de l'écosystème d'outils et modules métier pour le framework Anyblok.
  
  Principes généraux : modularité, découplage, qualité
  Ecosystème : Présentation rapide des outils et modules métiers existants
  Exemple : Exemple d'implémentation
  
  https://pypi.org/project/AnyBlok/
  https://github.com/AnyBlok

.. raw:: html

  <hr/>

Dites au revoir au "quick and dirty"
------------------------------------

.. raw:: html

  <i>Antonin Morel - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Quel développeur n'a jamais été tenté d'écrire une solution quick and dirty
  afin de gagner un peu temps ? La réalité du marché faisant la dette technique
  s'accumule et il arrive un moment où il devient critique de la traiter.
  
  Nous verrons ensemble comment quitter le mode "quick and dirty" pour amener un
  projet et une équipe vers l'excellence technique. Adapté à tous les niveaux.

.. raw:: html

  <hr/>

DIY guide to convert Speech-to-text with DeepSpeech AND Text-to-speech with WaveNet
-----------------------------------------------------------------------------------

.. raw:: html

  <i>Kajal Puri - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  After watching Google I/O 2018, one thing we've realized is that the voice of
  the artificially intelligent system is going to be a significant interface to
  interact with a human, apart from the text. The research on speech-to-text has
  been going on since quite a few years after we've taken a big leap on the Deep
  Learning approach. In this talk, I'm going to talk mainly about the Mozilla's
  DeepSpeech open source project to convert speech-to-text in Python.

  Now, the new problem at hand is how an artificially intelligent system can
  give a human-like voice to the written text because when a human speaks, there
  are a lot of intricacies in our speech that is so obvious for the human brain.
  Expressions in our voice, where to give a pause, and accent etc are few
  important factors that play a big role in how humans talk to each other. So,
  here I'm going to introduce WaveNet.

  The talk will be divided in following four segments :

  - 0-5 minutes: The talk will begin with explaining the Speech-to-text earlier
    existing libraries and which machine learning models they used. Comparison
    of various libraries like Cloud speech-to-text by Google, IBM Watson and
    DeepSpeech will be done
  - 5-25 minutes: DeepSpeech is based on Baidu's DeepSpeech research paper. This
    model directly translates raw audio data into text - without any domain
    specific code in between. I'll quickly brief about the underlying deep
    learning architecture used in DeepSpeech. A short live-demo will be given
    and the code, written in Python, will be explained with the tips on
    hyper-parametric tuning to get the best possible results.
  - 25-45 minutes: Now, the talk will switch to the latest research going on in
    the field of Text-to-speech and how products like Alexa, Siri, Google
    Assistant etc are leveraging this to behave like a human. The deep learning
    architecture of WaveNet, open sourced by Google's DeepMind, will be
    discussed followed by the live-demo and explaining the code written in
    Python.
  - 45-50 minutes: For QA session.

.. raw:: html

  <hr/>

Django & GraphQL
----------------

.. raw:: html

  <i>Mehdi Raddadi - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  La présentation s'adresse à des personnes débutantes ou confirmées. Elle a
  pour but de présenter la RFC GraphQL et son rapport avec Django.

  Une première partie introductive permettra aux participants de comprendre ce
  qu'apporte l'utilisation de cette RFC, ses avantages et ses inconvénients.
  Cela s'articulera autour du concept de cette technologie sans parler
  d'implémentation.

  Dans une seconde partie, on s'intéressera à une implémentation en python avec
  Graphene, blibliothèque python qui s'interface avec Django. Cette
  implémentation sera illustrée avec un exemple de mise en place d'une API
  GraphQL sur un projet simple pour présenter cette implémentation avant de
  discuter de l'état actuel de Graphene et de ses limitations.

.. raw:: html

  <hr/>

Empaquetez facilement vos projets pour GNU/Linux et \*BSD !
-----------------------------------------------------------

.. raw:: html

  <i>Cyril Roelandt - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  De nos jours, la plupart des langages fournissent leur propre gestionnaire de
  paquets (pip, gem, etc.) ainsi que leur propre archive de paquets (PyPI,
  RubyGems, etc.). Il existe également de nombreuses distributions GNU/Linux
  (Debian, Fedora, etc.) et \*BSD (FreeBSD, OpenBSD, etc.).

  Les empaqueteurs doivent convertir les paquets "upstream" (disponibles dans
  les archives de paquets des langages) en paquets "downstream" (les paquets de
  nos distributions). Divers outils ont été écrits pour les aider dans ce
  travail quelque peu fastidieux : on trouve ainsi pypi2rpm, gem2rpm, pypi2deb,
  url2pkg, portgen, pytoport et bien d'autres. Tous ces outils ont une interface
  et un comportement différents. Ils réimplémentent tous du code similaire :
  lire des métadonnées depuis les archives de paquets, et écrire des paquets
  Debian/RPM/etc.

  Durant cette présentation, je présenterai upt (Universal Packaging Tool,
  disponible à https://framagit.org/upt/upt), un outil modulaire combinant des
  "lecteurs" (qui lisent les métadonnées) et des "écrivains" (qui écrivent les
  paquets Debian/RPM/etc.) grâce à une représentation intermédiaire unifiée des
  paquets. Je le comparerai à des projets similaires et montrerai comment
  ajouter facilement le support pour votre langage ou votre distribution
  préféré.

.. raw:: html

  <hr/>

En pratique, qu'est-ce que ReST ?
---------------------------------

.. raw:: html

  <i>Xavier Ordoquy - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Les APIs occupent de plus en plus de place au sein de notre activité
  informatique et dans les entreprises.

  Sans nous en rendre compte, nous introduisons énormément de connaissances dans
  nos APIs, que ce soit coté serveur ou coté client. Cette somme de connaissance
  créé un couplage implicite entre le serveur et le client ce qui complique les
  évolutions.

  Partant d'un example d'API ReST nous verrons comment elle permet de diminuer
  le couplage client/serveur et facilite les évolutions, en montrant comment
  elles peuvent être prise en charge par des clients qui n'étaient pas prévus
  pour. Un autre aspect est la limitation des règles metier du coté client et
  comment rester DRY pour la partie fonctionnelle.

  Pour conclure, nous aborderons ce qui les limites de cette architecture et
  pourquoi il est si compliqué de créer de telles APIs.

.. raw:: html

  <hr/>

Faire de la domotique libriste avec Python
------------------------------------------

.. raw:: html

  <i>Arthur Lutz - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Comment faire de la domotique avec des outils libres auto-hébergés et en
  partie avec du python.
  
  Avec un retour d'experience sur les outils suivants :
  
    - home-assistant.io
    - graphite-api
    - micropython
    - wipy
    - et d'autres trucs pas python

.. raw:: html

  <hr/>

Forecasting and observing Airfare trends using Python and Neural Networks
-------------------------------------------------------------------------

.. raw:: html

  <i>Anuj Menta - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  We have always been taught that the earlier you book a flight, the cheaper it
  is. What if I said it isn't? You see it's not a straight line and it has a
  minimum at some point (someday before the flight). We are going to see how
  historical Airfare data can help us derive the best day to book a flight so
  that you 'actually' get the cheapest fares.

  The talk would talk about the entire process, from getting the data, to
  training a basic Neural network on the data. With advancements in deep
  learning in these few years, it is very easy to train a simple statistical
  model to predict the prices.

.. raw:: html

  <hr/>

Full-remote : guide de survie en environnement distant
------------------------------------------------------

.. raw:: html

  <i>Matthias Dugué - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Travailler en équipe n'est jamais un défi simple. Travailler à distance est un
  enjeu encore plus complexe. Collaborer avec une équipe entièrement distribuée
  relève de l'exploit. Pourtant de plus de plus de projets (collaboratifs,
  associatifs, ou startups) choisissent ce mode de fonctionnement, qui offre
  aussi de nombreux avantages.

  Avant même que les concepts de full-remote, de co-working, et de BYOD ne
  deviennent populaires, les mouvements Open Source se sont attelés à la tâche
  difficile de faire travailler ensemble des gens en les reliant uniquement par
  le réseau.

  Après plusieurs années passées à collaborer avec des gens sur de nombreux
  projets, Open Source ou non, petit retour d'expérience du full-remote, ce
  qu'il engage, ce qu'il faut savoir, et les outils indispensables à un travail
  asynchrone efficace, ensemble.

.. raw:: html

  <hr/>

Generative Adversarial Networks - Application to Image Deblurring
-----------------------------------------------------------------

.. raw:: html

  <i>Raphaël Meudec - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Les réseaux de neurones ont révolutionné ces dernières années de nombreuses
  tâches comme la Vision par ordinateur ou le traitement du langague. L'objet de
  ce talk est d'introduire les Generative Adversarial Networks (GANs), une
  approche orienté deep learning pour la génération de données artificielles.
  Nous commencerons par introduire leur fonctionnement, avant de s'attarder sur
  les différences de la phase d'entrainement et les applications.

  Les GANs ont été utilisés récemment pour la super-résolution (amélioration de
  la qualité d'une image), pour générer des titres correspondant à une image ou
  pour faire apparaitre Nicolas Cage dans tous les films. Ils s'organisent en
  deux réseaux de neurones, s'affrontant dans un jeu à somme nulle.

  Avec la librairie Keras, nous construirons un modèle pour déflouter des
  images.

  Roadmap du talk:

  1. Qu'est ce que sont les Generative Adversarial Networks ?
  2. Entrainer un GAN
  3. Architecture pour notre tâche de défloutage
  4. Autres applications des GANs

  Une partie de ce talk sera basé sur cet article : http://bit.ly/deblurgan

.. raw:: html

  <hr/>

Gestion de stocks en Python avec Anyblok / WMS
----------------------------------------------

.. raw:: html

  <i>Georges Racinet - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Anyblok / WMS est un tout nouvel ensemble de bibliothèques pour écrire des
  applications de gestion de stocks et de logistique en Python3, avec
  PostgreSQL, AnyBlok et SQLAlchemy.

  - https://pypi.org/project/anyblok-wms-base/
  - https://blog.racinet.fr/tag/logistique.html
  - https://anyblok-wms-base.readthedocs.io/
  - https://github.com/AnyBlok/anyblok_wms_base

  L'objectif est de fournir une fondation solide et agréable aux développeurs
  d'applications concrètes et à leurs mainteneurs.

  Les cas d'utilisation potentiels concernent tout ce qui touche au suivi
  d'objets physiques, donc la partie logistique de l'e-commerce, bien sûr, mais
  aussi les petits magasins, les parcs de matériel technique, la gestion de
  production (GPAO) et pourquoi pas l'humanitaire.

  Quelques mots d'ordre du développement en "té" : flexibilité, généricité,
  traçabilité, adaptabilité (à la réalité), euh… qualité et bien sûr liberté !

  Le développement de la couche de base a commencé cette année ; on espère être
  en voie de sortir la version 1.0 au moment de la PyConFR, d'avoir une première
  application finale en production, de lancer des développements publics de plus
  haut niveau, d'accueillir des contributions…

.. raw:: html

  <hr/>

La cartographie c'est simple et "complexe"
------------------------------------------

.. raw:: html

  <i>Julien Tayon - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Contexte : J'ai commencé à faire des cartes avec les données INSEE disponibles
  sur opendata il y a 2 semaines.

  J'ai trouvé quelques outils comme qGIS, mais ayant une machine asthmatique,
  j'ai fini par construire les cartes depuis rien, juste en regardant les
  fichiers sources, et les cartes SVG et c'est facile : tout le monde peut y
  arriver.

  C'est si simple avec les bons outils (python + SVG + HTML + matplotlib et une
  connaissance minimale en math), que ce serait bien de rendre ce savoir
  disponible pour tous.

  La plupart des difficultés techniques comme : un point est il dans un polygone
  ?

  Quel sont les points minimum et le maximum dans une carte ?

  Sont résolues simplement sans classe avec un outil mal aimé de python : les
  nombres complexes.

  (Ceci au passage est un "rant" contre la classe point 2D qui est donnée en
  exemple comme la classe pour apprendre, et une réaffirmation que les maths
  sont une abstraction plus importante que l'objet.)

  Dans un premier temps on va prendre un fichier source, le regarder, et tenter
  naïvement de construire une carte.

  On va rappeler *très* rapidement ce qu'est un nombre complexe.

  On va prendre un fichier de destination et le regarder, et sans connaissance
  du SVG tenter de le construire.

  Ensuite on va utiliser matplotlib pour automatiser la coloration par gradient.

  On va y arriver.

  On va aussi découvrir une méthode de résolution des problèmes de contraste par
  "non linéarisation" des niveaux de couleurs (tri ordonné) qui marche à
  quasiment tous les coups (merci les OrderedDict et les sets).

  On va utiliser un algo simple pour trouver le polygone qui contient un point
  et le mettre en œuvre. Parler de distance et éviter en beauté le problème des
  projections en cartographie car j'y connais rien.

  On va peut être comparer avec qgis en terme de vitesse pour la génération de
  carte SVG, et aux tutos disponibles sur internet, et se dire que ça vaut le
  coup de partager ce savoir.

  Enfin on va montrer que la complexité afférente à écrire un cadricel étant
  supérieure à la 100 aine de ligne de codes pour faire le travail sans se
  fatiguer, c'est peut être pas nécessaire de faire un cadriciel.

  Et évidemment, je vais conclure sur les quaternions, et leur utilisation par
  les riggers dans l'industrie du jeu plutôt que les matrices pour la 3D et
  souligner qu'on a des modules pour les quaternions en python, parce qu'on a
  une communauté de qualité avec des scientifiques qui contribuent et que sans
  eux, ce serait bien plus dur de faire le kakou en 100 lignes de codes.
  Remercions aussi les initiatives d'opendata sans lesquelles on pourrait rien
  faire et rendons hommage à la qualité de données si simple que leur mise en
  œuvre est aisée.

  Et voilà comment on construit une carte de représentation de données sans rien
  y connaître en cartographie. Parce qu'il y a des gars biens qui partagent les
  données sans les "obscurcir" et d'autres leur code et qu'il y a une communauté
  au milieu pour mettre les savoirs en relation.

.. raw:: html

  <hr/>

La Crypto pour les devs
-----------------------

.. raw:: html

  <i>Matthias Dugué - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Plus que jamais, nous avons besoin de sécuriser nos échanges et de renforcer
  notre confiance dans nos outils pour garder nos données à l'abri des yeux
  indiscrets. Peut-être que franchir le pas vous semble insurmontable. Peut-être
  que vous vous dites que tout ça reste une affaire de groupes d'hackitivistes
  éclairés. Plus probablement, il vous manque sans doute juste une connaissance
  simple de l'univers du chiffrement, et de la fantastique boîte à outils qui
  l'accompagne.

  Alors profitons-en, on embarque pour un tour d'horizon de la crypto :
  chiffrement, techniques, outils… Nous regarderons quels outils existent,
  pourquoi et comment les utiliser. Et parce que le web ne serait pas parfait
  s'il n'était pas ouvert, nous nous intéresserons aussi bien aux clients
  "lourds" qu'aux alternatives web (et il en y en a plein).

  Mieux : puisque nous ferons le tour des techniques, observons les outils que
  met à notre portée de dev le W3C avec l'API WebCrypto : ajouter du chiffrement
  et une gestion fine de la sécurisation se révèle désormais beaucoup plus
  pratique.

  Ceinture et bretelles : attachez-vous bien, on chiffre !

.. raw:: html

  <hr/>

La dynamique des attributs
--------------------------

.. raw:: html

  <i>Antoine Rozo - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  L'accès aux attributs d'un objet en Python est plus complexe qu'il n'en a
  l'air.

  Derrière une interface très simple, divers mécanismes interviennent pour
  récupérer la valeur de l'attribut demandé et nous permettent la mise en place
  de techniques avancées pour leur traitement.

  À travers cette présentation, nous explorerons ces mécanismes et verrons
  comment rendre nos attributs plus dynamiques.

  Niveau intermédiaire : Connaissances de base sur les classes et les objets en
  Python.

.. raw:: html

  <hr/>

La gestion de version en 2018: présent et future
------------------------------------------------

.. raw:: html

  <i>Pierre-Yves David, Boris Feld - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  La gestion de version a profondément changé ces 10 dernières années, avec
  l’arrivée des gestionnaires de versions décentralisés et des plateformes comme
  Github. Pourtant, malgré son succès retentissant, git n’est pas non plus la
  solution ultime couvrant tous les besoins. De nombreuses personnes et
  entreprises font le choix de solutions plus anciennes (comme SVN),
  propriétaires (comme Perforce™) ou de la même génération (comme Mercurial).

  Dans cette présentation, nous étudierons les besoins classiques qui ont
  façonnés et préservés les solutions actuelles, puis nous explorerons les
  nouvelles habitudes de développement auquelles les gestionnaires de versions
  doivent s’adapter. Cette présentation sera jalonnée d’exemples concrets qui
  vous permettront entre autre de comprendre en quoi les alternatives à Git sont
  utiles pour l’innovation et pourquoi, chez Octobus, nous avons choisi de
  travailler sur Mercurial plutôt que Git.

.. raw:: html

  <hr/>

La réalité virtuelle en Python pour des clients institutionnels, post mortem autour de 3 projets
------------------------------------------------------------------------------------------------

.. raw:: html

  <i>François Gutherz - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Dans la continuité d'une présentation faite lors de la PyconFR 2016 à Rennes,
  qui était axée sur notre premier projet VR réalisé en Python, nous proposons
  une rétrospective autour de 3 projets principaux réalisés pour des clients
  institutionnels :

  - La VR comme outil de communication pour des industriels
  - Quelles méthodes de production pour une équipe très resserrée (3 personnes
    max)
  - Bilan sur l'apport de Python après 3 années de développement sur une dizaine
    de projets 3D/VR
  - Ce qui a fonctionné, ce qui s'est moins bien passé...

.. raw:: html

  <hr/>

La révolution dans le monde des tests
-------------------------------------

.. raw:: html

  <i>Boris Feld - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Depuis plusieurs années, les outils de qualité ont évolués, les outils de CI
  sont de plus en plus scalables, les librairies d'écriture de tests sont plus
  nombreuses et ont bien mûries et de nouveaux outils sont apparus pour
  améliorer encore plus la qualité du code que l'on produit.

  Néanmoins, la plupart des outils de CI se contentent de lancer un script et de
  vérifier le code de retour, la plupart des librairies de tests nous imposent
  de choisir entre lancer l'ensemble de nos suites de tests ou s'arrêter pour
  voir le détail du test en échec et enfin la plupart des innovations des outils
  de CI, l'exécution en parallèle et l'exécution à distance, n'ont pas encore
  trouvé le chemin jusqu'au développeurs.

  Comment améliorer la situation ? Je vous présenterai l'un de mes projets, LITF
  (https://github.com/Lothiraldan/litf) un nouveau format d'entrée et de sortie
  pour les librairies de test et BALTO (https://github.com/lothiraldan/balto),
  un orchestrateur de tests utilisant ce nouveau format. BALTO est écrit en
  Python 3.6 / Asyncio et supporte bien entendu Pytest comme première librairie
  compatible.

  Grâce à ce nouveau format, BALTO peut exécuter plusieurs suites de tests dans
  des langages différents, à distance sur un clusteur Kubernetes et le tout en
  parallèle. En tout cas, c'est le but pour la version stable.

.. raw:: html

  <hr/>

Le code ne suffit pas
---------------------

.. raw:: html

  <i>Stéphane Angel, Joachim Jablon - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Entre un bout de code dans un coin qu'on décide de mettre en open-source, et
  un projet github, prêt à accueillir des contributions, il peut y avoir du
  travail.

  Standardisation et formatage du code, écriture de tests unitaires et
  fonctionnels, documentation, et automatisation...

  Un tas de sujets, et d'outils associés, qui permettent de rendre le code et le
  projet plus fiables, plus accessibles, plus "propre".

  Continuant sur la lancée des "Aventuriers du Packaging Perdu" l'an dernier,
  nous vous embarquons dans un tour d'horizon de nos pratiques et logiciels
  préférés autour de la gestion d'un projet open source.

  Venez découvrir les bienfaits de black, du test de mutations, des hooks de
  pre-commit et de l'intégration continue, et bien d'autres sujets.

  Nous espérons faire découvrir au moins un petit quelque chose à chacun·e
  d'entre vous !

.. raw:: html

  <hr/>

L'écosystème Nix pour développer en Python, et au delà
------------------------------------------------------

.. raw:: html

  <i>Julien Dehos - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Un programme en Python est rarement script isolé effectuant quelques
  interactions basiques avec le système exploitation. Il est fréquent d'utiliser
  également des bibliothèques, des modules écrits dans d'autres langages, des
  systèmes de base de données... Il en résulte de nombreuses dépendances qui
  peuvent rendre un projet difficile à construire et à déployer.

  L'écosystème Nix permet de gérer ce genre de dépendances efficacement. Il
  complète ou remplace certains outils classiques de Python mais également
  d'autres langages, fournissant ainsi un système commun pour construire et
  déployer des packages et des services.

  Dans cette présentation, accessible à tous les niveaux, je rappellerai
  quelques outils de packaging classiques en Python, puis je présenterai
  l'écosystème Nix et montrerai comment l'utiliser pour développer, packager et
  déployer une application web Python comportant un module C++ et une base de
  données.

.. raw:: html

  <hr/>

Le monde python peut-il apprendre du monde “front” pour la génération de pages web ?
------------------------------------------------------------------------------------

.. raw:: html

  <i>Stéphane Angel - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  En général les développeurs web backend utilisent des templates pour générer
  le HTML.

  Mais de nos jours, il semble plus évident de laisser Javascript générer le
  HTML en récupérant les données depuis une API.

  Nous verrons qu’aujourd'hui, comme hier, Python a largement sa place dans le
  domaine, et que demain nous réserve quelques surprises.

  Si vous croyez tout savoir sur les templates, vous pourriez être étonnés par
  ce qu'on peut faire de nos jours.

  Et si vous pensez que le futur du HTML est aux composants, vous ne serez pas
  déçu par ce que Python peut apporter.

.. raw:: html

  <hr/>

Les nouveautés dans Python 3.7
------------------------------

.. raw:: html

  <i>Vincent Maillol, Stéphane Wirtel - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Python3.7 a apporté sa dizaine de changements, mais on verra en détails les
  changements apportés à asyncio par les Context Variables.

.. raw:: html

  <hr/>

Leveraging consistent hashing in your python applications
---------------------------------------------------------

.. raw:: html

  <i>Alexys Jacob - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  While consistent hashing is largely known and adopted in the NoSQL database
  clusters to solve data distribution and data access reliability, it is less
  known and used by the typical developers.

  This talk will introduce you to consistent hashing and the problems it solves
  while going through a practical use case in a python application.

  We will start from its standalone design and scale it out to an optimized
  clustered version thanks to consistent hashing.

.. raw:: html

  <hr/>

Machine Learning pour le BioMédical: 100% Python
------------------------------------------------

.. raw:: html

  <i>Jeremy Laforet - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  La présentation reviendra sur des éléments de réflexion obtenus sur le
  démarrage du projet de recherche européen CHRONOS. Particulièrement sur les
  contraintes liées à l'application biomédicale du machine learning pour étudier
  le vieillissement musculaire. L’emphase sera mise sur notre approche globale
  via Python.

.. raw:: html

  <hr/>

Maintenir un code lisible
-------------------------

.. raw:: html

  <i>Sébastien Corbin - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Isort, flake8, pylint et consorts nous permettent de rendre notre code plus
  lisible, mais pas que. Nous passerons en revue leurs options principales et
  leur bienfaits.

  Nous verrons comment les mettre en place dans un projet, qu'il soit personnel
  ou en équipe.

  Nous aborderons aussi le petit dernier : Black, qui fait une entrée
  fracassante dans la communauté.

.. raw:: html

  <hr/>

Manager un parc avec SaltStack
------------------------------

.. raw:: html

  <i>Anthony Martinet - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Nous sommes une entreprise de maintenance Informatique.

  Nous sommes également fainéants et enfin nous adorons l'automatisation.

  Découvrez nos outils de prédilections pour automatiser :

  - La configuration de nos serveurs
  - La configuration des clients Windows / Mac / Linux

  Nous aborderons le design de SaltStack et en quoi cette solution se différencie
  de Ansible / Puppet et les autres gestionnaires de configuration.

  Des concepts seront abordés sur la puissance offerte par le bazard.

.. raw:: html

  <hr/>

Mask R-CNN in Lane Detection
----------------------------

.. raw:: html

  <i>Facundo Calcagno - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  The aim of this paper is to introduce to the newcomers the ideas of Deep Neural
  Networks started by Yan LeCun and continued by Alex A., NYU, Google and Facebook
  teams, make a small panorama of the more common types of Neural Networks
  available and explain in detail a new and very successful architecture called
  Mask R-CNN that has won recognition all around the world.
  
  After this big introduction, we will dive into the resolution of the problem of
  Lane Recognition with images taken from inside cars using CuLanes dataset and
  its implementation in TensorFlow.
  We will see how difficult and problematic this type of images can be due to
  the different and possible geometric issues that diverse landscapes have.
  Nevertheless, we will show that the technique is applicable to this specific
  problem and could be improved to be automatized and implemented in a
  self-driving car.
  
  https://github.com/fmcalcagno/MASK_Lane_Detection
  @fmcalcagno

.. raw:: html

  <hr/>

Metric-learn: a scikit-learn compatible package for metric learning
-------------------------------------------------------------------

.. raw:: html

  <i>William de Vazelhes - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Intermediary level

  Metric learning is an area of machine learning which aims to learn a distance
  (or similarity) measure between samples for a given task. In this
  presentation, I will start by briefly introducing the main ideas of metric
  learning and some of its applications, and show a concrete example of using
  metric-learn, the metric learning library in Python. I will then highlight the
  importance of making a machine learning package compatible with scikit-learn
  and discuss the challenges in the specific case of metric-learn, in particular
  regarding API constraints. Finally, we will dig into metric-learn's code to
  illustrate the main design choices, and emphasize some general issues (such as
  test design) that require special care when developing a machine learning
  toolbox.

  https://github.com/metric-learn/metric-learn

.. raw:: html

  <hr/>

Moviepy: l'édition ou le montage de vidéo par du code python
------------------------------------------------------------

.. raw:: html

  <i>Renaud Guezennec - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Pour promouvoir Rolisteam, nous enregistrons trois parties de jeu de rôle
  virtuel par semaine.

  Chaque vidéo dure plus de 2h30. Très peu d'outils de montage apprécient de
  travailler sur des données aussi conséquentes.

  Nous allons voir comment Moviepy a facilité l'édition de nos vidéos et nous
  permet de mettre en ligne plus de 3 vidéos par semaine.

  À travers cette histoire, nous ferons un tour des fonctionnalités de ce
  module.

  La présentatino sera pour «tous les niveaux».

.. raw:: html

  <hr/>

My journey into joining billions of rows in seconds with ScyllaDB
-----------------------------------------------------------------

.. raw:: html

  <i>Alexys Jacob - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  A talk on a technological iteration journey: replacing MongoDB + Hive by
  ScyllaDB in production to meet the requirements of business critical work
  loads.

  I will share my recent experience in migrating our most intensive and JOIN
  hungry production work load from MongoDB + Hive to ScyllaDB.

  This work and iteration allowed us to JOIN billions of rows in seconds while
  drastically reducing operation and development complexity by using one
  database (ScyllaDB) instead of two (MongoDB + Hive).

  ScyllaDB is a C++ drop-in replacement of Cassandra that proved that its design
  was up to the challenge by squeezing every bit of performance from hardware.
  We will cover the approach and key aspects of this NoSQL database.

  I will finally present the results of the benchmarks between Dask and Spark
  and highlight their differences and what we learned along the way.

  Draft of the agenda

  - Business context and work load details
  - Problems and limitations in handling this work load using MongoDB + Hive
  - How we conducted a thorough evaluation of ScyllaDB to replace MongoDB + Hive
  - How we ended up challenging Spark with Dask
  - Lessons learned and production feedback

.. raw:: html

  <hr/>

OpenSVC: Orchestration de stacks applicatives, avec ou sans containers
----------------------------------------------------------------------

.. raw:: html

  <i>Christophe Varoqui, Arnaud Veron - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  OpenSVC est une solution mature, 100% python, open source, française et
  bénéficiant d'une forte adoption dans le secteur bancaire. Elle permet de
  provisionner et d'orchestrer très simplement des stacks applicatives avec ou
  sans docker. Elle propose de remplacer de façon homogène une large gamme de
  produits, de systemd à kubernetes en passant par Veritas cluster.

  Cette présentation introduit aux concepts et fonctionnalités d'OpenSVC et
  démontre par l'exemple sa simplicité d'utilisation.

  Niveau: Tout public

.. raw:: html

  <hr/>

Optimiser une application principalement transactionnelle (retour d'expérience avec Tryton)
-------------------------------------------------------------------------------------------

.. raw:: html

  <i>Cédric Krier - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Tryton est une plateforme pour logiciels métiers écrit en Python. Elle est
  amenée à traiter de grosse quantité de données dans des délais court mais
  aussi à traiter rapidement des ordres volumineux.

  Nous verrons dans cette présentation les différentes techniques mise en place
  afin d'optimiser au mieux les performances: traitement groupé, parallélisation
  des processus, gestion de différents niveaux de caches et techniques de
  contournements des goulots d'étranglement des performances.

  En bref, nous ferons le tour des techniques déployées dans Tryton qui ont
  permis la facturation d'un million de contrats d'assurance en moins d'une
  heure.

.. raw:: html

  <hr/>

PEP 557 versus the world
------------------------

.. raw:: html

  <i>Guillaume Gelin - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Python 3.7 will ship with a new module called "dataclasses", which has been
  defined in PEP 557.

  - What is this module?
  - What are the problems that PEP 557 authors try to solve?
  - What was the chosen design, and why?
  - How does it compare against the tools that already exist?

  This talk will deeply cover "dataclasses", but also "attrs", "box", "thingy",
  and others.

.. raw:: html

  <hr/>

Posture au travail et prévention des troubles musculo-squelettiques chez le développeur
---------------------------------------------------------------------------------------

.. raw:: html

  <i>Gabrielle Vassard-Yu - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Le travail c'est la santé, mais des conseils kiné permettent de la préserver !
  Il s'agit ici de présenter les risques d'une mauvaise posture au travail,
  quelques solutions possibles en matière d'ergonomie, le tout accompagné de
  conseils kiné. C'est une des rares conférences où avoir un ordinateur n'est
  pas nécessaire.

.. raw:: html

  <hr/>

Présentation, l’approche itérative
----------------------------------

.. raw:: html

  <i>Pierre-Yves David - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Tous les ans le monde Python se pose les même questions: “Est-ce que je
  propose une présentation à Pyconfr ?”, “De quoi je vais parler ?”, “Est-ce que
  j’aurais le temps de la préparer?”. Tous ses questionnements nous privent
  chaque année de présentations qui auraient été passionnantes. Pourtant, sans
  forcément s’en rendre compte, chacun de nous a déjà les réponses à toutes ces
  questions clefs.  En suivant une suite de principes simples, il est possible
  de produire une présentation sur un sujet pertinent et d’une qualité
  correspondante au temps qu’on a trouvé à y consacrer.

.. raw:: html

  <hr/>

Progressive Web Apps : où en sommes-nous aujourd'hui ?
------------------------------------------------------

.. raw:: html

  <i>Alexandra Janin - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Présentation générale sur ce que sont les PWA :

  - À quels critères doit répondre une application pour être qualifiée de
    "progressive web app" ?
  - Rapide présentation des services workers, de la cache API et du manifest.
  - Les outils pour mettre en place une PWA (lighthouse, workbox,...)
  - Fonctionnement des push notifications

  Niveau : Tous les niveaux

.. raw:: html

  <hr/>

Pyref : Python et référentiel dans une université
-------------------------------------------------

.. raw:: html

  <i>Nicolas Berne - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Au sein d'une université, la gestion des identités et la qualité des données
  sont deux domaines de l'ombre. Avec environ 50 000 comptes informatiques
  actifs et des utilisateurs variés : étudiants, enseignants-chercheurs,
  administratifs, ces sujets ont des impacts au quotidien au sein d'un DSI.

  Lors des journées inscriptions les plus chargées, les défis sont nombreux avec
  plusieurs milliers de créations de comptes.

  Après avoir présenté succinctement l'architecture de la solution et les
  raisons de nos choix techniques, du langage Python et de la base de données
  PostgreSQL avec PL/Python, nous nous intéresserons plus spécialement à la
  bibliothèque ldap3.

  Nous expliquerons alors notre utilisation et nous afficherons les performances
  obtenues. Les résultats seront décrits sur les environnement LDAP (relatifs à
  la normal SupAnn) et Active Directory.

.. raw:: html

  <hr/>

Python 2 to Python 3
--------------------

.. raw:: html

  <i>Mathilde Ziboura, Philippe Boulanger - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  We are living the last months of Python 2... Lots of companies are always
  using the version 2 of Python and have to migrate to Python 3 in the next
  months. A migration is a long journey, most of the time it's boring with lots
  of production risks/issues. Purpose of my conference is to give the keys to
  reach the objective in avoiding traps.

.. raw:: html

  <hr/>

Python and PostgreSQL: let's work together!
-------------------------------------------

.. raw:: html

  <i>Dimitri Fontaine - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Python is often used to maintain application backends. When the backend should
  implement user oriented workflows, it may rely on a RDBMS component to take
  care of the system's integrity.

  PostgreSQL is the world's most advanced open source relational database, and
  is very good at taking care of your system's integrity. PostgreSQL also comes
  with a ton of data processing power, and in many cases a simple enough SQL
  statement may replace hundreds of lines of code written in Python.

  In this talk, we learn advanced SQL techniques and how to reason about which
  part of the backend code should be done in the database, and which parf of the
  backend code is so easier to write as a SQL query.

  All levels.

.. raw:: html

  <hr/>

Pythonic monads in real life
----------------------------

.. raw:: html

  <i>Vincent Perez - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  The goal of this talk is to demonstrate how monads can be useful in Python.
  After having explained what is a monad, I'll show some use cases and do a
  benchmark against traditional Python solutions. I'll also talk about existing
  implementations of monads in Python.

  Intermediary level.

.. raw:: html

  <hr/>

Python, je t'aime!
------------------

.. raw:: html

  <i>Stéphane Wirtel - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Depuis 20 ans, j'utilise Python au quotidien en tant qu'amateur et depuis 2008
  en tant que pro. Cependant, depuis quelques années je suis devenu un membre
  "actif" de la communauté Python et j'aimerais vous montrer pourquoi j'aime
  Python. Comme Brett Cannon l'a déjà dit, nous venons pour le language mais
  nous restons pour la communauté. Alors cette talk est fait pour vous, je veux
  partager mon enthousiasme concernant Python et si vous me connaissez, vous
  aimerez être présent à ma talk, car certains se reconnaîtront comme mes amis
  ;-)

  Talk complètement improvisé, mais certainement fun comme à mon habitude.

.. raw:: html

  <hr/>

Python-powered Data Science in E-commerce
-----------------------------------------

.. raw:: html

  <i>Pietro Fodra - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Cdiscount is the French leader on e-commerce, with millions of visitors and
  millions of products sold. But that is not all: Cdiscount is also a company
  where dozens of Data Scientists are daily challenged with a massive amount of
  data coming from visitors, customers, its product catalogue and internal
  search engine. Their goal: deliver performing and innovating algorithms in a
  short delay. The Cdiscount’s Data Science teams use Python for both
  prototyping and production, trying to shorten the path between a research idea
  and its industrialization.

  In this talk, we are going to present some examples of Python applications in
  Cdiscount and we are going to focus on one in particular: the keyword
  clusterisation in Google Ads campaigns using the Word-2-Vec algorithm of the
  gensim package. The solution of this NLP problem allows to use the signal of
  high-traffic keywords to predict the performance of lower-traffic ones and
  improve the bidding.

.. raw:: html

  <hr/>

Recipes for Testing your Web Application
----------------------------------------

.. raw:: html

  <i>Alexandre Figura - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Writing tests is not that easy. People tend to overlook this task, often seen
  as less interesting than writing “real code”. Until they join a new company,
  where nobody told them they would have to maintain a legacy codebase, with
  temporary fixes everywhere and a test coverage of 30%, and that developers who
  wrote it already left several years ago…

  In this talk, we will see how to write tests with Pytest for your web
  applications: from acceptance tests, to unit tests, without forgetting
  integration tests of course! Applying best practices like Behavior-Driven
  Development, we will try to identify traps on our way and learn how to avoid
  them. And because we are living in the 21st century, we will also automate our
  development workflow with Docker Compose, to make our day-to-day work more
  enjoyable.

  Expected level of attendees: all levels.

.. raw:: html

  <hr/>

Releasing OpenStack: feedback from the field
--------------------------------------------

.. raw:: html

  <i>Haïkel Guémar - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  OpenStack is arguably the biggest Python project, it consist of a collection
  of libraries, clients, services that all interact with each others. In short,
  releasing such Behemoth ain't an easy task.

  During this talk, there'll be no magical powder, I have nothing to offer but
  blood, toil, tears and sweat.

  You'll discover how RDO the most popular community distro of OpenStack
  integrates with upstream OpenStack production chain to release a rock solid
  OpenStack distro with cross-CI, innovative distro making approach. We'll also
  present the challenges we have faced and we're currently facing (Python 3
  we're coming!).

.. raw:: html

  <hr/>

Retour d'expérience sur le déploiement de ReadTheDocs en interne
----------------------------------------------------------------

.. raw:: html

  <i>Benjamin Divet, Olivier Munier - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Depuis quelques années maintenant, ReadTheDocs est devenu incontournable dans
  l'univers Python. La plupart des projets disponibles en ligne passent par ce
  service afin de mettre à disposition une version toujours à jour de la
  documentation Sphinx, associée à leur projet.

  Le projet ReadTheDocs est un projet Open Source, et à ce titre, leur code est
  entièrement ouvert. De fait, nombre d'entreprises peuvent être intéressées par
  le déploiement de ce service, en interne. Et c'est à ce moment précis que
  commencent les ennuis. Le modèle économique de la société reposant sur la
  vente de services, aucune aide, ou presque, n'est apportée à la communauté
  pour le déploiement en interne.

  À travers cette conférence, nous vous proposons un retour d'expérience sur le
  déploiement interne d'un serveur ReadTheDocs, et le paramétrage de certaines
  options.

.. raw:: html

  <hr/>

REx: Implémentation d'un DSL
----------------------------

.. raw:: html

  <i>Alexis Benoist - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Un DSL (Domain Specific Langage) est un langage spécialisé capable de décrire
  des problématiques business avec un langage commun à l'ensemble des
  intervenants et donner de l'autonomie au métier.

  Lors de ce retour d'expérience, nous discuterons de l'implémentation d'un DSL.
  Ce DSL a pour but de donner de l'autonomie aux experts métier pour énoncer
  leurs règles.

  Nous utiliserons ce cas d'étude pour discuter des DSLs, de leur base théorique
  à leur implémentation en python.

.. raw:: html

  <hr/>

Salut à Toi: un écosystème de communication libre, standard et décentralisé
---------------------------------------------------------------------------

.. raw:: html

  <i>Poisson Jérôme - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Messagerie instantanée, (micro)blogage, « réseau social », forums, partage de
  fichiers, albums photos, organisation d'événements, gestion de tickets,
  gestion de patchs (« merge requests »), chiffrement de bout en bout sont
  autant de choses qu'il est possible de faire avec Salut à Toi, un écosystème
  de communication libre et décentralisé qui s'appuie sur le protocole standard
  XMPP.

  Cet outil unique en son genre est développé en Python, et fonctionne à la fois
  sur bureau, appareils mobiles (Android), web, interface console (« TUI »), et
  ligne de commande (« CLI ») grâce notamment à une architecture démon/frontaux
  et à la popularité de ce langage de programmation qui le rend disponible là où
  on ne l'attend pas forcément (une des interfaces dynamiques web, dans le
  navigateur donc, est également développée en Python).

  La dernière version a vu l'apparition d'un cadriciel (« framework ») web
  orignal, qui permet de développer des sites web en utilisant XMPP en arrière
  plan, permettant de gérer facilement l'authentification et les permissions,
  les composants courants (comme les commentaires), et les rendant naturellement
  décentralisés.

  Cette conférence va présenter le projet, son architecture, et son utilisation
  de Python, avant de faire une démonstration de certaines de ses possibilités.

.. raw:: html

  <hr/>

Scaling Python to 1K QPS per server, not doing Hello Worlds
-----------------------------------------------------------

.. raw:: html

  <i>Guillaume Gelin - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  I will present a sample web application inspired from the real world (so not
  an application doing hello worlds) and showcase several ways of scaling it up,
  layer after layer, doing benchmarks at every step, up to 1000 queries per
  second — or 86.4 millions per day — on one Amazon server.

  We will talk about:

  - stateful vs stateless
  - web servers and process managers
  - WSGI, AWSGI
  - asynchronicity
  - different sort of caches for different sort of things
  - various system hacks on Linux
  - monitoring

.. raw:: html

  <hr/>

Scripts et Services web avec Asyncio et Python 3.6
--------------------------------------------------

.. raw:: html

  <i>Rémy Hubscher - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Le fait de pouvoir utiliser asyncio en python 3.6 est une révélation.

  Dans cette présentation je propose de revenir sur le concept de l'ioloop et
  les cas d'usages où j'ai eu à utiliser asyncio ces derniers temps. Que ce soit
  pour paralléliser des tâches IO-bound et CPU bound ou pour faire des services
  web.

.. raw:: html

  <hr/>

Sculptez une fonction
---------------------

.. raw:: html

  <i>Kevin Samuel - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  def afficher(liste):
    for texte in liste:
      print(texte)

  Une fonction simple.

  Mais dans cette présentation en live coding mélangeant bonnes pratiques et
  artisanat, elle va vite prendre du galon.

.. raw:: html

  <hr/>

Serverless Python dans le cloud ou on-premise
---------------------------------------------

.. raw:: html

  <i>Michael Bright - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Depuis 20 ans l'informatique a été revolutionnée par des nouvelles
  technologies de virtualisation, cloud, conteneurs et maintenant serverless.
  Ces technologies aident à optimiser l'utilisation des servers, de faciliter le
  déploiement, ainsi que d'augmenter l'agilité et de faciliter l’innovation.

  Serverless existe depuis une décennie mais a été propulsé sur le devant de la
  scène avec le lancement d’AWS Lambda en Nov 2014 - plutôt beta a l'époque.
  Aujourd'hui il existe un choix de plateformes et d'outils impressionants de
  services en ligne, d'outils Open Source pour faciliter leur usage et des
  plateformes entièrement Open Source.

  Nous allons commencer par regarder le déploiement d'un service Python sur AWS
  Lambda - car même si propriétaire il reste le leader aujourd'hui. Puis on
  regardera des outils open source tel que Chalice et Zappa spécifiquement pour
  déployer des fonctions Python sur Lambda et l'outil Serverless(.com) qui
  facilite le déploiement de différents langages vers differentes plateformes
  Serverless.

  Mais il existe aussi des plateformes entièrement Open Source telles que
  OpenFaaS, OpenWhisk, Nuclio, Kubeless, Fission, Fn… vous avez l'idée... il y a
  du choix !

  Nous regarderons comment déployer des fonctions Python sur OpenFaaS et
  OpenWhisk.

  Bien sûr avec plein de démos a l'appui !

.. raw:: html

  <hr/>

Software Heritage: The Great Library of (Python) Source Code
------------------------------------------------------------

.. raw:: html

  <i>Nicolas Dandrimont, Stefano Zacchiroli - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  `Software Heritage <https://www.softwareheritage.org>`_ is a non-profit
  initiative whose goal is to become the most comprehensive archive of publicly
  accessible source code in the world, together with its full development
  history. The project archive already contains more than 4.5 billion source
  code files, more than 1 billion commits, coming from almost a hundred million
  software projects. It is a modern time Great Library of Source Code, growing
  daily.

  The Software Heritage `stack <https://forge.softwareheritage.org/diffusion/>`_
  is entirely written in Python and supports archiving git repositories,
  subversion repositories, mercurial repositories, Debian source packages, as
  well as arbitrary archives (zip files, tarballs…) released by upstream
  authors. Everything gets stored in a common, fully deduplicated data model,
  allowing unified access to all archived content, regardless of the original
  means of distribution. `The archive front-end
  <https://archive.softwareheritage.org/>`_, built upon the Django framework,
  allows people to browse the contents of the archive and download snapshots of
  source code that may have disappeared upstream.

  While initially focused on archiving collaborative development forges such as
  GitHub, BitBucket, and GitLab, Software Heritage also supports archiving
  traditional software distributions, such as GNU/Linux distributions, and
  language-specific ecosystems. As an acknowledgement of the importance of the
  Python community for us, we are proud to announce the archival of PyPI into
  Software Heritage. This presentation will give a brief overview of the
  Software Heritage project and then drill down through the technical details of
  the integration with PyPI.

.. raw:: html

  <hr/>

Take the goRe out of a DjangoReact stack
----------------------------------------

.. raw:: html

  <i>Nathan Gaberel - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  As a Django dev you cannot ignore Javascript frameworks anymore. But
  integrating React (or any javascript framework) with Django is not seamless:
  there's no documented guide to setup a project, getting hot reloading to work
  is a painful must-have, and then how do you even leverage the power of both
  frameworks to code faster? Doing this without losing time and productivity is
  very hard.

  After 4 years of building a dozen django/react projects at Theodo, I want to
  share with you the very efficient setup we came up with, both for development
  and production use.

  In this session we'll see how to:

  - setup a JS frontend alongside Django for a smooth development experience
    (with hot reloading!)
  - package and deploy a JS app with a Django project
  - make frontend and backend work together: automatically harvest Django REST
    framework validation errors inside redux-form and get free validation in
    React

.. raw:: html

  <hr/>

Tester mieux, tester moins, avec Hypothesis
-------------------------------------------

.. raw:: html

  <i>Thierry Chappuis - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Pas assez de temps, pas assez de connaissances, pas assez d'argent, pas assez
  de... L'écriture des tests n'est souvent pas une tâche aisée. Le débutant ne
  sait pas quoi tester, le professionnel n'a pas le temps, le hobbyist n'a pas
  besoin. Les tests basés sur les propriétés ont pour objectif de proposer une
  solution à ces problèmes. Popularisé par la bibliothèque la Quickcheck
  (Haskell), ce concept est adapté en Python à l'aide de la bibliothèque
  Hypothesis.

  Avec Hypothesis, au lieu de vous concentrer sur l'écriture de tests
  individuels, vous décrivez des propriétés garanties par votre code et
  Hypothesis générera les tests correspondants à ces spécifications, à votre
  place. Par conséquent, l'utilisation de cette bibliothèque permet dans une
  certaine mesure d'automatiser l'écriture de tests répétitifs et élimine de
  nombreuses erreurs potentielles. Hypothesis génèrera plus de tests que ceux
  que vous auriez générés manuellement et permettra de démasquer plus d'erreurs.
  L'étudiant gagne ainsi en expérience, le professionnel gagne du temps et le
  hobbyist se dit pourquoi pas.

  Cette présentation a pour objectif d'introduire au concept des tests basés sur
  les propriétés ainsi qu'à l'utilisation de la bibliothèque Hypothesis: pour
  les étudiants, pour les professionnels et pour les hobbyists.

.. raw:: html

  <hr/>


The rise of Python in the data communities
------------------------------------------

.. raw:: html

  <i>Alexys Jacob - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  A retrospective and prospective of Python’s adoption in the data-driven
  industries and how it has and should influence its ecosystem and communities.

  Thanks to its versatility, Python’s usage and adoption has changed a lot over
  the last decade to go beyond the very act of software programming.

  From Developers to SysOps, closely followed by Scientists and Data analysts,
  Python has spread to become a common tongue for a wide range of people.

  We will start by looking at how this increased adoption impacted Python
  ecosystem and is still shaping it today. While this talk is not walk through
  all the Python technologies around data, some of them will be outlined so you
  will hear words like Numpy, Pandas or Jupyter.

  Then we will try to project ourselves in the future and by highlighting the
  pitfalls Python has to overcome to keep up with its pace and mature in its
  ability to scale!

.. raw:: html

  <hr/>

TkInter : toujours de la partie ?
---------------------------------

.. raw:: html

  <i>François Girault - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  TkInter est le toolkit graphique fourni en standard avec Python. Il traîne une
  réputation de rusticité, de pauvreté et d'obsolescence qui élude bien trop ses
  qualités et progrès. Après un état des lieux du design d'interfaces, du
  skeuomorphisme au "flat design", démystifions TkInter par l'exemple et
  construisons des interfaces graphiques utilisables et néanmoins modernes !

.. raw:: html

  <hr/>

Trio: rendre l'asynchrone Pythonique
------------------------------------

.. raw:: html

  <i>Emmanuel Leblond - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  La programmation concurrente est un paradigme très utiles: site web jonglant
  avec une multitude de websockets, bot de chat gérant plusieurs conversations,
  web crawler travaillant sur plusieurs pages en parallèle etc.

  Toutefois écrire un programme concurrent n'est jamais une balade de santé, et
  ce même pour un développeur expérimenté.

  Python étant connu pour sa capacité à rendre simple les choses complexes, il
  devrait y avoir une façon Pythonique d'écrire des programmes asynchrones. Et
  c'est justement ce que Trio tente d’accomplir !

  Trio est une bibliothèque de programmation asynchrone se basant sur les
  dernières fonctionnalités fournit par Python3 (async/await, boucles et context
  manager asynchrones etc.) tout en définissant un nouveau jeu de primitives
  rendant l'écriture de programmes asynchrones plus simple, plus testable, plus
  fun... bref plus Pythonique ;-)

.. raw:: html

  <hr/>

Méthodologies de Debug/Monitoring
---------------------------------

.. raw:: html

  <i>Julien Thebault - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Have you heard about SRE Book from Google ? or Maybe about USE Method, RED or
  Golden Signals ?

  In this talk, we will talk briefly about these different methods and

  - how we can use them in your observability strategy...
  - how we can apply them for performance analysis troubleshooting and
    monitoring...
  - how to approach these methods in a native cloud environment...

  We will use simple python API but most of the talk will apply to other
  technologies as well.

.. raw:: html

  <hr/>

Usages avancés de NumPy
-----------------------

.. raw:: html

  <i>Sarah Diot-Girard - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Python a la réputation d'être lent. C'est pourtant un langage largement
  utilisé dans des contextes de calculs numériques intensifs. La clé de ce
  paradoxe ? NumPy.

  NumPy, ou Numerical Python, permet un stockage efficace des matrices
  numériques de dimension arbitraire. Cette présentation a pour objectif de
  donner quelques trucs et astuces qui vous permettront un usage optimal des
  NumPy arrays. Nous aborderons notamment la vectorisation, le broadcasting, les
  ufuncs et les strides.

.. raw:: html

  <hr/>


VBA to Python
-------------

.. raw:: html

  <i>Stéphane Ifergan - 25 min</i>
  <br/>
  <br/>

.. raw:: html

  <hr/>

Vers une littérature pythonique: je lis, donc j'apprends!
---------------------------------------------------------

.. raw:: html

  <i>Thierry Chappuis - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  L'apprenti écrivain développe son art en lisant les Maîtres, l'apprenti
  architecte affûte sa lame en redessinant les merveilles de ce monde, et le dev
  fait des MOOCs. Github, Bitbucket ou Gitlab regorgent d'exemples pratiques, de
  code, de patterns architecturaux, de tests unitaires, de structures de
  données, d'algos, de lignes de doc. L'objectif de cette présentation est de
  réfléchir aux exercices, aux méthodologies, aux techniques, aux outils
  nécessaires pour développer une habitude littéraire pythonique chez
  l'apprenant, novice ou avancé. Pratiquer la lecture de code sur des projets
  grandeur nature est intimidant, affolant parfois, mais le retour sur
  investissement est potentiellement énorme. Cette compétence s'apprend puis
  s'exerce.

.. raw:: html

  <hr/>

Visualising the world of competitive programming with Python
------------------------------------------------------------

.. raw:: html

  <i>Anuj Menta - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Competitive programming has grown exponentially in the last decade. Millions
  of students, teachers, professionals solve problems including complex
  optimisations every minute. With the influx of programming languages,
  developers have a wide range of tools to choose from and use them to solve
  competitive challenges. Some of the popular platforms include Codeforces,
  Codechef, Hackerrank, Hackerearth, Topcoder etc.

  In this talk we are going to use the dataset of codes scraped from Codeforces
  from a variety of challenges. These include programs written by top rated
  coders across the world to the newbies. The platform allows you to code in 26
  different languages which obviously include popular programming languages like
  C, C++, Java, Javascript, PHP, Python etc. There are a very wide range of
  challenges in competitive programming like Sorting, Binary Search, Trees,
  Graphs, Dynamic Programming to name a few. The talk will cover the
  visualization of the dataset among broad classifications of how each
  programming language performs in these classifications. How efficient are
  programming languages across classifications in terms of time and memory and
  several others? The talk would also specifically cover the ease of using
  Python to solve different classes of challenges in competitive programming and
  the usage of Python over time.

  Major takeaways :

  - ABC of web scraping and best practices.
  - Optimizing web scraping to scale.
  - No-SQL databases for storing unstructured data
  - How does Python as a language fare in competitive programming in terms of
  - efficiency and popularity?
  - Can I pursue competitive programming using Python ONLY?
  - An analysis of popular programming languages used for solving challenges.

.. raw:: html

  <hr/>

Watchghost : surveillance asynchrone de serveurs
------------------------------------------------

.. raw:: html

  <i>Arthur Vuillard, Samira Rabaâoui - 25 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Un constat s'est fait lors de rencontres Python à Lyon : il n'y a pas d'outil
  de surveillance de serveurs simple et léger, et ça nous manque. Nous avons
  donc décidé d'en créer un. Nous avons choisi des outils asynchrones pour
  gagner en performance sur les appels réseaux. Nous avons utilisé en
  particulier Tornado, AioFTP et AsyncSSH pour créer Watchghost, un outil simple
  de surveillance de services réseaux. Nous allons vous présenter ce que nous
  avons fait, comment nous l'avons fait, ainsi que la suite du projet.

.. raw:: html

  <hr/>

WeasyPrint : 8 ans de la première ligne à la version stable
-----------------------------------------------------------

.. raw:: html

  <i>Guillaume Ayoub - 50 min</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Écrire une ligne de Python, c'est facile. Incroyable mais vrai : c'est
  toujours la première étape lors de la création d'un nouveau logiciel. Vous
  êtes capable d'écrire cette première ligne ? Alors vous êtes capable de créer
  le futur logiciel de vos rêves. Vous ne me croyez pas ? Venez donc vous
  laisser convaincre lors de cette conférence :).

  Nous prendrons l'exemple de WeasyPrint, un générateur de documents basé sur
  les technologies du web, qui après 8 ans de développement atteint (enfin) sa
  première version stable. Nous verrons comment il a évolué en 8 ans, quelles
  sont ses nouvelles fonctionnalités et comment il évoluera dans le futur, vers
  l'infini et au-delà.

Index des ateliers
==================

Back API Front - Atelier 1 Django
---------------------------------

.. raw:: html

  <i>Pierre Charlet, Emmanuelle Helly</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Lors de cet atelier nous allons découvrir les bases de Django 2.0 (Backend).

  Le seul prérequis est de venir avec son ordinateur et un environnement de
  développement prêt (Python et Django 2.0 installé)

  Cet atelier est le premier d'une suite de trois ateliers. L'atelier 2
  s'intéressera à Django Rest Framework (API). Dans le troisième et dernier vous
  utiliserez Vue.JS (Front) afin de manipuler l'API de l'atelier 2.

  Chaque atelier se base sur le précédent.

  Cet atelier est pour tous les niveaux.

.. raw:: html

  <hr/>

Back API Front - Atelier 2 Django REST framework
------------------------------------------------

.. raw:: html

  <i>Xavier Ordoquy</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Lors de cet atelier nous allons découvrir Django REST framework pour faire une
  API.

  Cet atelier fait suite à celui "Back API Front - Atelier 1 Django" qui est un
  pré-requis et se poursuit avec un dernier portant sur une interface VueJS.

  Le but est donc d'utiliser l'application faite précédemment pour exposer des
  données via une API JSON. En fonction du temps seront abordés des sujets comme
  l'identification et les permissions, la pagination, le filtrage.

.. raw:: html

  <hr/>

Back API Front - Atelier 3 Vue
------------------------------

.. raw:: html

  <i>Lucien Deleu</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Ajouter Vuejs proprement dans son application Django et intéragir avec une API
  conçu avec Django Rest Framework.

  Nous parlerons de l'interaction de plus en plus forte entre le Backend et le
  Frontend.

  La logique de nos applications, dédiée au Backend au départ, à de plus en plus
  tendance à être relayée au Frontend. Nous utiliserons Vuejs pour récupérer des
  données via l'API, créer du contenu et le modifier.

.. raw:: html

  <hr/>

Boostrapper un projet AnyBlok
-----------------------------

.. raw:: html

  <i>JS Suzanne</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  L'objectif et de démarer un projet en AnyBlok

  - Utilisation de cookiecutter pour le bootstrap
  - Déclaration de model
  - Définition des dépendances
  - Ajout de route / view Pyramid
  - Ajout de test Unitaire
  - Génération de la documentation du projet

.. raw:: html

  <hr/>

CTF (Capture The Flag)
----------------------

.. raw:: html

  <i>Alexandre Quoniou, Gildas Peneau, Thomas Bouzerar</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Over the course of the Week-End, we will set up a web server offering
  different types of security challenges, available to anyone that wishes to
  participate.

  This workshop is coordinated by the C.L.U.B., which is a computer security
  club of IMT Lille Douai.

.. raw:: html

  <hr/>

Déploiement de services Python sur Kubernetes
---------------------------------------------

.. raw:: html

  <i>Michael Bright</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Ce tutorial montrera aux participants des concepts/architecture de Kubernetes
  jusqu'aux use cases tels que rolling upgrades, cordoning, healthchecks,
  ingress controllers.

  https://github.com/ContainerOrchestration/Labs

  Les participants pourront

  - regarder simplement
  - faire tourner le tutorial dans le cloud (VMs fournies)
  - ou faire tourner le tutorial sur leur propre laptop (si minikube ou Docker
    Desktop déjà installé/demarré à l'avance).

  Ce tutorial démontrera aussi l’utilisation du module API Kubernetes
  "kubernetes-python".

  Tous les supports seront mis à jour sur GitHub.com et disponibles après
  l'atelier.

.. raw:: html

  <hr/>

Lightweight Pythonic \*MQs: patterns, concurrence et sécurité
-------------------------------------------------------------

.. raw:: html

  <i>Thierry Chappuis</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  ZeroMQ et NanoMQ sont au réseau ce que python est à la programmation: des
  boîtes à outils extrêmement légères, flexibles et performantes permettant à
  des acteurs distribués d'échanger un grand nombre de messages en utilisant des
  mécanismes de transport variés (in-process, inter-process, TCP, multicast). A
  la base conçues et optimisées pour le backend de systèmes de trading en ligne,
  ces bibliothèques représentent aujourd'hui des solutions génériques et
  multi-langages pour l'échange de messages et elles sont utilisées par un large
  spectre d'applications et de microservices. Ce workshop propose de vous
  introduire par la pratique aux patterns d'utilisation de ces bibliothèques,
  des plus simples vers les plus évoluées: pub-sub, request-reply,
  dealer-router, router-router, heartbeating sans oublier les questions de
  fiabilité et de sécurité (libsodium). La question de la concurrence sera
  également au centre des exemples avec threading, multiprocessing, asyncio,
  async, await. Ce workshop sera l'occasion d'expérimenter, de comprendre, de
  pratiquer les super pouvoirs offerts par ces frameworks ultra-souples associés
  à python 3.5+.

.. raw:: html

  <hr/>

Outillage d'un projet Python
----------------------------

.. raw:: html

  <i>Kevin Samuel</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Mon boss m'a dit de mettre en place un virtualenv, installer les libs, lister
  les dépendances, ajouter les linters, les formateurs, les tests unitaires, le
  task runner puis packager le tout et uploader ça sur pypi quand on a un
  coverage de 120%

  Y a une doc pour ça ? Pas vrai ?

  (La participation à cet atelier demande d'avoir les droits administrateurs
  ainsi que Python3.6 installé avant le début du cours)

.. raw:: html

  <hr/>

Pikachu, attaque Machine Learning !
-----------------------------------

.. raw:: html

  <i>Sarah Diot-Girard</i>
  <br/>
  <br/>

.. container:: wrap-paragraphe

  Big Data, Intelligence Artificielle, Deep Learning, autant de buzz words qui
  peuvent sembler nébuleux. Pourtant, il existe des librairies Python solildes
  et bien documentées qui rendent le Machine Learning accessibles à tous.
  
  Le but de cet atelier est d'accompagner les développeurs Python dans leur
  premier projet en Data Science, de la préparation des données à
  l'apprentissage d'un modèle de Machine Learning.

  Aucune expérience préalable en Machine Learning n'est nécessaire, mais il est
  recommandé d'avoir quelques bases en programmation.

.. raw:: html

  <hr/>
