# 📚 Guía Básica de Comandos Git

Una referencia completa de los comandos esenciales de Git, con un enfoque en el manejo de ramas y operaciones comunes.

---

## 🔄 **Comandos Básicos de Ramas en Git**

### 1. **Listar Ramas**

- Muestra las ramas locales:
  ```bash
  git branch
  ```
- Muestra las ramas remotas:
  ```bash
  git branch -r
  ```
- Muestra todas las ramas (locales y remotas):
  ```bash
  git branch -a
  ```

### 2. **Cambiar a una Rama**

- Cambiar a una rama existente:
  ```bash
  git switch <nombre-de-la-rama>
  ```
  O el comando clásico:
  ```bash
  git checkout <nombre-de-la-rama>
  ```

### 3. **Crear y Cambiar a una Nueva Rama**

- Crear una nueva rama y cambiar a ella:
  ```bash
  git switch -c <nombre-de-la-nueva-rama>
  ```
  O usando `checkout`:
  ```bash
  git checkout -b <nombre-de-la-nueva-rama>
  ```

### 4. **Eliminar Ramas**

- Eliminar una rama local fusionada:
  ```bash
  git branch -d <nombre-de-la-rama>
  ```
- Eliminar una rama local sin verificar la fusión (forzar):
  ```bash
  git branch -D <nombre-de-la-rama>
  ```
- Eliminar una rama remota:
  ```bash
  git push <nombre-del-remote> --delete <nombre-de-la-rama>
  ```
  **Ejemplo:**
  ```bash
  git push origin --delete feature/activity
  ```

### 5. **Renombrar una Rama**

- Renombrar la rama actual:
  ```bash
  git branch -m <nuevo-nombre>
  ```
- Renombrar una rama específica:
  ```bash
  git branch -m <nombre-antiguo> <nuevo-nombre>
  ```

### 6. **Fusionar Ramas**

- Fusionar una rama en la rama actual:
  ```bash
  git merge <nombre-de-la-rama>
  ```

### 7. **Ver el Historial de Cambios y Referencias**

- Ver el historial de confirmaciones:
  ```bash
  git log
  ```
- Ver el registro de referencias (`reflog`):
  ```bash
  git reflog
  ```

---

## 🌍 **Trabajando con Remotos**

### 8. **Clonar un Repositorio**

- Clonar un repositorio remoto a tu máquina local:
  ```bash
  git clone <url-del-repositorio>
  ```

### 9. **Ver Remotos Configurados**

- Listar los remotos del repositorio:
  ```bash
  git remote -v
  ```

### 10. **Añadir un Remote**

- Añadir un nuevo remote:
  ```bash
  git remote add <nombre-del-remote> <url-del-repositorio>
  ```
  **Ejemplo:**
  ```bash
  git remote add origin https://github.com/usuario/nombre-repo.git
  ```

### 11. **Cambiar la URL de un Remote**

- Cambiar la URL de un remote existente:
  ```bash
  git remote set-url <nombre-del-remote> <nueva-url>
  ```

### 12. **Eliminar un Remote**

- Eliminar un remote:
  ```bash
  git remote remove <nombre-del-remote>
  ```

### 13. **Push y Pull**

- Enviar los cambios al remoto:

  ```bash
  git push <nombre-del-remote> <nombre-de-la-rama>
  ```

  **Ejemplo:**

  ```bash
  git push origin main
  ```

- Hacer un push por primera vez con seguimiento:

  ```bash
  git push -u <nombre-del-remote> <nombre-de-la-rama>
  ```

  Después de esto, solo necesitarás usar `git push`.

- Extraer cambios del remoto:

  ```bash
  git pull <nombre-del-remote> <nombre-de-la-rama>
  ```

  O simplemente:

  ```bash
  git pull
  ```

---

## 🛠 **Soluciones Comunes a Problemas**

### 14. **Recuperar una Rama Eliminada**

- Si la rama aún existe en el remoto:
  ```bash
  git checkout -b <nombre-de-la-rama> origin/<nombre-de-la-rama>
  ```
- Si la rama no fue subida al remoto, usar `reflog`:
  1. Ver el historial de referencias:
     ```bash
     git reflog
     ```
  2. Recuperar la rama desde un commit específico:
     ```bash
     git checkout -b <nombre-de-la-rama> <hash-del-commit>
     ```

### 15. **Deshacer Cambios**

- Descartar cambios en un archivo (volver a la última versión confirmada):

  ```bash
  git checkout -- <nombre-del-archivo>
  ```

- Resetear la rama actual al último commit confirmado:

  ```bash
  git reset --hard
  ```

- Resetear la rama a un commit específico:

  ```bash
  git reset --hard <hash-del-commit>
  ```

---

## 🔧 **Comandos Adicionales y Avanzados**

### 16. **Stash (Almacenar Cambios Temporalmente)**

- Guardar cambios sin confirmar:
  ```bash
  git stash
  ```
- Mostrar la lista de "stashes":
  ```bash
  git stash list
  ```
- Aplicar el stash más reciente:
  ```bash
  git stash apply
  ```
- Aplicar y eliminar el stash en un solo paso:
  ```bash
  git stash pop
  ```

### 17. **Cherry-Pick (Aplicar un Commit Específico)**

- Aplicar un commit específico en tu rama actual:
  ```bash
  git cherry-pick <hash-del-commit>
  ```

### 18. **Rebase (Reorganizar Commits)**

- Mover commits de tu rama sobre otra rama:
  ```bash
  git rebase <nombre-de-la-rama>
  ```
- Continuar el rebase después de resolver conflictos:
  ```bash
  git rebase --continue
  ```
- Abortar un rebase:
  ```bash
  git rebase --abort
  ```

### 19. **Tracking de Ramas**

- Establecer una rama remota como la rama "seguida":
  ```bash
  git branch --set-upstream-to=<nombre-del-remote>/<nombre-de-la-rama>
  ```

### 20. **Fetch (Traer Cambios sin Fusionar)**

- Actualizar tu repositorio local con los cambios remotos:
  ```bash
  git fetch
  ```

### 21. **Diff (Ver Cambios entre Commits, Ramas o Stages)**

- Ver los cambios entre el último commit y tu directorio de trabajo:
  ```bash
  git diff
  ```
- Comparar dos ramas específicas:
  ```bash
  git diff <rama1> <rama2>
  ```

### 22. **Log Avanzado**

- Ver el historial de commits con un gráfico de ramas:
  ```bash
  git log --oneline --graph --all
  ```

### 23. **Worktree (Múltiples Directorios de Trabajo)**

- Crear una nueva "worktree" para una rama específica:
  ```bash
  git worktree add <directorio> <nombre-de-la-rama>
  ```

### 24. **Revert (Revertir un Commit Sin Eliminar Historial)**

- Deshacer un commit y mantener un registro en el historial:
  ```bash
  git revert <hash-del-commit>
  ```

### 25. **Amend (Modificar el Último Commit)**

- Agregar cambios al último commit:
  ```bash
  git commit --amend
  ```

### 26. **Borrar Branches Remotas Obsoletas**

- Limpiar referencias locales de ramas remotas eliminadas:
  ```bash
  git remote prune origin
  ```

---

¡Guarda esta guía como referencia para mejorar tu flujo de trabajo con Git! 😊

Este archivo README ya está organizado y listo para ser subido a un repositorio de GitHub. Incluye una estructura clara, secciones bien diferenciadas y ejemplos de uso, facilitando su consulta y referencia rápida.
