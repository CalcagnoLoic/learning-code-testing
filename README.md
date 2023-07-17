# Testez vos applications avec javascript - Les tests d'intégrations

# Exercice n°1

Fichier concerné : [`js/router/index.js`](https://github.com/CalcagnoLoic/learning-code-testing/blob/integrationtest/js/router/index.js)

## Premier test

- Given : En tant qu'utilisateur,
- When : je vais sur l'URL "``/``"
- Then : je souhaite voir la page de connexion s'afficher avec le titre "``Veuillez vous connecter``"

## Deuxième test

- Given : En tant qu'utilisateur,
- When : je vais sur l'URL "``/#/home``"
- Then : je souhaite voir la page d'accueil des capteurs s'afficher avec le titre "``Vos capteurs``"

## Troisième test

- Given : En tant qu'utilisateur,
- When : je vais sur l'URL "``/#/facade-details``"
- Then : je souhaite voir la page d'accueil des capteurs s'afficher avec le titre "``Détails du capteur``"

## Quatrième test

- Given : En tant qu'utilisateur,
- When : je vais sur l'URL "``/#/add-sensor``"
- Then : je souhaite voir la page d'accueil des capteurs s'afficher avec le titre "``Ajout d'un nouveau capteur``"


# Exercice n°2

Fichier concerné : [js/utils/signInForm/index.js]()
## Premier test

-   Given : En tant qu'utilisateur déconnecté,
-   When : je complète les informations du formulaire avec une erreur dans l'e-mail thomas@thomas.com au lieu de thomas@facadia.com
-   Then : je clique sur le bouton submit
-   Then : un message d'erreur s'affiche

## Deuxième test

-   Given : En tant qu'utilisateur déconnecté,
-   When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com
-   Then : je clique sur le bouton submit
-   Then : un message d'erreur pour le mot de passe s'affiche

## Troisième test

- Given : En tant qu'utilisateur déconnecté,
- When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com et le mauvais mot de passe
- Then : je clique sur le bouton submit
- Then : un message d'erreur pour le mot de passe s'affiche

## Quatrième test

- Given : En tant qu'utilisateur déconnecté,
- When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com et le bon mot de passe azerty
- Then : je clique sur le bouton submit
- Then : aucun message d'erreur s'affiche
