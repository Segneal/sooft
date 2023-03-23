# SOOFT TECHNOLOGY
 
Este proyecto fue desarrollado por Ariel Nicolas Heredia, como desafio tecnico de Sooft Technology.

## Prerequisitos.
Instalacion de MongoDB: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
Instalacion Node: https://nodejs.org/es/download

### Iniciar MongoDB
Abrir una ventana de terminal y ejecutar el siguiente comando para iniciar el servidor de MongoDB:

```mongod```
Esto va a iniciar el servidor en el puerto defecto : 27017

-alternativa
recorrer directorio de pc a C:\Program Files\MongoDB\Server\6.0\bin
ejecutar aplicacion mongod

Clonar el repositorio de la aplicación
git clone https://github.com/Segneal/sooft.git

Instalar Typescript
```
npm install -g typescript
```

### Script popular MongoDB:
Establecerse sobre carpeta db
Instalar dependencias con el comando y luego ejecutar comandos 
```
npm install
node populate.js
```
###Servidor backend

Establecerse sobre carpeta back
Instalar dependencias con el comando y luego ejecutar comandos


```
npm install
npm run build
npm start
```

### Cliente frontend
Establecerse sobre carpeta front
Instalar dependencias y luego ejecutar comandos
```
npm install
npm run build
npm start
npm run preview
```

## Observaciones
Para la implementación de este proyecto, se utilizaron varias herramientas y tecnologías. 

Se ha utilizado Typescript en la implementacion tanto del frontend como del backend, esto garantiza el desarrollo mas rapido y seguro.

Se hizo uso de Tailwind para facilitar la implementación del código y acelerar el proceso de desarrollo. que me permite estilizar rapidamente los componentes y construir interfaces de usuario. También se utilizó React Calendar para abstraer la complejidad de la implementación de un calendario y proporcionar una solución rápida y fácil.

En la sección del frontend, se hizo uso de React Query para abstraer el el manejo del estado de la aplicación y reducir la cantidad de llamadas a la API. También se utilizó Axios como biblioteca para realizar llamadas a la API.

En la sección del backend, se utilizó MongoDB como base de datos y se utilizó Mongoose como ODM de. 
