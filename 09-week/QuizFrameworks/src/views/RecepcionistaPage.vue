<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-white mb-4">Gestión de Recepcionistas</h1>

    <form @submit.prevent="modoEdicion ? modificarRecepcionista() : agregarRecepcionista()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold text-white mb-1">Nombre:</label>
          <input v-model="nuevoRecepcionista.nombre" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Apellido:</label>
          <input v-model="nuevoRecepcionista.apellido" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Edad:</label>
          <input v-model="nuevoRecepcionista.edad" type="number" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Correo:</label>
          <input v-model="nuevoRecepcionista.correo" type="email" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Teléfono:</label>
          <input v-model="nuevoRecepcionista.telefono" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Dirección:</label>
          <input v-model="nuevoRecepcionista.direccion" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Horario laboral:</label>
          <input v-model="nuevoRecepcionista.horario" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Extensión telefónica:</label>
          <input v-model="nuevoRecepcionista.extension" type="text" class="input" required />
        </div>
      </div>

      <div class="mt-6 flex gap-4 flex-wrap">
        <button type="submit" class="btn bg-green-600 hover:bg-green-700">
          {{ modoEdicion ? 'Modificar' : 'Agregar' }}
        </button>
        <button v-if="modoEdicion" type="button" @click="cancelarEdicion" class="btn bg-gray-500 hover:bg-gray-600">
          Cancelar
        </button>
        <button type="button" @click="mostrarRecepcionistas = !mostrarRecepcionistas" class="btn bg-blue-600 hover:bg-blue-700">
          {{ mostrarRecepcionistas ? 'Ocultar Lista' : 'Consultar' }}
        </button>
      </div>
    </form>

    <!-- Tabla -->
    <div v-if="mostrarRecepcionistas && recepcionistas.length" class="overflow-x-auto mt-8">
      <table class="w-full table-auto bg-white rounded shadow-lg">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Apellido</th>
            <th class="px-4 py-2">Edad</th>
            <th class="px-4 py-2">Correo</th>
            <th class="px-4 py-2">Teléfono</th>
            <th class="px-4 py-2">Dirección</th>
            <th class="px-4 py-2">Horario</th>
            <th class="px-4 py-2">Extensión</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(recepcionista, index) in recepcionistas" :key="index" class="hover:bg-gray-100">
            <td class="border px-4 py-2">{{ recepcionista.nombre }}</td>
            <td class="border px-4 py-2">{{ recepcionista.apellido }}</td>
            <td class="border px-4 py-2">{{ recepcionista.edad }}</td>
            <td class="border px-4 py-2">{{ recepcionista.correo }}</td>
            <td class="border px-4 py-2">{{ recepcionista.telefono }}</td>
            <td class="border px-4 py-2">{{ recepcionista.direccion }}</td>
            <td class="border px-4 py-2">{{ recepcionista.horario }}</td>
            <td class="border px-4 py-2">{{ recepcionista.extension }}</td>
            <td class="border px-4 py-2 space-x-2">
              <button @click="editarRecepcionista(index)" class="btn bg-yellow-500 hover:bg-yellow-600">Editar</button>
              <button @click="eliminarRecepcionista(index)" class="btn bg-red-600 hover:bg-red-700">Eliminar</button>
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
      recepcionistas: [],
      nuevoRecepcionista: {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        horario: '',
        extension: ''
      },
      modoEdicion: false,
      indiceEdicion: null,
      mostrarRecepcionistas: false
    };
  },
  methods: {
    agregarRecepcionista() {
      this.recepcionistas.push({ ...this.nuevoRecepcionista });
      this.limpiarFormulario();
    },
    editarRecepcionista(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoRecepcionista = { ...this.recepcionistas[index] };
    },
    modificarRecepcionista() {
      this.recepcionistas.splice(this.indiceEdicion, 1, { ...this.nuevoRecepcionista });
      this.cancelarEdicion();
    },
    eliminarRecepcionista(index) {
      this.recepcionistas.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoRecepcionista = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        horario: '',
        extension: ''
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
</style>
