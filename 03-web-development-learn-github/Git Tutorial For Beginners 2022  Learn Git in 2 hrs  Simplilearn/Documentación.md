### Resumen del Video

**Introducción y Configuración Inicial de Git**
   - **Instalación de Git**: Se instala Git en el sistema operativo.
   - **Configuración de Git**: Se configura Git con el nombre y correo electrónico del usuario utilizando los comandos:
     ```bash
     git config --global user.name "Tu Nombre"
     git config --global user.email "tuemail@example.com"
     ```

**Creación de un Repositorio Git**
   - Para inicializar un repositorio vacío, se usa el comando:
     ```bash
     git init
     ```
   - Para agregar archivos al área de preparación, se utiliza:
     ```bash
     git add <archivo>
     ```
   - Para guardar los cambios en el repositorio, se hace un commit con el siguiente comando:
     ```bash
     git commit -m "Mensaje del commit"
     ```

**Verificación del Estado del Repositorio**
   - **`git status`** muestra los archivos modificados, los archivos en el área de preparación y los archivos sin seguimiento.
   - **`git diff`** muestra las diferencias entre los archivos modificados y la última versión confirmada.

**Trabajo con Repositorios Remotos**
   - **Clonar un repositorio remoto**: Para obtener una copia de un repositorio remoto, se utiliza el comando:
     ```bash
     git clone <url-del-repositorio>
     ```
   - **Vincular un repositorio local a uno remoto**: Si ya tienes un repositorio local, lo puedes conectar a un repositorio remoto con:
     ```bash
     git remote add origin <url-del-repositorio>
     ```

### Comandos Importantes
- **`git init`**: Inicializa un nuevo repositorio vacío.
- **`git add <archivo>`**: Agrega archivos al área de preparación.
- **`git commit -m "Mensaje"`**: Realiza un commit con un mensaje descriptivo.
- **`git status`**: Muestra el estado del repositorio, incluyendo archivos modificados y sin seguimiento.
- **`git diff`**: Muestra las diferencias entre los archivos modificados y el último commit.
- **`git clone <url>`**: Clona un repositorio remoto.
- **`git remote add origin <url>`**: Conecta un repositorio local a un repositorio remoto.

**Gestionando Ramas en Git**
   - **Crear una nueva rama**: Para crear una nueva rama en Git, se utiliza el siguiente comando:
     ```bash
     git branch <nombre-de-la-rama>
     ```
   - **Cambiar a una rama**: Para cambiarte a la rama recién creada, se usa:
     ```bash
     git checkout <nombre-de-la-rama>
     ```
   - **Crear y cambiar a una nueva rama en un solo paso**: Usando:
     ```bash
     git checkout -b <nombre-de-la-rama>
     ```

**Fusión de Ramas**
   - **Fusionar ramas**: Una vez que se han hecho cambios en una rama, puedes fusionarla con la rama principal usando:
     ```bash
     git merge <nombre-de-la-rama>
     ```
   - **Resolver conflictos de fusión**: Si hay cambios incompatibles entre las ramas, Git no puede fusionarlas automáticamente. El video muestra cómo editar los archivos conflictivos, resolver el conflicto y hacer un nuevo commit.

**Eliminar Ramas**
   - **Eliminar una rama localmente**: Después de fusionar una rama y asegurarse de que no se necesita más, puedes eliminarla localmente con:
     ```bash
     git branch -d <nombre-de-la-rama>
     ```
   - **Eliminar una rama remota**: Si la rama ya ha sido empujada al repositorio remoto, se puede eliminar de forma remota con:
     ```bash
     git push origin --delete <nombre-de-la-rama>
     ```

**Trabajo con Repositorios Remotos**
   - **Ver ramas remotas**: Para ver las ramas disponibles en un repositorio remoto, se usa:
     ```bash
     git branch -r
     ```
   - **Actualizar ramas remotas**: Se explica cómo obtener las actualizaciones del repositorio remoto con:
     ```bash
     git fetch
     ```
   - **Pujar cambios a un repositorio remoto**: Para enviar los cambios locales a un repositorio remoto, se usa:
     ```bash
     git push origin <nombre-de-la-rama>
     ```

### Comandos Importantes
- **`git branch <nombre-de-la-rama>`**: Crea una nueva rama.
- **`git checkout <nombre-de-la-rama>`**: Cambia a la rama especificada.
- **`git checkout -b <nombre-de-la-rama>`**: Crea y cambia a una nueva rama.
- **`git merge <nombre-de-la-rama>`**: Fusiona una rama con la rama actual.
- **`git branch -d <nombre-de-la-rama>`**: Elimina una rama localmente.
- **`git push origin --delete <nombre-de-la-rama>`**: Elimina una rama remota.
- **`git branch -r`**: Muestra las ramas remotas.
- **`git fetch`**: Obtiene cambios del repositorio remoto.
- **`git push origin <nombre-de-la-rama>`**: Envía cambios a un repositorio remoto.

**Uso de Git Rebase**
   - **¿Qué es el rebase?**: El rebase es una forma de integrar cambios de una rama a otra, similar a `git merge`, pero reescribiendo el historial de la rama. Esto permite una historia más limpia y lineal.
   - **Comando de rebase**: Para aplicar los cambios de una rama sobre otra, se usa:
     ```bash
     git rebase <rama>
     ```
   - **Rebase interactivo**: Se puede realizar un rebase interactivo para modificar commits durante el proceso de rebase, con el siguiente comando:
     ```bash
     git rebase -i <rama>
     ```
   - **Resolver conflictos durante el rebase**: Si ocurren conflictos, Git pedirá resolverlos manualmente antes de continuar el rebase. Para continuar después de resolver los conflictos, se usa:
     ```bash
     git rebase --continue
     ```

**Revertir Cambios con Git**
   - **Deshacer cambios en el área de preparación**: Si has agregado cambios al área de preparación y quieres deshacerlo, puedes usar:
     ```bash
     git reset <archivo>
     ```
   - **Deshacer cambios no confirmados**: Si deseas revertir los cambios no confirmados en un archivo, usas:
     ```bash
     git checkout -- <archivo>
     ```
   - **Revertir un commit**: Para revertir un commit ya realizado y crear un nuevo commit que revierta los cambios, se usa:
     ```bash
     git revert <commit-hash>
     ```

**Trabajo con Etiquetas (Tags)**
   - **Crear una etiqueta**: Las etiquetas son útiles para marcar puntos importantes en la historia del proyecto, como versiones. Para crear una etiqueta, se usa:
     ```bash
     git tag <nombre-etiqueta>
     ```
   - **Etiquetas con mensajes**: Para agregar un mensaje a una etiqueta, se usa el siguiente comando:
     ```bash
     git tag -a <nombre-etiqueta> -m "Mensaje"
     ```
   - **Ver las etiquetas**: Para listar las etiquetas en el repositorio, se utiliza:
     ```bash
     git tag
     ```
   - **Eliminar una etiqueta**: Si necesitas eliminar una etiqueta local, usas:
     ```bash
     git tag -d <nombre-etiqueta>
     ```

**Sincronización de Repositorios Remotos**
   - **Obtener cambios remotos**: Para asegurarte de que tu repositorio local tiene todos los cambios del repositorio remoto, utilizas:
     ```bash
     git fetch origin
     ```
   - **Pujar etiquetas al repositorio remoto**: Para enviar una etiqueta al repositorio remoto, usas:
     ```bash
     git push origin <nombre-etiqueta>
     ```
   - **Eliminar una etiqueta remota**: Para eliminar una etiqueta remota, se usa:
     ```bash
     git push --delete origin <nombre-etiqueta>
     ```

### Comandos Importantes
- **`git rebase <rama>`**: Aplica los cambios de una rama sobre otra de manera lineal.
- **`git rebase -i <rama>`**: Realiza un rebase interactivo, permitiendo modificar commits durante el proceso.
- **`git rebase --continue`**: Continúa el rebase después de resolver conflictos.
- **`git reset <archivo>`**: Deshace los cambios en el área de preparación.
- **`git checkout -- <archivo>`**: Deshace cambios no confirmados en un archivo.
- **`git revert <commit-hash>`**: Revierte un commit y crea un nuevo commit que deshace los cambios.
- **`git tag <nombre-etiqueta>`**: Crea una etiqueta para marcar un punto importante en el historial.
- **`git tag -a <nombre-etiqueta> -m "Mensaje"`**: Crea una etiqueta con un mensaje.
- **`git tag`**: Lista las etiquetas en el repositorio.
- **`git tag -d <nombre-etiqueta>`**: Elimina una etiqueta local.
- **`git fetch origin`**: Obtiene los últimos cambios del repositorio remoto.
- **`git push origin <nombre-etiqueta>`**: Envía una etiqueta al repositorio remoto.
- **`git push --delete origin <nombre-etiqueta>`**: Elimina una etiqueta remota.

**Trabajo con Submódulos en Git**
   - **¿Qué son los submódulos?**: Los submódulos permiten incluir otros repositorios dentro de un repositorio Git. Esto es útil cuando un proyecto depende de otro repositorio, pero quieres mantener su historial por separado.
   - **Agregar un submódulo**: Para agregar un submódulo a tu repositorio, se usa el siguiente comando:
     ```bash
     git submodule add <url-del-repositorio> <ruta-del-submodulo>
     ```
   - **Inicializar y actualizar submódulos**: Para inicializar los submódulos después de clonarlos, se usa:
     ```bash
     git submodule init
     git submodule update
     ```
   - **Actualizar submódulos**: Si se quiere obtener la última versión de un submódulo, se utiliza:
     ```bash
     git submodule update --remote
     ```

**Revisión del Historial de Commits**
   - **Ver el historial de commits**: El comando `git log` permite ver el historial de commits en el repositorio. Se pueden agregar opciones para personalizar la salida, como:
     ```bash
     git log --oneline
     ```
   - **Ver diferencias entre commits**: Para ver las diferencias entre dos commits, se usa:
     ```bash
     git diff <commit1> <commit2>
     ```

**Refluir Cambios con Git Reset**
   - **Deshacer commits locales**: El comando `git reset` permite deshacer commits locales. Existen tres opciones principales:
     - **`--soft`**: Deshace el commit pero mantiene los cambios en el área de preparación:
       ```bash
       git reset --soft <commit>
       ```
     - **`--mixed`**: Deshace el commit y elimina los cambios del área de preparación, pero mantiene los cambios en el directorio de trabajo:
       ```bash
       git reset --mixed <commit>
       ```
     - **`--hard`**: Deshace el commit y elimina los cambios tanto del área de preparación como del directorio de trabajo:
       ```bash
       git reset --hard <commit>
       ```

**Trabajando con Git Stash**
   - **Guardar cambios temporalmente**: Si necesitas cambiar de rama pero no quieres hacer un commit de los cambios, puedes "guardar" temporalmente los cambios con:
     ```bash
     git stash
     ```
   - **Ver los cambios guardados**: Para ver los cambios guardados, se usa:
     ```bash
     git stash list
     ```
   - **Recuperar los cambios guardados**: Para aplicar los cambios guardados en el directorio de trabajo, se usa:
     ```bash
     git stash apply
     ```
   - **Eliminar los cambios guardados**: Después de aplicar los cambios, puedes eliminar el stash con:
     ```bash
     git stash drop
     ```

### Comandos Importantes
- **`git submodule add <url> <ruta>`**: Agrega un submódulo a tu repositorio.
- **`git submodule init`**: Inicializa los submódulos en un repositorio.
- **`git submodule update`**: Actualiza los submódulos con las versiones más recientes.
- **`git submodule update --remote`**: Actualiza los submódulos a su última versión.
- **`git log --oneline`**: Muestra el historial de commits de manera resumida.
- **`git diff <commit1> <commit2>`**: Muestra las diferencias entre dos commits específicos.
- **`git reset --soft <commit>`**: Deshace el commit pero mantiene los cambios en el área de preparación.
- **`git reset --mixed <commit>`**: Deshace el commit y elimina los cambios del área de preparación, manteniéndolos en el directorio de trabajo.
- **`git reset --hard <commit>`**: Deshace el commit y elimina los cambios tanto del área de preparación como del directorio de trabajo.
- **`git stash`**: Guarda temporalmente los cambios no confirmados.
- **`git stash list`**: Muestra los stashes guardados.
- **`git stash apply`**: Aplica los cambios guardados de un stash.
- **`git stash drop`**: Elimina un stash guardado.

**Trabajo con Ramas Remotas**
   - **Ver ramas remotas**: Para ver todas las ramas remotas, se usa:
     ```bash
     git branch -r
     ```
   - **Ver ramas locales y remotas**: Para ver todas las ramas locales y remotas, se utiliza:
     ```bash
     git branch -a
     ```
   - **Eliminar una rama remota**: Para eliminar una rama en el repositorio remoto, se usa:
     ```bash
     git push origin --delete <nombre-de-la-rama>
     ```

**Manejo de Conflictos de Fusión**
   - **Detectar conflictos**: Cuando hay conflictos durante una fusión, Git te avisa para que los resuelvas manualmente en los archivos afectados.
   - **Marcar conflictos como resueltos**: Después de resolver los conflictos en los archivos, se debe agregar los archivos modificados con:
     ```bash
     git add <archivo-resuelto>
     ```
   - **Continuar con la fusión**: Para finalizar la fusión, se usa:
     ```bash
     git merge --continue
     ```

**Revisión y Manejo de Cambios de Archivos**
   - **Ver los cambios no guardados**: Para ver los cambios no confirmados en los archivos, se utiliza:
     ```bash
     git diff
     ```
   - **Deshacer cambios en un archivo**: Si se desean descartar los cambios no confirmados en un archivo, se usa:
     ```bash
     git checkout -- <archivo>
     ```

**Desempaquetado y Recarga de Archivos**
   - **Restaurar archivos a su último commit**: Para restaurar un archivo a su estado en el último commit, se usa:
     ```bash
     git restore <archivo>
     ```
   - **Restaurar todos los archivos modificados**: Para restaurar todos los archivos modificados, se usa:
     ```bash
     git restore .
     ```

**Trabajo con Commits de Rebase**
   - **Rebase interactivo**: Si se necesita reescribir el historial de commits, se usa el rebase interactivo para realizar cambios como combinar commits, reordenarlos, o editarlos:
     ```bash
     git rebase -i <rama>
     ```
   - **Cambiar el orden de los commits**: Se puede reorganizar el orden de los commits durante el rebase interactivo modificando el archivo que aparece en el editor.
   - **Editar un commit durante el rebase**: Para modificar un commit específico, se selecciona `edit` durante el rebase interactivo.

**Sincronización Final de Repositorios Remotos**
   - **Pujar cambios a un repositorio remoto**: Para enviar tus cambios locales al repositorio remoto, se utiliza:
     ```bash
     git push origin <nombre-de-la-rama>
     ```
   - **Actualizar la rama remota**: Si has realizado un rebase o un cambio importante, para actualizar la rama remota, se utiliza:
     ```bash
     git push --force
     ```

### Comandos Importantes
- **`git branch -r`**: Muestra las ramas remotas.
- **`git branch -a`**: Muestra las ramas locales y remotas.
- **`git push origin --delete <nombre-de-la-rama>`**: Elimina una rama remota.
- **`git add <archivo-resuelto>`**: Marca un archivo como resuelto después de un conflicto.
- **`git merge --continue`**: Continúa el proceso de fusión después de resolver los conflictos.
- **`git diff`**: Muestra las diferencias entre los cambios no confirmados y el último commit.
- **`git checkout -- <archivo>`**: Descartar los cambios no confirmados en un archivo.
- **`git restore <archivo>`**: Restaura un archivo a su último commit.
- **`git restore .`**: Restaura todos los archivos modificados a su último commit.
- **`git rebase -i <rama>`**: Realiza un rebase interactivo.
- **`git push origin <nombre-de-la-rama>`**: Envía cambios a un repositorio remoto.
- **`git push --force`**: Forzar la actualización de una rama remota (usado generalmente después de un rebase).