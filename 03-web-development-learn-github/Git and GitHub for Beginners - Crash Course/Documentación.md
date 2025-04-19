# 🧰 Git y GitHub para Principiantes – Curso Intensivo  
[Ver video en YouTube](https://www.youtube.com/watch?v=RGOj5yH7evk)

---

## 🧭 Introducción

- Presentación de Git y GitHub como herramientas esenciales para el control de versiones y colaboración.
- Git: sistema de control de versiones distribuido.
- GitHub: plataforma para alojar repositorios Git y colaborar con otros.

---

## 📦 Instalación y Configuración

- Instalación de Git desde [git-scm.com](https://git-scm.com).
- Configuración inicial:
  - `git config --global user.name "Tu Nombre"`
  - `git config --global user.email "tuemail@example.com`
- Ver configuración: `git config --list`

### 📁 Comenzar un Repositorio

- Crear carpeta del proyecto y navegar a ella.
- Inicializar repositorio: `git init`
- Ver estado de archivos: `git status`
- Añadir archivo(s) al área de staging: `git add archivo.txt` o `git add .`
- Hacer commit: `git commit -m "Mensaje del commit"`

### 📜 Historial y Cambios

- Ver historial de commits: `git log` o `git log --oneline`
- Ver diferencias: `git diff`

### 🔁 Repositorios Remotos y GitHub

- Crear repositorio en GitHub (sin README).
- Vincular repositorio remoto: `git remote add origin https://github.com/usuario/repositorio.git`
- Subir contenido: `git push -u origin master`

### 🔄 Sincronización con Remoto

- Descargar y fusionar cambios: `git pull`
- Descargar sin fusionar: `git fetch`
- Comparar cambios: `git diff origin/master`

### ⚠️ Resolución de Conflictos

Git marca conflictos durante merge o pull.

- Se deben resolver manualmente en los archivos.
- Luego hacer: `git add archivo_resuelto` y `git commit`

### 🌿 Ramas en Git

- Ver ramas: `git branch`
- Crear y cambiar de rama: `git checkout -b nueva-rama`
- Cambiar de rama: `git checkout master`
- Fusionar ramas: `git merge nueva-rama`

### 🙈 Ignorar Archivos

- Crear archivo `.gitignore`.
- Ejemplos:
  - `node_modules/`
  - `.env`
  - `dist/`

### 🖥️ Herramientas Gráficas

- **GitHub Desktop**: interfaz gráfica oficial para Git.
- **VS Code**: integración con Git en el editor.

**Ventajas**:
- Visualización clara de cambios y ramas.
- Interfaz amigable para commits, merge, push, pull, etc.

### 🌍 Introducción a GitHub y Repositorios Remotos

- GitHub como una plataforma para alojar repositorios Git de manera remota.
- La diferencia entre Git (local) y GitHub (remoto).
- La importancia de usar un repositorio remoto para colaborar con otros y almacenar tu código de manera segura.

### 🖇️ Creación de un Repositorio en GitHub

- Proceso de crear un repositorio en GitHub.
- Ingresar al sitio web de GitHub y crear un nuevo repositorio (sin README).
- Iniciar el repositorio en la terminal con `git init`.
- Enlazar el repositorio local con el remoto en GitHub: `git remote add origin https://github.com/usuario/repositorio.git`
- Hacer un primer `git push` para subir el contenido al repositorio remoto: `git push -u origin master`

### 🔄 Sincronización de Cambios Remotos

- Descargar cambios desde el repositorio remoto: `git pull`
- Hacer un `git fetch` para obtener los cambios sin fusionarlos automáticamente.
- Ver diferencias entre la versión local y remota: `git diff origin/master`

### ⚙️ Fusión de Ramas y Resolución de Conflictos

- Crear ramas para probar nuevas funcionalidades sin afectar el código principal.
- Hacer un `git merge` para fusionar ramas y resolver cualquier conflicto que pueda surgir: `git merge nueva-rama`
- Resolver conflictos manualmente y hacer un `git commit` después de resolverlos: `git add archivo_resuelto` y `git commit`

### 🌱 Usar Ramas para Experimentar

- Usar ramas para trabajar en nuevas características o cambios sin afectar el código principal.
- Crear nuevas ramas con el comando: `git checkout -b nueva-rama`
- Cambiar entre ramas con `git checkout`: `git checkout master`

### 🔄 Otras Operaciones Comunes

- Ver el historial de commits con: `git log`
- Ver los archivos modificados con: `git status`
- Ver diferencias entre el código actual y el commit anterior con: `git diff`

### 📦 Ignorar Archivos con `.gitignore`

- Crear un archivo `.gitignore` para evitar subir archivos innecesarios al repositorio.
- Ejemplo de contenido del archivo `.gitignore`:
  - `node_modules/`
  - `.env`
  - `dist/`

### 🎨 Uso de Herramientas Gráficas

- **GitHub Desktop** y **Visual Studio Code** para trabajar con Git sin necesidad de usar comandos.

**Ventajas de herramientas gráficas**:
- Visualización clara de cambios, ramas y commits.
- Interfaz amigable para realizar tareas comunes de Git.

### 📚 Recursos Adicionales

- Documentación oficial de Git: [https://git-scm.com/doc](https://git-scm.com/doc)
- Curso gratuito de Git y GitHub por Traversy Media.

### 💡 Consejos y Recursos Finales

- Usar Git para mantener un historial de cambios en el código.
- Utilizar ramas para experimentar y mantener el código limpio.
- Colaborar en proyectos de GitHub y contribuir a otros repositorios.
