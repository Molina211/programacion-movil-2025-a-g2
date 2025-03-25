# Apuntes de Clase: Componentes Reutilizables

## Introducción

Los componentes son fragmentos de código diseñados para ser reutilizados en múltiples partes de una aplicación. Su objetivo principal es optimizar el desarrollo, mejorar la mantenibilidad y reducir la duplicación de código.

## Cuándo usar y cuándo no usar componentes

### Usar cuando:

- Se necesita reutilizar el mismo código en varias partes del sistema.
- Se busca modularidad y escalabilidad en el desarrollo.
- Se quiere mejorar la mantenibilidad del código.

### No usar cuando:

- Solo se necesita una implementación única en todo el sistema.
- La sobrecarga de la reutilización complica más de lo que simplifica.

## Implementación de Componentes

### Planteamiento de componentes

Ejemplo de estructura de componentes:

```plaintext
person {lastName, secondName, email, address, phone}
customer {code}
employee {contract, position}
```

Cada uno de estos componentes encapsula datos específicos y puede ser reutilizado en diferentes partes de la aplicación.

## Frameworks utilizados para componentes reutilizables

El profesor explicó la reutilización de componentes en el framework **Ionic**, y cómo se pueden integrar con distintos frameworks populares como:

### **Angular**

- Utiliza **Componentes** basados en TypeScript.
- Implementación con Decoradores `@Component`.
- Separación clara entre HTML, CSS y TypeScript.

### **Vue.js**

- Generación de nuevas vistas dentro de la aplicación.
- Creación de una carpeta `components/` para almacenar archivos `.vue`.
- Uso de **Single File Components (SFCs)** para organizar el código.
- Los datos se almacenan en los componentes y luego se renderizan en las vistas.
- Definición de rutas para cada vista utilizando Vue Router.

### **React**

- Componentes basados en **funciones y clases**.
- Uso de `props` para la reutilización y comunicación.
- Hooks como `useState` y `useEffect` para la gestión del estado.

## Taller de Ionic

- Introducción a **Ionic** como framework para desarrollar aplicaciones móviles híbridas.
- Creación de componentes reutilizables en Ionic con Angular, React y Vue.
- Uso de **IonComponents** para una interfaz adaptable y responsiva.

## Conclusión

El uso de componentes reutilizables es una práctica clave en el desarrollo moderno de aplicaciones. Frameworks como Angular, Vue y React facilitan esta reutilización a través de sus respectivos sistemas de componentes. En el taller de Ionic se exploró cómo integrar estos principios para desarrollar aplicaciones eficientes y modulares.

Para más detalles, consulta el enlace de la clase: [Clase Completa](https://drive.google.com/drive/folders/1yr4XlTXNRagk4XgCl7NZe0QIRUWknO8M).
