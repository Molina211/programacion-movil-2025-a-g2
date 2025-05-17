# Manual para la Configuración del Contenedor MySQL – Proyecto ReservasUH

Este manual describe cómo configurar y levantar un contenedor Docker para una base de datos **MySQL**, específicamente diseñado para el sistema de reservas **ReservasUH**. Se utiliza Docker Compose para definir el servicio. A continuación se explican los componentes necesarios para levantar el entorno de base de datos.

---

## 1. `docker-compose.yml`

Este archivo define los servicios necesarios para levantar un contenedor de MySQL, la red virtual y los volúmenes persistentes. A continuación se presenta el contenido del archivo:

```yaml
version: '3.8'

services:
  dbreservasuh:
    image: mysql:latest
    container_name: DBReservasUH
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: 1234
      MYSQL_USER: roott
      MYSQL_PASSWORD: 1234
      MYSQL_DATABASE: ReservasUH
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - dbnet

volumes:
  mysql_data:

networks:
  dbnet:
    driver: bridge
```

---

## 2. Descripción de la Configuración

### Servicio: `dbreservasuh`

- **image**: `mysql:latest`
- **container_name**: `DBReservasUH`
- **ports**: `"3306:3306"`
- **environment**:
  - `MYSQL_ROOT_PASSWORD`: `1234`
  - `MYSQL_USER`: `roott`
  - `MYSQL_PASSWORD`: `1234`
  - `MYSQL_DATABASE`: `ReservasUH`
- **volumes**:
  - `mysql_data` → `/var/lib/mysql`
- **networks**:
  - `dbnet`

### Volumen: `mysql_data`

Volumen persistente para asegurar que los datos no se pierdan al detener o eliminar el contenedor.

### Red: `dbnet`

Red tipo `bridge` para permitir la comunicación aislada entre servicios.

---

## 3. Requisitos Previos

Antes de iniciar el despliegue del contenedor, asegúrese de tener:

- Docker instalado.  
- Docker Compose instalado.  
- Permisos de administrador o acceso `sudo`.

---

## 4. Pasos para la Configuración

### Paso 1: Crear un Directorio del Proyecto

```bash
mkdir ReservasUH-db
cd ReservasUH-db
```

### Paso 2: Crear el Archivo `docker-compose.yml`

Pegue el contenido YAML mostrado arriba dentro del archivo `docker-compose.yml`.

### Paso 3: Levantar el Contenedor

```bash
docker-compose up -d
```

> El flag `-d` ejecuta los contenedores en segundo plano.

### Paso 4: Verificar que el Contenedor Está en Ejecución

```bash
docker ps
```

Debe aparecer el contenedor `DBReservasUH` ejecutándose y con el puerto 3306 expuesto.

---

## 5. Acceso a MySQL

Puede conectarse al servidor MySQL dentro del contenedor con el siguiente comando:

```bash
docker exec -it DBReservasUH mysql -uroott -p1234
```

---

## 6. Personalización Adicional (opcional)

Para mayor seguridad y flexibilidad, se recomienda el uso de un archivo `.env` y un `Dockerfile` para gestionar las variables de entorno y extensiones personalizadas.

---

## 7. Buenas Prácticas

- No usar contraseñas triviales en entornos de producción.
- Usar `.env` para evitar exponer credenciales en el `docker-compose.yml`.
- Hacer backups periódicos del volumen `mysql_data`.

---

## 8. Conclusión

Esta configuración ofrece una solución rápida y funcional para integrar una base de datos MySQL al proyecto **ReservasUH**. Su simplicidad lo hace ideal para entornos de desarrollo y pruebas.
