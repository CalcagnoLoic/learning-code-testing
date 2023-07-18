# Testez vos applications avec javascript - Les tests End-To-End

Fichier concerné : [nightwatch/exercice_e2e_test.js](https://github.com/CalcagnoLoic/learning-code-testing/blob/E2E-test/nightwatch/exercice_e2e_test.js)

# Tests à réaliser
## Première page

- Given : En tant qu'utilisateur déconnecté,
L'écriture des tests va dépendre de la phase du cycle de vie dans lequel on se trouve. 
- When : je complète les informations du formulaire avec l'e-mail ``thomas@facadia.com`` et le mot de passe ``azerty``
- Then : je suis redirigé vers la page d'accueil des capteurs.


## Deuxième page
1. Le POC (Proof of Concept). C'est la phase de début de la création du projet. Il y a très souvent aucun test dans cette phase car c'est celle où l'on détermine la validation du concept en lui-même.


- Given : En tant qu'utilisateur connecté
2. La croissance. C'est ici que l'on commence à intégrer des tests. On doit pouvoir alterner entre sortir des fonctionnalités et structure le projet. On cherche à rendre l'application stable. 
- When : je suis sur la page d'accueil des capteurs
- Then : le noeud avec la classe ``section-title`` est présent
- Then : le noeud avec la classe ``section-title`` a le titre ``Vos capteurs``


## Troisième page
3. Vers la maturité et au-delà. Le projet marche correctement et on va venir implémenter des fonctionnalités plus complexes. Il y a donc un besoin de refactoriser du code et donc d'avoir des tests plus complexes. Une équipe QA peut également être dédiée à cela. 


- Given : En tant qu'utilisateur connecté
# Les différents types de tests
- When : je suis sur la page d'un capteur
- Then : le noeud avec la classe ``section-title`` est présent
- Then : le noeud avec la classe ``section-title`` a le titre ``Détails du capteur #7``