# 01-HU - Entendimiento del negocio para la Gestión de Reserva de Salas en Biblioteca

## Proyecto: Proyecto Salas de Estudio UH

### Como desarrolladores del sistema de reservas de la biblioteca,
Quiero comprender el proceso actual de gestión de reservas,
Para que pueda documentar los requisitos, actores y flujos, asegurando que la solución se adapte a las necesidades reales de la biblioteca y sus usuarios.

### Objetivo
Obtener una visión clara del negocio, identificando actores clave, reglas y restricciones de las reservas.

### Criterios de aceptación

- **Registro y Autenticación:** Como usuario quiero registrarme e iniciar sesión en la aplicación para poder acceder de manera segura a las funciones de reserva y gestión de mis salas.
- **Realizar Reserva:** Como usuario quiero poder seleccionar una sala disponible y confirmar mi reserva para que la sala quede apartada para mi uso y nadie más pueda ocuparla en ese horario.
- **Editar o Cancelar Reserva:** Como usuario quiero modificar o cancelar una reserva que ya realicé para poder ajustar cambios de último minuto sin perder el control de mis reuniones.
- **Ver Mis Reservas:** Como usuario quiero acceder a un historial de mis reservas para poder revisar qué salas he reservado, en qué fechas y a qué horas.
- **Reportes de Uso:** Como administrador quiero obtener reportes del uso de las salas para poder analizar la demanda y optimizar la disponibilidad de los espacios.

## **Daily Meeting**
### **UH Study Spaces**
📅 **Fecha:** Lunes, 24 de febrero  
🕓 **Hora:** 4:00 – 4:20 PM (Zona horaria: America/Bogotá)  
🔗 **Enlace de la videollamada:** [Google Meet](https://meet.google.com/zbh-jayt-sgz)  
📞 **O marca el:** +1 609-831-2398 PIN: 796 632 415#  

---

## 📌 Documentación del Diagrama de Clases - Sistema de Reservas de Salas

### Introducción
El siguiente diagrama representa un sistema de gestión de reservas de salas en una institución, donde diferentes tipos de usuarios pueden administrar y realizar reservas. Se incluyen clases para modelar usuarios, bibliotecarios, administradores, estudiantes, reservas, salas e historial de reservas.

### Clases y Descripción

#### 1. **Usuario**
Representa a los usuarios generales del sistema.
- **Atributos:**
  - `id_usuario`: integer → Identificador único del usuario.
  - `primer_nombre`: string → Primer nombre del usuario.
  - `segundo_nombre`: string → Segundo nombre del usuario (opcional).
  - `primer_apellido`: string → Primer apellido del usuario.
  - `segundo_apellido`: string → Segundo apellido del usuario.
  - `correo`: string → Correo electrónico del usuario.
  - `contraseña`: string → Contraseña para el inicio de sesión.
- **Métodos:**
  - `iniciarSesion()`: Permite a un usuario autenticarse en el sistema.
  - `registrarse()`: Permite a un nuevo usuario registrarse en el sistema.
  - `inhabilitar()`: Permite desactivar la cuenta de un usuario. 
  - `editarPerfil()`: Permite modificar la información del usuario.

#### 2. **Bibliotecaria**
Representa al personal encargado de gestionar las reservas.
- **Atributos:**
  - `id_bibliotecaria`: integer → Identificador único de la bibliotecaria.
  - `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `correo`, `contraseña`, `estado` (boolean).
- **Métodos:**
  - `visualizarUsuarios()`: Permite ver la lista de usuarios registrados.
  - `visualizarReservas()`: Permite consultar las reservas realizadas.

#### 3. **Estudiante (Extiende de Usuario)**
Representa a los estudiantes que pueden reservar salas.
- **Atributos:**
  - `id_estudiante`: integer → Identificador único del estudiante.
  - `codigo_estudiantil`: integer → Código único del estudiante en la institución.
  - `estado`: boolean → Indica si la cuenta está activa o no.
- **Métodos:**
  - `reservarSala()`: Permite hacer una reserva de sala.
  - `cancelarReserva()`: Permite cancelar una reserva existente.
  - `visualizarHistorial()`: Permite ver el historial de reservas realizadas.

#### 4. **Administrador**
Usuario con privilegios para gestionar otros usuarios y modificar datos del sistema.
- **Atributos:**
  - `id_administrador`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `correo`, `contraseña`, `estado` (boolean).
- **Métodos:**
  - `crearUsuario()`, `eliminarUsuario()`, `editarUsuario()`, `visualizarUsuarios()`.

#### 5. **Reserva**
Representa las reservas de salas realizadas por los estudiantes.
- **Atributos:**
  - `id_reserva`, `sede`, `motivo`, `fecha`, `hora_inicio`, `hora_final`, `estado` (boolean).
- **Métodos:**
  - `confirmarReserva()`: Permite validar y confirmar la reserva realizada.

#### 6. **Salas**
Representa las salas disponibles para reserva.
- **Atributos:**
  - `id_sala`, `sala`, `estado` (boolean).
- **Métodos:**
  - `registrarSala()`: Permite añadir una nueva sala al sistema.

#### 7. **Historial de Reservas**
Registra todas las reservas realizadas en el sistema.
- **Atributos:**
  - `id_historial`, `usuario`, `sede`, `motivo`, `fecha`, `sala`, `hora_inicio`, `hora_final`.
- **Métodos:**
  - `obtenerRegistro()`: Permite obtener los registros del historial de reservas.

### Relaciones entre Clases
- **Herencia:** Estudiante hereda de Usuario.
- **Asociaciones:**
  - `Usuario` está asociado con `Reserva`.
  - `Reserva` está asociada con `Salas`.
  - `Historial de reservas` registra reservas por usuario.

---

## 📌 Análisis del Modelo de Base de Datos

El modelo contiene varias entidades relacionadas entre sí, organizadas en un esquema `public`.

### 🗂 Tablas Principales

#### ⿡ Tabla `usuario`
Almacena la información de los usuarios.
- `_id_usuario` (PK, serial).
- `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido` (varchar(50)).
- `correo`, `contraseña` (varchar).
- `estado` (boolean).

#### ⿢ Tabla `administrador`
Subconjunto de usuario (1:1).
- `_id_administrador` (PK, serial).
- `_id_usuario` (FK).

#### ⿣ Tabla `bibliotecaria`
- `_id_bibliotecaria` (PK, serial).
- `_id_usuario` (FK).

#### ⿤ Tabla `estudiante`
- `_id_estudiante` (PK, serial).
- `_id_usuario` (FK).
- `codigo_estudiante` (varchar).

#### ⿥ Tabla `salas`
- `_id_sala` (PK, serial).
- `n_sala` (integer).
- `estado` (boolean).

#### ⿦ Tabla `reserva`
- `_id_reserva` (PK, serial).
- `_id_estudiante` (FK).
- `sede`, `motivo` (varchar).
- `fecha`, `hora_inicio`, `hora_final` (timestamp).
- `_id_sala` (FK).
- `estado` (boolean).

#### ⿧ Tabla `historial_reservas`
- `_id_historial` (PK, serial).
- `_id_usuario` (FK).
- `sede`, `motivo` (varchar).
- `fecha`, `hora_inicio`, `hora_final` (timestamp).
- `_id_sala` (FK).

### 🔗 Relaciones Principales
- `usuario` → `administrador`, `bibliotecaria`, `estudiante` (1:1).
- `estudiante` → `reserva` (1:N).
- `salas` → `reserva`, `historial_reservas` (1:N).

# 📘 Documentación de Diagramas Secuenciales

## **1. Diagrama Secuencial - Administrador**
El administrador tiene el control total sobre la gestión de usuarios y salas. Su flujo de interacción con el sistema es el siguiente:

1. **Inicio de sesión:**  
   - Ingresa sus credenciales.  
   - El sistema verifica la autenticidad del usuario.  

2. **Gestión de usuarios:**  
   - Puede agregar o eliminar usuarios del sistema.  
   - El sistema actualiza la base de datos con la información nueva.  

3. **Gestión de salas:**  
   - Puede cancelar, editar o agregar reservas en las salas disponibles.  
   - El sistema actualiza la disponibilidad en tiempo real.  

4. **Cierre de sesión:**  
   - Finaliza su sesión en el sistema.  

---

## **2. Diagrama Secuencial - Bibliotecaria**
La bibliotecaria puede visualizar y gestionar información sobre las reservas de salas. Su flujo de interacción es el siguiente:

1. **Inicio de sesión:**  
   - Ingresa sus credenciales.  
   - El sistema valida la autenticidad de los datos y confirma el acceso.  

2. **Visualización de reservas:**  
   - Consulta la lista de reservas activas.  
   - El sistema le muestra las reservas con información de sala, usuario y horario.  

3. **Visualización de usuarios:**  
   - Puede ver la lista de usuarios registrados en el sistema.  

4. **Notificaciones:**  
   - Recibe alertas sobre el estado de las salas (*ocupada, reservada, libre*).  

5. **Cierre de sesión:**  
   - Finaliza su sesión en el sistema.  

---

## **3. Diagrama Secuencial - Usuario**
El usuario tiene la posibilidad de registrarse, iniciar sesión y hacer reservas. Su flujo de interacción es el siguiente:

1. **Registro/Iniciar sesión:**  
   - Proporciona su información de usuario.  
   - El sistema valida los datos y confirma su sesión.  

2. **Reserva de sala:**  
   - Elige la opción *"Reservar sala"*.  
   - Selecciona la sede donde desea reservar.  
   - Confirma la sede seleccionada.  
   - Elige el horario disponible.  
   - Valida la disponibilidad de la sala en el sistema.  
   - Proporciona una razón para la reserva.  
   - El sistema guarda la información y confirma la reserva.  

3. **Cierre de sesión:**  
   - Finaliza su sesión en el sistema.  

---

## **Conclusión**
Cada rol tiene acciones específicas en el sistema, garantizando que la gestión de reservas sea eficiente y organizada.  
- 📌 **El administrador** mantiene el control de usuarios y salas.  
- 📌 **La bibliotecaria** supervisa las reservas.  
- 📌 **Los usuarios** pueden hacer reservas siguiendo un proceso estructurado.

---

# Documentación del Diagrama de Casos de Uso - Sistema de Reservas de Salas

## 1. Actores del Sistema

- **Administrador**: Tiene permisos para gestionar la administración, usuarios y bibliotecas.
- **Estudiante**: Puede iniciar sesión, registrarse, hacer reservas y ver su historial.
- **Bibliotecaria**: Puede visualizar reservas e historial de reservas.
- **Base de datos**: Actúa como un sistema de almacenamiento de la información.

## 2. Casos de Uso y Descripción

### 2.1. Iniciar Sesión
**Actores**: Administrador, Estudiante, Bibliotecaria.  
**Descripción**: Permite a los usuarios autenticarse en el sistema.  
**Relación**:  
- _Extiende_ → Actualizar contraseña (si el usuario desea cambiar su clave).

### 2.2. Registrarse
**Actores**: Administrador, Estudiante.  
**Descripción**: Permite a los usuarios crear una cuenta en el sistema.  
**Relación**:  
- _Incluye_ → Iniciar Sesión (el usuario debe iniciar sesión después de registrarse).

### 2.3. Reserva
**Actores**: Estudiante.  
**Descripción**: Permite a los estudiantes hacer una reserva de sala.  
**Relación**:  
- _Extiende_ → Visualizar historial (si el usuario quiere consultar reservas pasadas).

### 2.4. Ver perfil
**Actores**: Administrador, Estudiante, Bibliotecaria.  
**Descripción**: Permite a los usuarios visualizar y editar su información personal.

### 2.5. Visualizar historial
**Actores**: Estudiante.  
**Descripción**: Permite a los estudiantes revisar su historial de reservas.  
**Relación**:  
- _Extiende_ → Reserva (se accede después de hacer una reserva).

### 2.6. Visualizar reservas
**Actores**: Bibliotecaria.  
**Descripción**: Permite a la bibliotecaria revisar las reservas de salas registradas.

### 2.7. Gestionar administración
**Actores**: Administrador.  
**Descripción**: Permite gestionar la configuración general del sistema.

### 2.8. Gestionar usuarios
**Actores**: Administrador.  
**Descripción**: Permite al administrador gestionar los usuarios del sistema.

### 2.9. Gestionar biblioteca
**Actores**: Administrador.  
**Descripción**: Permite al administrador gestionar los recursos de la biblioteca.

## 3. Relaciones en el Diagrama

- **"Incluye"** (`<<include>>`): Representa la relación donde un caso de uso siempre ejecuta otro.
- **"Extiende"** (`<<extend>>`): Representa la relación donde un caso de uso opcionalmente puede ejecutar otro.

## 4. Conexión con la Base de Datos

Todos los casos de uso relevantes almacenan información en la Base de Datos, como:
- Registro de usuarios.
- Registro de reservas.
- Historial de reservas.
- Información de las bibliotecas.