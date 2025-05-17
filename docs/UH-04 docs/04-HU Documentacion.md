## 04-HU - Gestión de Reserva de Salas en Biblioteca - Código de Verificación al Correo

### Historia de Usuario

**Como** usuario que ha iniciado sesión correctamente en la plataforma de reservas de salas de biblioteca,  
**Quiero** recibir un código de verificación al correo electrónico registrado y una pantalla para ingresarlo,  
**Para que** se valide mi identidad antes de permitir el acceso completo al sistema de reservas.

---

### Prioridad

Alta (Fundamental para la seguridad y validación de usuarios)

### Estimación

3 puntos en Scrum

---

### Criterios de Aceptación

- Se envía automáticamente un correo con un código de activación de 6 dígitos al usuario tras iniciar sesión exitosamente.

- La vista mostrada contiene una interfaz clara con campos para ingresar los 6 dígitos del código.

- El sistema valida el código ingresado y permite continuar solo si es correcto.

- Existe un botón funcional para reenviar el código en caso de no haberlo recibido.

---

### Definition of Ready (DoR)

- Se han definido los mecanismos de envío de correos automáticos.

- Se ha validado el formato del código de activación.

---

### Definition of Done (DoD)

- El código es enviado automáticamente tras login válido.

- El diseño de la pantalla de activación coincide con el prototipo visual proporcionado.

- El sistema valida correctamente el código ingresado.

- El botón “Reenviar Código” funciona y vuelve a enviar el mismo código o uno nuevo, según se defina.

- El usuario puede continuar con el uso del sistema una vez validado el código.

---

### Detalles Técnicos Implementados

- **Backend (Spring Boot):**
  
  - Se agregó un servicio para generar y almacenar temporalmente códigos de activación de 6 dígitos asociados a la sesión del usuario.
  
  - Se integró un servicio de envío de correo electrónico automáticamente.
  
  - Se creó un endpoint `/api/verify-code` que recibe el código ingresado por el usuario y valida que coincida con el generado.
  
  - El código tiene un la propiedad de ser eliminado de la variable temporal configurado para evitar usos indebidos.

- **Frontend (Ionic Angular):**
  
  - Se diseñó la pantalla de ingreso del código con campos para los 6 dígitos y mensajes de ayuda claros.
  
  - Se desarrolló la funcionalidad para enviar el código ingresado al backend.
  
  - Se implementó el botón “Reenviar Código” que llama al backend para volver a enviar el código.
  
  - Al validar correctamente el código, se redirige al usuario a la inicio de gestión de reservas.

---

### Estado Final

**Todos los requerimientos funcionales y técnicos de esta historia de usuario han sido implementados y verificados al 100%.**  
El sistema de validación mediante código de verificación cumple con los criterios de aceptación, definición de listo y definición de hecho, asegurando un control adicional sobre la identidad del usuario antes de permitir el acceso completo al sistema de reservas de la biblioteca.
