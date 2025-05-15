# Resumen de Clase – Conexión de Backend con Frameworks Frontend

## Tema: Conexión de Backend con Frameworks de Frontend

---

## Exposición por Grupos

Durante esta clase, varios grupos presentaron exposiciones sobre cómo conectar un backend (normalmente desarrollado con tecnologías como Node.js y Express) con distintos frameworks de frontend. Cada grupo explicó la arquitectura general del proyecto, las herramientas utilizadas y los pasos para establecer la comunicación entre el cliente y el servidor.

---

## Frameworks de Frontend Presentados

### 1. Ionic con Angular

- Se mostró cómo conectar una aplicación móvil híbrida desarrollada en Ionic con Angular a un backend.
- Se utilizaron servicios HTTP para enviar y recibir datos desde el backend.
- Se explicó cómo consumir APIs REST utilizando `HttpClientModule` en Angular.
- La autenticación y las rutas protegidas también fueron abordadas como parte del flujo de conexión.

**Repositorios con documentación y ejemplos:**

- [Backend-Ionic_angular (Oscarsl10)](https://github.com/Oscarsl10/Backend-Ionic_angular.git)
- [ElectroCorhuila (BondrewdXD)](https://github.com/BondrewdXD/ElectroCorhuila.git)

### 2. Vue.js

- Se presentó cómo usar Axios para hacer peticiones al backend desde una aplicación creada con Vue.
- Se discutió el uso de `vue-router` para manejar rutas dinámicas.
- También se abordó la gestión del estado con Vuex en algunos casos, para mantener los datos sincronizados con el backend.

### 3. React

- Se explicó cómo consumir servicios REST utilizando la librería Axios o `fetch`.
- Se mostró cómo organizar componentes y manejar estados con `useState` y `useEffect`.
- Se destacó la importancia del uso de promesas y manejo de errores en las llamadas al backend.

---

## Material Adicional

Las presentaciones utilizadas por los grupos están disponibles en la carpeta **Anexos**, donde se incluyen los archivos en formato PowerPoint (.pptx) con diagramas, ejemplos de código y flujos de trabajo para cada caso de estudio.

---

## Conclusiones Generales

- Todos los frameworks permiten la comunicación con un backend mediante peticiones HTTP.
- Es fundamental configurar correctamente los endpoints y gestionar CORS cuando se trabaja con frontend y backend por separado.
- El enfoque modular y el uso de servicios en Angular, junto con las librerías como Axios en Vue y React, facilitan la integración con APIs.
- La correcta gestión del estado y el enrutamiento son claves para una experiencia fluida del usuario al consumir datos del backend.
