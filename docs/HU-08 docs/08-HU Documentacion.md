# 08-HU - Gestión de Reserva de salas de Biblioteca - Gestión de perfil de usuario y cierre de sesión

## Historia de Usuario

**Como** usuario del sistema con un rol asignado (administrador, estudiante o empleado),  
**Quiero** acceder y visualizar mi perfil con información relevante y contar con la opción de cerrar sesión,  
**Para que** pueda gestionar mi cuenta de forma segura y adecuada a mi rol dentro del sistema.

---

## Prioridad

**Alta** (impacta directamente en la seguridad y experiencia del usuario)

---

## Estimación

**3 puntos** en Scrum

---

## Criterios de Aceptación

- Se visualiza correctamente la información del perfil según el rol del usuario (ADMINISTRADOR, ESTUDIANTE o EMPLEADO).  
- Existe una opción clara y funcional para cerrar sesión.  
- El sistema redirige al usuario a la pantalla de interfaz principal.  
- Se valida que el contenido del perfil sea coherente con el tipo de usuario autenticado.  
- El ESTUDIANTE puede ver su historial de reservas.  

---

## Definition of Ready (DoR)

- Se han definido claramente los diferentes roles del sistema (ADMINISTRADOR, ESTUDIANTE, EMPLEADO).  
- Se cuenta con el diseño de interfaz del perfil de usuario.  
- Se tiene acceso al modelo de datos del usuario.  
- Se conoce el flujo de autenticación y cierre de sesión en el sistema actual.  

---

## Definition of Done (DoD)

- Se ha implementado y probado la funcionalidad de visualización de perfil según rol.  
- Se ha implementado y validado el botón de cierre de sesión.  

---

## Detalles Técnicos Implementados

### Frontend (Ionic Angular)

- Interfaz responsive que muestra dinámicamente los datos del perfil según el rol mediante `*ngIf`.
- Sección adicional para mostrar historial de reservas del estudiante.
- Botón visible de "Cerrar sesión" que limpia `localStorage` y redirige a la pantalla principal.

---

## Estado Final

Todos los requerimientos funcionales y técnicos de esta historia de usuario han sido **implementados y verificados al 100%**.  
El sistema permite la correcta visualización del perfil según el rol, la validación de la información mostrada, y el cierre de sesión con redirección, ofreciendo una experiencia coherente, segura y personalizada.
