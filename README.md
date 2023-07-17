# Testez vos applications avec javascript - Les tests unitaires

# Exercice n°1

Fichier concerné : ``js/utils/env/index.js``

## Premier test
- Given : Je suis en environnement de test
- When : j'appelle la fonction isInTestEnv
- Then : la fonction me retourne le booléen true

## Deuxième test

- Given : Je suis en environnement de test
- When : j'appelle la fonction isInTestEnv et que je précise que je ne suis pas en environnement de test
- Then : la fonction me retourne le booléen false


# Exercice n°2

Fichier concerné : ``js/utils/api/index.js``

## Premier test

- Given : Je suis en environnement de test
- When : j'appelle la fonction ``retrieveSensorsData`` pour récupérer les données des capteurs de la page d'accueil
- Then : la fonction me retourne bien les données des façaces mockées.
