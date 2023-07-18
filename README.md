# Tester son code en javascript

# Le cycle de développement logiciel 

L'écriture des tests va dépendre de la phase du cycle de vie dans lequel on se trouve. 

1. Le POC (Proof of Concept). C'est la phase de début de la création du projet. Il y a très souvent aucun test dans cette phase car c'est celle où l'on détermine la validation du concept en lui-même.

2. La croissance. C'est ici que l'on commence à intégrer des tests. On doit pouvoir alterner entre sortir des fonctionnalités et structure le projet. On cherche à rendre l'application stable. 

3. Vers la maturité et au-delà. Le projet marche correctement et on va venir implémenter des fonctionnalités plus complexes. Il y a donc un besoin de refactoriser du code et donc d'avoir des tests plus complexes. Une équipe QA peut également être dédiée à cela. 

# Les différents types de tests

Il existe une multitude de tests que l'on peut appliquer à un projet. Il y a les tests unitaires, les tests d'intégrations, les tests End-To-End, les smoke tests, les tests de snapshots (React), ...

Voici les plus courants : 

- [Les tests unitaires](https://github.com/CalcagnoLoic/learning-code-testing/tree/master#les-tests-unitaires). Ce sont souvent les premiers test implémentés.

- [Les tests d'intégration](https://github.com/CalcagnoLoic/learning-code-testing/tree/master#les-tests-dint%C3%A9grations). Ce sont des tests que l'on ajoute soit en même temps que les trsts unitaires, soit après. Ils sont déjà plus complexes. 

- [Les tests End-To-End (E2E)](https://github.com/CalcagnoLoic/learning-code-testing/tree/master#les-tests-end-to-end). Ce sont des tests assez complexes qui sont utilisés dans la phase de maturité du projet.

## Les tests unitaires 

Un test unitaire permet de tester une partie spéficique du programme. Un test unitaire doit être simple à écrire, à lire et rapide à exécuter. De plus, il ne doit pas avoir d'effets de bord. 

Il existe une règle d'or dans les bonnes pratiques des tests. Si on ne peut réaliser facilement un test, c'est que le code est trop compliqué et doit être simplifié. 

De plus, ce genre de test permet de fiabiliser les applications et de décomplexifier le code. Il est nécessaire de tester en premier lieu les parties les plus complexes et critique du code.

## Les tests d'intégrations 

Ce type de test s'effectue après les tests unitaires. Ils sont plus complexes à réaliser et souvent, on a besoin de librairies complémentaires. De plus, un test d'intégration teste l'ensemble d'une fonctionnalité. 

Dans ce type de test, on simule donc certaines actions comme les clics de souris, compléter un champs de formulaire ou récupérer des données d'une API.  

**Attention**, il ne s'agit de réaliser un parcours complet d'un utilisateur, sinon ce serait du E2E. 

## Les tests End-To-End

Ce sont les tests que l'on réalise à la maturité de l'application. Généralement, on vérifie l'intégralité du trajet utilisateur afin de voir si l'application répond correctement. 

A l'heure actuelle, un projet complexe est fait d'un ensemble de systèmes interconnectés comme le système de cache ou d'authentification. Il est impératif de faire des tests E2E afin de valider que ces différents systèmes fonctionnent tous correctement. 

Un test E2E peut être : 

- manuel: c'est l'équipe de dev ou le product manager qui teste la fonctionnalité à la main.
- automatique: en plus de faire passer le test sur la CI, on fait tourner les tests à intervalles réguliers sur des serveurs. 