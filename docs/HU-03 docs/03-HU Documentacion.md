# 03-HU - Gestión de Reserva de Salas en Biblioteca

## Inicio de Sesión y Registro de Usuarios

### Historia de Usuario

**Como** usuario registrado del sistema de reservas de la biblioteca,  
**Quiero** poder acceder a la plataforma a través de un inicio de sesión seguro,  
**Para que** pueda gestionar mis reservas de salas sin comprometer la seguridad de mis datos personales.

---

### Prioridad

Alta (Fundamental para el acceso de los usuarios al sistema)

### Estimación

3 puntos en Scrum

---

### Criterios de Aceptación

- El sistema permite a los usuarios autenticarse mediante correo electrónico y contraseña.
- Si la autenticación es exitosa, el sistema genera y devuelve un token de sesión para mantener al usuario autenticado.
- En caso de error en el inicio de sesión, se muestran mensajes claros y específicos:
  - "Usuario no registrado"
  - "Contraseña incorrecta"
- El usuario tiene un rol asignado predeterminadamente como **ESTUDIANTE**.
- La contraseña se encripta al registrarse en la cuenta del usuario.

---

### Definition of Ready (DoR)

- [x] Base de datos definida con la tabla de usuarios y credenciales.
- [x] Diseño de la interfaz de usuario para el inicio de sesión.
- [x] Definición de los endpoints del backend que manejarán la autenticación.

---

### Definition of Done (DoD)

- [x] Implementación de la validación de credenciales en el backend.
- [x] Creación del endpoint de inicio de sesión, que recibe credenciales y devuelve un token de sesión si son correctas.
- [x] Desarrollo de la interfaz de usuario para el formulario de inicio de sesión.

---

### Detalles Técnicos Implementados

- **Backend (Spring Boot):**
  
  - Se creó el endpoint `/api/login` para el inicio de sesión.
  - Se creó el endpoint `/api/users` para el registro de un usuario.
  - Se validan las credenciales del usuario mediante búsqueda por correo electrónico y verificación de contraseña encriptada con `BCrypt`.
  - Se devuelve un mensaje de error específico en caso de fallo.

- **Base de Datos (MySQL - DOCKER):**
  
  - Tabla `usuarios` definida con campos: `id`, `primernombre`, `segundonombre`, `primerapellido`, `segundoapellido`,`correo`,`contrasena`,`codigo_estudiantil`,`tipo_documento`,`num_documento`,`rol`
  - Las contraseñas se almacenan encriptadas con BCrypt.

- **Frontend (Ionic Angular):**
  
  - Formulario de inicio de sesión con validación de campos requeridos.
  - Se conecta con el backend para enviar credenciales.
  - Muestra mensajes de error adecuados según la respuesta del backend.
  - Al autenticarse con éxito, se guarda el token en almacenamiento seguro.

---

### Estado Final

**Todos los requerimientos funcionales y técnicos de esta historia de usuario han sido implementados y verificados al 100 por ciento.**  
El sistema de autenticación cumple con los criterios de aceptación, definición de listo y definición de hecho, garantizando el registro y inicio de sesión para los usuarios del sistema de reservas de la biblioteca.
