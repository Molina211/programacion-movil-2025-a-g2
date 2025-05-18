## 05-HU - Gestión de Reserva de Salas en Biblioteca - Creación de una nueva reserva

### Historia de Usuario

**Como** usuario registrado del sistema de reservas de la biblioteca,  
**Quiero** poder realizar la reserva de una sala de manera rápida y sencilla,  
**Para que** pueda asegurarme de contar con un espacio disponible para mi estudio o reunión en la biblioteca.

---

### Prioridad

Alta (Función principal del sistema)

### Estimación

5 puntos en Scrum

---

### Criterios de Aceptación

- El usuario puede seleccionar una sala de la lista de salas disponibles.
- Se debe permitir al usuario elegir la fecha y hora.
- El sistema debe validar la disponibilidad de la sala antes de confirmar la reserva.
- Se deben aplicar restricciones (ejemplo: duración máxima por sesión).
- La reserva debe guardarse correctamente en la base de datos con el estado "Reservada".

---

### Definition of Ready (DoR)

- [x] Se han definido las reglas y restricciones de reservas (duración máxima, cancelaciones).
- [x] Se cuenta con una base de datos estructurada que almacene las reservas.
- [x] Se ha definido la interfaz gráfica donde el usuario podrá realizar la reserva.
- [x] Se tiene identificado el endpoint en el backend que manejará la reserva.

---

### Definition of Done (DoD)

- [x] Implementación de la interfaz donde el usuario selecciona la sala, fecha, hora, sede, motivo.
- [x] Desarrollo del endpoint en backend para procesar y guardar la reserva en la base de datos.
- [x] Generación del aviso del inicio de la reserva (correo o notificación).
- [x] Pruebas realizadas para verificar el correcto funcionamiento del flujo de reserva.

---

### Detalles Técnicos Implementados

- **Backend (Spring Boot):**
  
  - Endpoint `/api/reservas` implementado para procesar nuevas reservas.
  - Validación de disponibilidad en tiempo real antes de guardar la reserva.
  - Aplicación de restricciones de duración máxima por sesión.
  - Registro de la reserva en base de datos con estado `"Reservada"`.

- **Base de Datos (MySQL - DOCKER):**
  
  - Tabla `reservas` definida con campos: `id`, `sede`, `motivo`, `fecha`, `hora`, `estado`.
  - Índices aplicados para mejorar la validación de disponibilidad y consultas por fecha.

- **Frontend (Ionic Angular):**
  
  - Interfaz gráfica desarrollada para selección de sala, sede, fecha, hora y motivo.
  - Integración con backend para enviar la solicitud de reserva.
  - Validaciones en frontend para evitar selección de horarios no permitidos.
  - Confirmación visual de reserva exitosa y botón para cancelarla.

---

### Estado Final

**Todos los requerimientos funcionales y técnicos de esta historia de usuario han sido implementados y verificados al 100 por ciento.**  
El sistema permite crear reservas de sala cumpliendo con validaciones, reglas de negocio y ofreciendo confirmación al usuario, asegurando una experiencia fluida y eficiente en la gestión de espacios en la biblioteca.
