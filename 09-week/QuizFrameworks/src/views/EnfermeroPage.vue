<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-white mb-4">Gestión de Enfermeros</h1>

    <form @submit.prevent="modoEdicion ? modificarEnfermero() : agregarEnfermero()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold text-white mb-1">Nombre:</label>
          <input v-model="nuevoEnfermero.nombre" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Apellido:</label>
          <input v-model="nuevoEnfermero.apellido" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Edad:</label>
          <input v-model="nuevoEnfermero.edad" type="number" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Correo:</label>
          <input v-model="nuevoEnfermero.correo" type="email" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Teléfono:</label>
          <input v-model="nuevoEnfermero.telefono" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Dirección:</label>
          <input v-model="nuevoEnfermero.direccion" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Turno Asignado:</label>
          <input v-model="nuevoEnfermero.turno" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Área de Atención:</label>
          <input v-model="nuevoEnfermero.area" type="text" class="input" required />
        </div>
      </div>

      <div class="mt-6 flex gap-4 flex-wrap">
        <button type="submit" class="btn bg-green-600 hover:bg-green-700">
          {{ modoEdicion ? 'Modificar' : 'Agregar' }}
        </button>
        <button v-if="modoEdicion" type="button" @click="cancelarEdicion" class="btn bg-gray-500 hover:bg-gray-600">
          Cancelar
        </button>
        <button type="button" @click="mostrarEnfermeros = !mostrarEnfermeros" class="btn bg-blue-600 hover:bg-blue-700">
          {{ mostrarEnfermeros ? 'Ocultar Lista' : 'Consultar' }}
        </button>
      </div>
    </form>

    <!-- Tabla de Enfermeros -->
    <div v-if="mostrarEnfermeros && enfermeros.length" class="overflow-x-auto mt-8">
      <table class="w-full table-auto bg-white rounded shadow-lg">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Apellido</th>
            <th class="px-4 py-2">Edad</th>
            <th class="px-4 py-2">Correo</th>
            <th class="px-4 py-2">Teléfono</th>
            <th class="px-4 py-2">Dirección</th>
            <th class="px-4 py-2">Turno</th>
            <th class="px-4 py-2">Área</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(enfermero, index) in enfermeros" :key="index" class="hover:bg-gray-100">
            <td class="border px-4 py-2">{{ enfermero.nombre }}</td>
            <td class="border px-4 py-2">{{ enfermero.apellido }}</td>
            <td class="border px-4 py-2">{{ enfermero.edad }}</td>
            <td class="border px-4 py-2">{{ enfermero.correo }}</td>
            <td class="border px-4 py-2">{{ enfermero.telefono }}</td>
            <td class="border px-4 py-2">{{ enfermero.direccion }}</td>
            <td class="border px-4 py-2">{{ enfermero.turno }}</td>
            <td class="border px-4 py-2">{{ enfermero.area }}</td>
            <td class="border px-4 py-2 space-x-2">
              <button @click="editarEnfermero(index)" class="btn bg-yellow-500 hover:bg-yellow-600">Editar</button>
              <button @click="eliminarEnfermero(index)" class="btn bg-red-600 hover:bg-red-700">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enfermeros: [],
      nuevoEnfermero: {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        turno: '',
        area: ''
      },
      modoEdicion: false,
      indiceEdicion: null,
      mostrarEnfermeros: false
    };
  },
  methods: {
    agregarEnfermero() {
      this.enfermeros.push({ ...this.nuevoEnfermero });
      this.limpiarFormulario();
    },
    editarEnfermero(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoEnfermero = { ...this.enfermeros[index] };
    },
    modificarEnfermero() {
      this.enfermeros.splice(this.indiceEdicion, 1, { ...this.nuevoEnfermero });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarEnfermero(index) {
      this.enfermeros.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoEnfermero = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        turno: '',
        area: ''
      };
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 32px;
  background: linear-gradient(135deg, #1f2937, #3b82f6);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  text-align: center;
}
.input {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.95rem;
  width: 100%;
  color: #111827;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.input:focus {
  outline: none;
  border: 2px solid #2563eb;
}
.btn {
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.btn:hover {
  transform: translateY(-1px);
}
table {
  border-collapse: collapse;
}
th,
td {
  text-align: left;
}
</style>
