# 📘 Documento Técnico de Diseño de Interfaz (UI/UX)

## 1. Introducción

Este documento describe la estructura, diseño visual y funcionalidad de la interfaz de usuario (UI) de una aplicación de reservas de recursos en una institución. Se especifican los colores, tipografía, iconografía y descripción de cada pantalla.

## 2. Paleta de Colores

La aplicación usa una paleta con los siguientes colores:

- **Primario:** Verde (#008000)
- **Fondo Claro:** Blanco (#FFFFFF)
- **Texto Oscuro:** Negro (#000000)

## 3. Tipografía

Se utiliza una fuente clara y legible, posiblemente **Poppins** o **Inter**, con los siguientes pesos tipográficos:

- **Bold (700):** Para títulos principales y botones de acción.
- **Medium (500):** Para subtítulos o información relevante.
- **Regular (400):** Para descripciones y textos informativos.

## 4. Iconografía

Se usan iconos simples y representativos. Algunos ejemplos:

- 🔑 Llave → Activación de cuenta.
- 🔍 Lupa → Búsqueda o visualización de reservas.
- 📖 Agenda → Reservaciones.
- 📋 Documento → Información de usuario.

## 5. Descripción de Pantallas

### 5.1. Página Principal

- Muestra el nombre de la aplicación y opciones de navegación.
- Opciones principales: **"Gestionar usuarios"**, **"Reservar sala"** y **"Visualizar reservas"**.

### 5.2. Registro de Usuario

- Formulario con campos como nombre, correo y contraseña.
- Botón **"Registrar"**.

### 5.3. Activación de Cuenta

- Introducir código de activación enviado por correo.
- Botón **"Activar"**.

### 5.4. Inicio de Sesión

- Campos para ingresar correo y contraseña.
- Botón **"Iniciar sesión"**.

### 5.5. Gestor de Usuarios

- Lista de usuarios registrados con estado.
- Opción para **"Agregar usuario"**.

### 5.6. Agregar Usuario

- Formulario con campos como nombre, correo, rol y contraseña.
- Botón **"Registrar"**.

### 5.7. Reservar Sala

- Formulario con opciones como **Fecha**, **Hora** y **Sala**.
- Botón **"Reservar"**.

### 5.8. Confirmación de Reserva

- Muestra detalles de la reserva.
- Confirmación con **check verde**.

### 5.9. Visualizar Reservas

- Lista de reservas activas con detalles como **fecha**, **hora** y **sala**.

## 6. Conclusión

El diseño de la aplicación mantiene una estructura clara y accesible, utilizando una combinación de colores sobrios y tipografía legible. Cada pantalla ha sido diseñada para mejorar la navegación y optimizar la experiencia del usuario en la gestión de reservas.

---

## 🎯 Criterios de Aceptación

- El usuario pueda reservar una sala.
- El usuario puede elegir la sede de la sala.
- El usuario puede elegir el horario de la sala (fecha y hora).
- El usuario tiene que dar razón de la reserva.
- La bibliotecaria puede visualizar la información de las salas (ocupándose, reservada y libre).
- La bibliotecaria será notificada de cualquier novedad de las salas.
- El administrador puede gestionar los usuarios y las bibliotecarias (eliminar o agregar).
- El administrador puede gestionar las salas (cancelar reserva, editar reserva o agregar reserva).

---

## 📌 Prototipo en Figma

🔗 [Ver diseño en Figma](https://www.figma.com/design/9YQWZcxBAPtjTw3zof232V/App-reservas--Programacion-movil?node-id=0-1&t=S1K65E8cmqIBf78b-1)