## 07-HU - Gestión de Reserva de salas de Biblioteca - Gestión de ESTUDIANTE, Gestión de ADMINISTRADOR, Gestión de EMPLEADO y Gestión de reservas

### Historia de Usuario

**Como** administrador del sistema de reservas de salas de biblioteca,  
**Quise** gestionar el registro, edición y visualización de usuarios con roles de estudiante, bibliotecaria y administrador, así como el control y visualización de reservas,  
**Para que** el sistema tuviera un control estructurado de los actores involucrados y permitiera un manejo seguro y ordenado de las reservas.

---

### Prioridad

Alta

---

### Estimación

8 puntos en Scrum

---

### Criterios de Aceptación (Cumplidos)

- [x] Se registran nuevos estudiantes, empleados y administradores mediante formularios con validaciones.
- [x] El sistema permite editar y eliminar datos de usuarios ya registrados.
- [x] La información de cada tipo de usuario se muestra de forma organizada y clara.
- [x] Las reservas realizadas por los estudiantes se visualizan en detalle, mostrando nombre, fecha y sala.
- [x] Los roles tienen acceso diferenciado según su nivel (administrador, empleado, estudiante).
- [x] Se pueden confirmar, cancelar o finalizar reservas desde el panel correspondiente.
- [x] El **ADMINISTRADOR** puede asignar roles al crear nuevos usuarios.
- [x] El **EMPLEADO** puede ver la lista de reservas activas y los estudiantes relacionados con el uso de una sala.

---

### Definition of Ready (DoR)

- [x] Se contó con la estructura de datos necesaria para registrar y consultar usuarios y reservas.
- [x] Se definieron los campos requeridos en cada formulario de registro.
- [x] Se diseñaron las pantallas base para cada tipo de gestión.

---

### Definition of Done (DoD)

- [x] Los formularios de registro funcionan correctamente para los tres roles.
- [x] Se implementaron operaciones CRUD (crear, leer, actualizar, eliminar) para estudiantes, empleados y administradores.
- [x] Las vistas de cada actor fueron validadas en cuanto a acceso y funciones disponibles.
- [x] Todas las funcionalidades fueron probadas y cumplen con el diseño de interfaz definido.
- [x] El **EMPLEADO** puede ver información detallada de la reserva y del estudiante.
- [x] El **EMPLEADO** puede visualizar el tiempo que duró el estudiante en la sala reservada.

---

### Estado Final

**Historia de usuario completada en su totalidad.**  
El sistema de gestión de usuarios y reservas ha sido implementado con éxito. Las funcionalidades permiten el control completo de registros y acciones por parte de los distintos roles (administrador, empleado y estudiante), garantizando una operación segura, clara y organizada dentro del sistema de reservas de salas de biblioteca.
