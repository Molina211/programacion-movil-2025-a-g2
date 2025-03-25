<script>
export default {
  data() {
    return {
      clientes: [
        {
          id: '1',
          nombre: 'Juan',
          apellido: 'Pérez',
          documento: '12345678',
          fechaNacimiento: '1990-05-20',
          direccion: 'Calle Falsa 123',
          telefono: '123-456-7890',
          correo: 'juan.perez@example.com'
        },
        {
          id: '2',
          nombre: 'María',
          apellido: 'Gómez',
          documento: '87654321',
          fechaNacimiento: '1985-10-15',
          direccion: 'Avenida Siempre Viva 456',
          telefono: '987-654-3210',
          correo: 'maria.gomez@example.com'
        }
      ],
      empleados: [
        {
          id: '1',
          nombre: 'Carlos',
          apellido: 'Ramírez',
          documento: '23456789',
          fechaNacimiento: '1982-07-10',
          direccion: 'Calle del Trabajo 321',
          telefono: '321-654-9870',
          correo: 'carlos.ramirez@example.com',
          cargo: 'Gerente'
        },
        {
          id: '2',
          nombre: 'Ana',
          apellido: 'López',
          documento: '34567890',
          fechaNacimiento: '1995-02-25',
          direccion: 'Pasaje Ejecutivo 789',
          telefono: '654-321-0987',
          correo: 'ana.lopez@example.com',
          cargo: 'Administradora'
        }
      ],
      proveedores: [
        {
          id: '1',
          nombre: 'Luis',
          apellido: 'Fernández',
          documento: '45678901',
          fechaNacimiento: '1978-12-05',
          direccion: 'Zona Industrial 555',
          telefono: '555-666-7777',
          correo: 'luis.fernandez@example.com',
          empresa: 'Tech Supplies'
        },
        {
          id: '2',
          nombre: 'Marta',
          apellido: 'Rodríguez',
          documento: '56789012',
          fechaNacimiento: '1980-08-18',
          direccion: 'Av. Comercial 222',
          telefono: '777-888-9999',
          correo: 'marta.rodriguez@example.com',
          empresa: 'Global Services'
        }
      ]
    };
  }
};
</script>
