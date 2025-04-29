# Justificación de Componentes de la App Reserva UH

---

## Componente: Visualización Entrada

### ¿Qué es este componente?
Es la primera pantalla que el usuario ve al abrir la app. Cumple la función de bienvenida, presentación y entrada principal al sistema, permitiendo al usuario decidir si desea iniciar sesión o registrarse.

### Elementos visuales y su justificación:

- **Logo institucional**
  Refuerza la identidad de la app y su relación con la institución (Reserva UH).  
  Da confianza y profesionalismo desde el primer contacto visual.

- **Colores institucionales (verde y blanco)**  
  Ayudan a mantener coherencia visual en toda la aplicación.  
  El verde transmite tranquilidad, armonía y está relacionado con educación y bienestar.

- **Tipografía clara y moderna**  
  Facilita la lectura y transmite un diseño limpio y profesional.  
  Suele estar alineada con la identidad gráfica de la institución.

- **Texto de bienvenida**  
  Crea una conexión emocional con el usuario.  
  Usa emojis académicos (🎓📚) que refuerzan el contexto educativo de la app.

- **Botones: "Iniciar Sesión" y "Registrarse"**
  Permiten al usuario elegir rápidamente cómo continuar.
  Están bien posicionados para facilitar la navegación inicial.
  Tienen estilos destacados para ser fácilmente identificables como acciones principales.

- **Elementos decorativos (ondas verdes superior e inferior)**  
  Dan un aspecto moderno y dinámico al diseño.  
  Rompen la rigidez de un fondo blanco plano, haciéndolo más amigable y atractivo.

### ¿Por qué es un componente necesario?
- Mejora la experiencia de usuario (UX) desde el primer momento.
- Guía al usuario de forma clara hacia sus opciones de acción (entrar o registrarse).
- Refuerza la marca visual y propósito de la aplicación.
- Prepara el contexto antes de entrar a pantallas funcionales como el login o el dashboard.
- Como componente separado, facilita el mantenimiento, diseño modular y reutilización de estilos en otras vistas.

---

## Componente: Inicio de sesión

### ¿Qué es este componente?
Es la pantalla donde los usuarios registrados acceden al sistema. Permite ingresar sus credenciales para autenticar su identidad y acceder a las funcionalidades de la app Reserva UH.

### Elementos visuales y su justificación:

- **Logo del usuario (ícono central redondo)**  
  Refuerza visualmente que esta es una sección de acceso personal.  
  La figura humana en un marco circular transmite enfoque en el usuario y acceso seguro.

- **Colores institucionales (verde, blanco y negro)**  
  El fondo blanco mantiene limpieza visual.  
  Las ondas verdes arriba y abajo agregan dinamismo, coherencia con la pantalla anterior y refuerzan identidad visual.  
  Botón negro da contraste y protagonismo a la acción principal.

- **Tipografía clara y centrada**  
  “Inicio de sesión” centrado, con fuente sobria y legible.  
  Aporta jerarquía visual e indica el propósito de esta vista sin distracciones.

- **Etiquetas (labels) para formularios**  
  “Correo” y “Contraseña” están claramente identificadas.  
  Ayudan a los usuarios a comprender qué información deben ingresar.

- **Campos de texto (forms)**  
  Espacios editables con diseño limpio y espacioso.  
  Promueven una experiencia accesible, fácil de usar incluso en pantallas pequeñas.

- **Botón “Iniciar Sesión”**  
  Diseño destacado (fondo oscuro) para guiar visualmente la acción esperada.  
  Fácil de presionar en dispositivos móviles.

- **Botón de regreso (flecha verde superior)**  
  Permite volver a la pantalla anterior (visualización de entrada).  
  Mejora la navegación y da control al usuario.

### ¿Por qué es un componente necesario?
- Es el punto de entrada para usuarios registrados.
- Asegura la autenticación segura y clara.
- Mantiene una experiencia visual coherente con la pantalla de bienvenida.
- Su diseño está enfocado en la usabilidad móvil.
- Tenerlo como componente separado en Vue dentro de Ionic permite modularidad, reutilización de estilos, mantenimiento y separación de responsabilidades.

---

## Componente: Registro / Usuario

### ¿Qué es este componente?
Es la pantalla donde los usuarios nuevos pueden registrarse para obtener acceso a la app Reserva UH. Recoge los datos personales necesarios para crear una cuenta segura y verificada.

### Elementos visuales y su justificación:

- **Colores institucionales (verde, blanco, negro)**
  Fondo blanco para mantener limpieza y claridad.
  Ondas verdes arriba y abajo mantienen la línea gráfica uniforme.
  Botón negro genera contraste y marca la acción principal.

- **Tipografía centrada y clara**
  El título “Registro” está centrado, lo que da jerarquía y foco inmediato.
  Fuente sencilla y profesional que facilita la lectura.

- **Etiquetas (labels) de formulario**
  Cada campo tiene una etiqueta descriptiva clara: nombres, apellidos, correo, etc.
  Las etiquetas con asterisco (*) indican campos obligatorios.

- **Campos de texto (Forms)**
  Diseñados para ingresar datos como nombres, correo institucional, código estudiantil y contraseñas.
  Disposición vertical para facilitar la navegación.
  Agrupación lógica.

- **Botón “Registrarse”**
  Posicionado al final del formulario.  
  Contraste fuerte, texto claro y centrado.

- **Botón de retroceso**  
  Ícono de flecha para volver a la pantalla anterior.  
  Aumenta el control del usuario sobre la navegación.

### ¿Por qué es un componente necesario?
- Permite el acceso inicial al sistema para nuevos usuarios.
- Garantiza que se recopile toda la información relevante de forma estructurada.
- Mejora la experiencia del usuario.
- Favorece la accesibilidad móvil.
- Modularidad permite validaciones específicas y pruebas aisladas.

---

## Componente: Activar cuenta

### ¿Qué es este componente?
Pantalla donde el usuario ingresa el código de verificación enviado a su correo electrónico para confirmar su identidad y activar su cuenta dentro del sistema.

### Elementos visuales y su justificación:

- **Colores institucionales**  
  Fondo blanco brinda claridad.  
  Formas verdes arriba y abajo mantienen coherencia visual.  
  Verde en los cuadros del código refuerza identidad.

- **Tipografía limpia y centrada**  
  Título destacado y legible.  
  Texto descriptivo informa al usuario del paso actual.

- **Mensaje de ayuda**  
  Informa que se envió un código al correo.  
  Mejora la confianza del usuario.

- **Espacios para ingresar código de activación**  
  6 cuadros separados, visuales y fáciles de usar.

- **Botones "Activar" y "Reenviar Código"**  
  Diseño visible y diferenciado.  
  Facilitan interacción y recuperación de código.

- **Botón de regreso**  
  Ícono en la parte superior para volver.  
  Mejora la navegación.

### ¿Por qué es un componente necesario?
- Paso clave de seguridad para confirmar identidad.
- Verifica que el correo sea correcto y accesible.
- Previene registros fraudulentos.
- Modularidad permite validación e integración con servicios externos.

---

## Componente: Página principal / Usuario

### ¿Qué representa esta vista?
Pantalla inicial tras iniciar sesión. Muestra información sobre el sistema de reservas y acceso a la acción de reservar sala de estudio.

### Elementos visuales y su función:

- **Colores (verde, blanco y negro)**  
  Verde institucional, fondo blanco y botón negro contrastante.

- **Tipografía**  
  - Título: “Bienvenido(a) a reservas UH”.  
  - Subtítulo: “Reservar en Biblioteca”.  
  - Texto informativo: ubicación, condiciones y uso.

- **Botón "Reservar"**  
  Acción clara y destacada.

- **Iconos**  
  - Perfil (arriba a la derecha): acceso a menú/usuario.  
  - Flecha (arriba a la izquierda): navegación hacia atrás.

- **Labels y puntos destacados**  
  Lista de características de las salas con bullets visibles.

### ¿Por qué este componente es fundamental?
- Es el centro operativo para realizar reservas.
- Informa, guía y proporciona contexto.
- Experiencia optimizada para móviles.
- Accesible, con acciones claras y jerarquizadas.