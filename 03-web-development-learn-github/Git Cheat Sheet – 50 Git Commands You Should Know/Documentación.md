# **Sistema de Control de Versiones Distribuido (DVCS) - Resumen de Git**

## **¿Qué es un Sistema de Control de Versiones Distribuido?**
Un sistema de control de versiones distribuido (DVCS) es una herramienta que ayuda a gestionar los cambios en los archivos de un proyecto. Permite rastrear los cambios en tu máquina local y revertir a versiones anteriores si es necesario. Git, por ejemplo, facilita la colaboración permitiendo que cada miembro del equipo tenga una copia completa del repositorio en su máquina local, y sincronizarlo con un servidor externo como GitHub, GitLab o BitBucket.

## **Comandos de Git**

### **Configuración y Setup**
1. **Ver configuración de Git**: `git config -l`
2. **Configurar nombre de usuario**: `git config --global user.name "Tu Nombre"`
3. **Configurar correo electrónico**: `git config --global user.email "tucorreo@ejemplo.com"`
4. **Almacenar credenciales**: `git config --global credential.helper cache`

### **Inicialización del Repositorio**
5. **Inicializar un repositorio Git**: `git init`
6. **Agregar un archivo al área de staging**: `git add archivo_aqui`
7. **Agregar todos los archivos**: `git add .`
8. **Ver el estado del repositorio**: `git status`

### **Commit y Ver Cambios**
9. **Hacer un commit**: `git commit -m "Tu mensaje de commit"`
10. **Ver el historial de commits**: `git log`
11. **Ver cambios antes de hacer commit**: `git diff`
12. **Revertir cambios no staged**: `git checkout archivo`
13. **Revertir cambios staged**: `git reset HEAD archivo`
14. **Amendar el commit más reciente**: `git commit --amend`
15. **Ver el historial de commits incluyendo cambios**: `git log -p`
16. **Ver un commit específico**: `git show commit-id`
17. **Ver el historial de commits con estadísticas**: `git log --stat`
18. **Ver cambios en archivos no staged**: `git diff`
19. **Ver cambios en un archivo específico**: `git diff archivo_especifico`
20. **Ver cambios staged**: `git diff --staged`
21. **Ver cambios con `git add -p`**: `git add -p`
22. **Eliminar un archivo rastreado**: `git rm archivo`
23. **Renombrar archivos**: `git mv archivo_viejo archivo_nuevo`
24. **Revertir cambios no staged**: `git checkout archivo`
25. **Revertir cambios staged**: `git reset HEAD archivo`

### **Ramas y Fusión**
26. **Crear una nueva rama**: `git branch nombre_rama`
27. **Cambiar a una rama**: `git checkout nombre_rama`
28. **Crear y cambiar a una nueva rama**: `git checkout -b nombre_rama`
29. **Eliminar una rama**: `git branch -d nombre_rama`
30. **Fusionar ramas**: `git merge nombre_rama`
31. **Ver ramas**: `git branch`
32. **Ver todas las ramas (locales y remotas)**: `git branch -a`
33. **Ver la rama actual**: `git branch -v`
34. **Ver el gráfico de commits**: `git log --graph --oneline`
35. **Ver todas las ramas con gráfico de commits**: `git log --graph --oneline --all`
36. **Abortar una fusión conflictiva**: `git merge --abort`

### **Repositorios Remotos**
37. **Agregar repositorio remoto**: `git remote add origin https://repositorio_aqui`
38. **Ver las URL remotas**: `git remote -v`
39. **Mostrar información del repositorio remoto**: `git remote show origin`
40. **Subir cambios a remoto**: `git push`
41. **Obtener cambios de remoto**: `git pull`
42. **Ver ramas remotas**: `git branch -r`
43. **Obtener cambios del repositorio remoto sin fusionarlos**: `git fetch`
44. **Ver el historial de commits de un repositorio remoto**: `git log origin/main`
45. **Fusionar cambios de un repositorio remoto**: `git merge origin/main`
46. **Actualizar el repositorio remoto sin fusionar cambios**: `git remote update`
47. **Subir una nueva rama al repositorio remoto**: `git push -u origin nombre_rama`
48. **Eliminar una rama remota**: `git push --delete origin nombre_rama`
49. **Forzar un push**: `git push -f`

### **Rebase y Otras Operaciones Avanzadas**
50. **Rebase**: `git rebase nombre_rama_aqui`
51. **Rebase interactivo**: `git rebase -i master`
