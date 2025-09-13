# ProyectoCliente

Este proyecto ha sido generado usando [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9. Conectada a una API externa y durante el desarrollo se utilizó
XAMPP como entorno local y posteriormente se realizó el despliegue en un servidor de OVHcloud.
Es un proyecto en el cual se ha creado una página web donde poder comprar productos de oferta, el cual deja que el usuario registre su dirección, haga una compra donde
los articulos se incluyan en una cesta y donde también se pueden eliminar los productos seleccionados anteriormente.
El proyecto está disponible en producción en:

https://proyectocliente.mcgonsan.com/principal

## Tecnologías utilizadas

- ANGULAR, framework frontend para la construcción de SPA.
- XAMPP, servidor local durante el desarrollo.
- API externa, para obtener y mostrar información dinámica.
- HTML, CSS, TypeScript para estructuración, estilos y lógica.
- npm / Angular CLI para gestión de dependencias y servidor de desarrollo
- Visual Studio Code, editor de texto.
- Terminal, para ejecutar comandos CLI de Angular.
- Bootstrap, estilizar y diseño resposive.
- OVHcloud, servidor para despliegue en producción.

## Requisitos previos

1. Descarga desde https://nodejs.org la version LTS
   Esto instala también npm, el gestor de paquetes de Node. Y comprobamos el terminal:

node -v
npm -v

2. Angular CLI, hay que instalarla de forma global:

npm install -g @angular/cli

y comprobar la instalación:

ng version

3. Git, para clonar proyectos desde Github, descargar desde https://git-scm.com
   y comprobar en el terminal:

git --version

## Instalación

1. Clonar el repositorio
2. Acceder a la carpeta del proyecto: cd proyectoCliente
3. npm install
4. ng serve
5. Abrir en el navegador: http://localhost:4200/

NOTA IMPORTANTE: si el proyecto es antiguo, puede pedir versiones actualizadas de Angular o NOde.js.
En ese caso hay que mirar el archivo package.json para usar la versión adecuada.
Si falta el builder @angular-devkit/build-angular, hay que instalarlo de forma manual:

npm install --save-dev @angular-devkit/build-angular

## Despliegue en producción

El proyecto se encuentra desplegado en un servidor con OVHcloud y accesible en el siguiente enlace:

https://proyectocliente.mcgonsan.com/principal

## API utilizada

Este proyecto obtiene datos desde una API externa para mostrar información dinámica en la aplicación

https://dummyjson.com/products

## Autor

Desarrollado por Mari Carmen González Sánchez.
