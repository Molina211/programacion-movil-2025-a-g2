# Manual de Usuario para Despliegue de la Aplicación

## Backend

### Requisitos previos

- Docker y Docker Compose instalados.
- Jenkins instalado y configurado.
- Acceso al repositorio del proyecto backend con `Jenkinsfile` configurado.

### Pasos para desplegar el backend

1. Accede a la carpeta donde se encuentra el archivo `docker-compose.yml` del backend.
  
2. Abre una terminal (CMD o PowerShell) en esa ubicación.
  
3. Ejecuta el siguiente comando para iniciar los contenedores:
  
  ```bash
  docker compose up -d
  ```
  
4. Accede a la plataforma de Jenkins desde el navegador.
  
5. Crea una nueva tarea seleccionando el tipo **Pipeline**.
  
6. En la sección **Build Triggers**, selecciona la opción **Poll SCM** y escribe la siguiente expresión cron:
  
  ```bash
  H/2 * * * *
  ```
  
7. En la sección **Pipeline**, configura lo siguiente:
  
  - **Definition**: `Pipeline script from SCM`
  - **SCM**: `Git`
  - **Repository URL**: Coloca la URL del repositorio del backend.
  - **Branches to build**: `*/main` (u otra rama correspondiente).
  - **Script Path**: Especifica la ruta del archivo `Jenkinsfile` dentro del repositorio.
8. Haz clic en **Save**.
  
9. Presiona el botón **Build Now** para ejecutar el pipeline.
  

> Esto iniciará el despliegue del backend y su base de datos en contenedores Docker.

---

## Frontend

### Requisitos previos

- Node.js instalado.
- Android Studio instalado y configurado.
- Proyecto frontend basado en Ionic con Capacitor.

### Pasos para desplegar y compilar la aplicación Android

1. Instala las dependencias del proyecto ejecutando:
  
  ```bash
  npm install
  ```
  
2. **Configura la IP local para que la app se comunique correctamente con el backend:**
  
  - Abre una terminal como **Administrador**.
    
  - Ejecuta el siguiente comando:
    
    ```bash
    ipconfig
    ```
    
  - Busca la sección **Adaptador de LAN inalámbrica Wi-Fi**.
    
  - Copia la dirección que aparece en **Dirección IPv4** (por ejemplo, `192.168.1.100`).
    
  - En los archivos `src/environments/environment.ts` y `environment.prod.ts`, modifica el contenido así:
    
    ```ts
    export const environment = {
      production: false, // en environment.prod.ts poner true
      apiHost: 'http://192.168.1.100',
      apiPort: '8443',
      apiPrefix: '/api'
    };
    ```
    
3. Agrega soporte para Android (solo la primera vez):
  
  ```bash
  npm install @capacitor/android
  npx cap add android
  ```
  
4. Compila la aplicación web:
  
  ```bash
  ionic build
  ```
  
  > Este comando genera el contenido web en la carpeta `www/`.
  
5. Copia la build al proyecto Android:
  
  ```bash
  npx cap copy android
  ```
  
  > Ejecuta esto cada vez que hagas un nuevo `ionic build`.
  
6. Abre Android Studio con el proyecto Android:
  
  ```bash
  npx cap open android
  ```
  
7. Desde Android Studio:
  
  - Compila el proyecto.
  - Ejecuta la aplicación o genera el archivo `.apk`.
