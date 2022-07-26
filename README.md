
# Ghibli-Api-Angular

Angular project implementing Ghibli Api



## Demo

https://ghibliapi.cloudness.es

## Description

Todas las llamadas se realizan a la siguiente Api: https://ghibliapi.herokuapp.com/films/

En el componente Home se muestra el NavBar y se recorre el array de filteredFilms llamando al componente film por cada película.

Los modales estan implementados con la librería de SweetAlert2 (Tanto el modal de descripción como los inputs).

Para posibilitar el filtrado por búsqueda, he generado dos Arrays de tipo film, el original 'films' (donde se hace la llamada a la api) y el que se muestra todo el rato en función de los parámetros de busqueda 'filteredFilms'.

Respecto a todo lo relacionado con el diseño del proyecto he utilizado la librería de estilos de Angular Material y scss para ciertos estilos.

## Screenshots

![App Screenshot](https://cloudness.es/ghibliHome.png)

![App Screenshot](https://cloudness.es/ghibliDesc.png)

![App Screenshot](https://cloudness.es/ghibliEdit.png)
