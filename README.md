# Testez vos applications avec javascript - Les tests End-To-End

Fichier concerné : [nightwatch/exercice_e2e_test.js](https://github.com/CalcagnoLoic/learning-code-testing/blob/E2E-test/nightwatch/exercice_e2e_test.js)
# Tests à réaliser
## Première page

- Given : En tant qu'utilisateur déconnecté,
- When : je complète les informations du formulaire avec l'e-mail ``thomas@facadia.com`` et le mot de passe ``azerty``
- Then : je suis redirigé vers la page d'accueil des capteurs.

## Deuxième page

- Given : En tant qu'utilisateur connecté
- When : je suis sur la page d'accueil des capteurs
- Then : le noeud avec la classe ``section-title`` est présent
- Then : le noeud avec la classe ``section-title`` a le titre ``Vos capteurs``

## Troisième page

- Given : En tant qu'utilisateur connecté
- When : je suis sur la page d'un capteur
- Then : le noeud avec la classe ``section-title`` est présent
- Then : le noeud avec la classe ``section-title`` a le titre ``Détails du capteur #7``


