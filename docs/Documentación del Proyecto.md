# Documentación del Proyecto: Sistema de Reservas de Salas de Biblioteca

# Documentación General del Proyecto

## Planteamiento del Problema

En la universidad, los estudiantes y docentes enfrentan dificultades para reservar salas de estudio en la biblioteca, ya que el proceso actual se realiza de forma manual o a través de formularios no actualizados. Esto genera conflictos por dobles reservas, tiempos de espera prolongados y falta de información en tiempo real sobre la disponibilidad de espacios. Se requiere una solución móvil que facilite y optimice la gestión de estas reservas.

## Objetivos del Sistema

### Objetivo General

Desarrollar una aplicación móvil que permita a los estudiantes y docentes de la universidad reservar salas de biblioteca de manera eficiente, rápida y en tiempo real.

### Objetivos Específicos

- Diseñar una interfaz intuitiva para que los usuarios consulten la disponibilidad de salas.

- Permitir la reserva y cancelación de salas mediante la app.

- Generar notificaciones de recordatorio de las reservas.

- Administrar el uso de salas por parte del personal autorizado

## Requerimientos del Sistema

### Requerimientos Funcionales

- El sistema debe permitir a los usuarios registrarse o iniciar sesión con su correo institucional.

- El sistema debe mostrar la disponibilidad de salas de estudio.

- El usuario debe poder realizar reservas de una sala para una franja horaria específica.

- El sistema debe permitir cancelar o modificar una reserva existente.

- El administrador debe poder agregar, editar o eliminar salas disponibles.

- El sistema debe enviar notificaciones al usuario al iniciar una reserva.

### Requerimientos No Funcionales

- El sistema debe tener una interfaz amigable y responsiva.

- El sistema debe ser seguro, protegiendo los datos personales y credenciales del usuario.

- La arquitectura debe ser escalable para futuras funcionalidades.

- La aplicación debe estar disponible en dispositivos Android mediante Ionic.

- El backend debe estar contenedorizado y ser desplegado mediante Jenkins y Docker.

## Estructura técnica del sistema

## Descripción General

Este sistema permite a estudiantes, empleados y administradores gestionar reservas de salas de biblioteca en una institución educativa. Está dividido en tres capas principales: frontend (Ionic + Angular), backend (Spring Boot) y base de datos (MySQL). La comunicación se realiza a través de una API REST, y el despliegue se maneja con Docker y Jenkins.

## Tecnologías Utilizadas

- **Frontend**: Ionic + Angular

- **Backend**: Java con Spring Boot

- **Base de Datos**: MySQL

- **Autenticación**: Tradicional (form-based con BCrypt)

- **Infraestructura**: Docker, Jenkins, GitHub

- **Arquitectura**: Modular tanto en frontend como en backend

## Flujo detallado de la arquitectura

[App móvil (Frontend Ionic/Angular)]
    |
    |--- Solicitudes HTTP (REST) ---> 
    |
[Backend (Spring Boot)]
    |
    |--- Controladores HTTP: reciben peticiones
    |--- Servicios: procesan lógica y validaciones
    |--- Repositorios: acceden a la base de datos
    |
    v
[Base de datos MySQL]

Infraestructura:

- Docker: empaqueta cada componente en contenedores separados
- Jenkins: ejecuta tests, construye imágenes y despliega automáticamente

## Autenticación

Se implementó autenticación tradicional:

1. El usuario envía su correo y contraseña.

2. El backend verifica la existencia del usuario.

3. Se compara la contraseña (en texto plano) con la almacenada (encriptada con BCrypt).



## Backend (Spring Boot)

**Estructura del Proyecto**

BackReservasUH/
├── Jenkinsfile
├── Dockerfile
├── docker-compose.yml
├── README.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── .gitignore
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── corhuila/
│   │   │           └── backReservasUH/
│   │   │               ├── Controllers/
│   │   │               │   ├── ReservaRestController.java
│   │   │               │   ├── UsuarioRestController.java
│   │   │               │   └── SalaRestController.java
│   │   │               ├── models/
│   │   │               │   ├── Reservas.java
│   │   │               │   ├── Usuario.java
│   │   │               │   ├── Salas.java
│   │   │               │   └── Duracion.java
│   │   │               ├── repositories/
│   │   │               │   ├── IReservasRepository.java
│   │   │               │   ├── IUsuarioRepository.java
│   │   │               │   └── ISalasRepository.java
│   │   │               ├── services/
│   │   │               │   ├── ReservasServiceImpl.java
│   │   │               │   ├── IReservasService.java
│   │   │               │   ├── UsuarioServiceImpl.java
│   │   │               │   ├── IUsuarioService.java
│   │   │               │   ├── SalasServiceImpl.java
│   │   │               │   └── ISalasService.java
│   │   │               ├── schedulers/
│   │   │               │   └── ReservaScheduler.java
│   │   │               └── BackReservasUhApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/
│           └── com/
│               └── corhuila/
│                   └── backReservasUH/
│                       └── ... (tests)
└── .mvn/
    └── wrapper/
        ├── maven-wrapper.jar
        └── maven-wrapper.properties



**Lógica del Backend**

- **Controladores**: manejan peticiones HTTP

- **Servicios**: contienen la lógica de negocio, validaciones de horarios (6:00 a 21:00), solapamiento, etc.

- **Repositorios**: interfaces JPA para acceso a datos

- **Entidades**: reflejan el esquema de la base de datos (reservas, salas, usuarios, duraciones)

- **Schedulers**: tareas programadas para acciones como notificaciones

**Endpoints Principales**

- `GET /api/reservas/sala/{salaId}/fecha/{fecha}`: reservas por sala y día

- `GET /api/reservas/fecha/{fecha}`: reservas por fecha

- `POST /api/reservas`: crear reserva

- `PUT /api/reservas/{id}/estado`: cambiar estado de reserva.



## Frontend (Ionic + Angular)

**Estructura del Proyecto**

src/
├── app/
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.routes.ts
│   ├── components/
│   │   ├── info-admin-admin-component/
│   │   ├── info-empleado-admin-component/
│   │   ├── info-estudiante-admin-component/
│   │   ├── info-estudiante-empleado-component/
│   │   ├── inicio-component/
│   │   ├── inicio-sesion-form/
│   │   │   ├── inicio-sesion-form.component.html
│   │   │   ├── inicio-sesion-form.component.scss
│   │   │   └── inicio-sesion-form.component.ts
│   │   ├── lista-admin-component/
│   │   ├── lista-estudiantes-component/
│   │   ├── lista-reservas-component/
│   │   ├── lista-salas-component/
│   │   ├── listo-empleado-component/
│   │   ├── perfil-admin-component/
│   │   ├── perfil-empleado-component/
│   │   ├── perfil-estudiante-component/
│   │   ├── registrar-admin-form/
│   │   ├── registrar-empleado-form/
│   │   ├── registro-form/
│   │   ├── reserva-registro/
│   │   ├── resumen-reserva-component/
│   │   ├── resumen-reserva-component-empleado/
│   │   └── verificar-correo-form/
│   ├── service/
│   │   ├── api-url.ts
│   │   ├── duracion.service.ts
│   │   ├── duracion.ts
│   │   ├── login.service.ts
│   │   ├── reservas.service.ts
│   │   ├── reservas.ts
│   │   ├── salas.service.ts
│   │   ├── salas.ts
│   │   ├── usuario.service.ts
│   │   └── usuario.ts
│   └── view/
│       ├── confirmar-reserva/
│       ├── info-admin-admin/
│       ├── info-empleado-admin/
│       ├── info-estudiante-admin/
│       ├── info-estudiante-empleado/
│       ├── iniciar-sesion/
│       ├── inicio/
│       │   ├── inicio.page.html
│       │   ├── inicio.page.scss
│       │   └── inicio.page.ts
│       ├── inicio-empleado/
│       ├── interfaz-principal/
│       ├── lista-admin/
│       ├── lista-empleado/
│       ├── lista-estudiantes/
│       ├── lista-reservas/
│       ├── lista-salas/
│       ├── perfil-admin/
│       ├── perfil-empleado/
│       ├── perfil-estudiante/
│       ├── registrar-admin/
│       ├── registrar-empleado/
│       ├── registrar-usuario/
│       ├── reserva/
│       ├── resumen-reserva/
│       ├── resumen-reserva-empleado/
│       └── verificar-correo/
├── assets/
│   ├── icon/
│   ├── images/
│   └── shapes.svg
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── global.scss
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
├── theme/
│   └── ... (estilos de tema)
└── zone-flags.ts



**Lógica del Frontend**

- Componentes reutilizables (formularios, listas, resumen de reserva)

- Vistas específicas por rol (admin, empleado, estudiante)

- Servicios para lógica de negocio y consumo de la API

- Enrutamiento modular y organizado por roles

## Docker y Jenkins

**Docker**

- Contenedores para backend, base de datos y frontend

- `Dockerfile` para construcción de imagen backend

- `docker-compose.yml` para orquestación de servicios

**Jenkins**

- `Jenkinsfile` con pipeline para:
  
  - Compilación del backend
  
  - Ejecución de pruebas
  
  - Construcción de imagen Docker
  
  - Despliegue en entorno de prueba/producción

---

Este sistema ofrece una solución integral para la gestión de reservas de salas con control de acceso basado en roles, validaciones de negocio, modularidad y escalabilidad, usando herramientas y prácticas modernas de desarrollo móvil.


