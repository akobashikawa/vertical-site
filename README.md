vertical-site
=============

Vertical site studio

La motivación fue hacer un site similar a:

* http://www.soleilnoir.net/believein
* http://discover.store.sony.com/tablet

Revisando believein, me resultaba un poco difícil comprender cómo
implementaba el comportamiento que veía.

Encontré una aproximación en Curtain.js. Sin embargo, cuando requería
modificar la presentación, también me resultaba un poco difícil
encontrar dónde hacerla.

Decidí reinventar la rueda para tratar de comprender las ideas del
proceso de solución.

simple_html
-----------
* Páginas con anclas
* Cabecera
* Menú con enlaces a páginas

nav_fixed
---------
* Páginas con anclas
* Elementos de navegación fijos
* Indicador de posición en el menú (sensible a url, links y scroll)

scrollto
--------
* Scroll animado suave
* Ajuste automático de altura mínima de página

scrollslow
----------
* Scroll lento

scrollbgfixed
-------------
* Scroll lento
* Fondo fijo