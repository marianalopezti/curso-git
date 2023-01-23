# Curso git

Este es el primer desafío del curso de git.

## Consigna

Una vez identificado el commit, vamos a usar el comando Git revert para revertirlo. Ese es
tu trabajo.
Luego de revertido, el equipo podrá ponerse a trabajar en el error, pero con más tiempo,
ya que la interfaz volvió a funcionar.

En este caso, luego de pruebas, análisis y estrés, el equipo logró detectar que la función getAllAccounts()
es la que está dando error. Esa función es el punto conflictivo. Como no hay tiempo para corregirla,
vamos a usar Git para revertir el commit en el que se subió esa función.
El primer paso es detectar el commit. Usa Git Log para buscar el commit en el que figure la llamada a
esa función.

```bash
git revert <id commit>
```

## Otros comandos

```bash
git status

git add .

git commit -m "Miercoles a la mañana"

git push

git pull
```

## Tecnologías

[Visual Code](https://code.visualstudio.com/)
