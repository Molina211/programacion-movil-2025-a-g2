<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-white mb-4">Gestión de Pacientes</h1>

    <form @submit.prevent="modoEdicion ? modificarPaciente() : agregarPaciente()" class="mb-6">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block font-bold text-white mb-1">Nombre:</label>
          <input v-model="nuevoPaciente.nombre" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Apellido:</label>
          <input v-model="nuevoPaciente.apellido" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Edad:</label>
          <input v-model="nuevoPaciente.edad" type="number" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Correo:</label>
          <input v-model="nuevoPaciente.correo" type="email" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Teléfono:</label>
          <input v-model="nuevoPaciente.telefono" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Dirección:</label>
          <input v-model="nuevoPaciente.direccion" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">N° Historia Clínica:</label>
          <input v-model="nuevoPaciente.historiaClinica" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-bold text-white mb-1">Tipo de Afiliación:</label>
          <input v-model="nuevoPaciente.afiliacion" type="text" class="input" required />
        </div>
      </div>

      <div class="mt-6 flex gap-4 flex-wrap">
        <button type="submit" class="btn bg-green-600 hover:bg-green-700">
          {{ modoEdicion ? 'Modificar' : 'Agregar' }}
        </button>
        <button v-if="modoEdicion" type="button" @click="cancelarEdicion" class="btn bg-gray-500 hover:bg-gray-600">
          Cancelar
        </button>
        <button type="button" @click="mostrarPacientes = !mostrarPacientes" class="btn bg-blue-600 hover:bg-blue-700">
          {{ mostrarPacientes ? 'Ocultar Lista' : 'Consultar' }}
        </button>
      </div>
    </form>

    <!-- Tabla de Pacientes -->
    <div v-if="mostrarPacientes && pacientes.length" class="overflow-x-auto mt-8">
      <table class="w-full table-auto bg-white rounded shadow-lg">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="px-4 py-2">Nombre</th>
            <th class="px-4 py-2">Apellido</th>
            <th class="px-4 py-2">Edad</th>
            <th class="px-4 py-2">Correo</th>
            <th class="px-4 py-2">Teléfono</th>
            <th class="px-4 py-2">Dirección</th>
            <th class="px-4 py-2">Historia Clínica</th>
            <th class="px-4 py-2">Afiliación</th>
            <th class="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(paciente, index) in pacientes" :key="index" class="hover:bg-gray-100">
            <td class="border px-4 py-2">{{ paciente.nombre }}</td>
            <td class="border px-4 py-2">{{ paciente.apellido }}</td>
            <td class="border px-4 py-2">{{ paciente.edad }}</td>
            <td class="border px-4 py-2">{{ paciente.correo }}</td>
            <td class="border px-4 py-2">{{ paciente.telefono }}</td>
            <td class="border px-4 py-2">{{ paciente.direccion }}</td>
            <td class="border px-4 py-2">{{ paciente.historiaClinica }}</td>
            <td class="border px-4 py-2">{{ paciente.afiliacion }}</td>
            <td class="border px-4 py-2 space-x-2">
              <button @click="editarPaciente(index)" class="btn bg-yellow-500 hover:bg-yellow-600">Editar</button>
              <button @click="eliminarPaciente(index)" class="btn bg-red-600 hover:bg-red-700">Eliminar</button>
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
      pacientes: [],
      nuevoPaciente: {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        historiaClinica: '',
        afiliacion: ''
      },
      modoEdicion: false,
      indiceEdicion: null,
      mostrarPacientes: false
    };
  },
  methods: {
    agregarPaciente() {
      this.pacientes.push({ ...this.nuevoPaciente });
      this.limpiarFormulario();
    },
    editarPaciente(index) {
      this.modoEdicion = true;
      this.indiceEdicion = index;
      this.nuevoPaciente = { ...this.pacientes[index] };
    },
    modificarPaciente() {
      this.pacientes.splice(this.indiceEdicion, 1, { ...this.nuevoPaciente });
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    eliminarPaciente(index) {
      this.pacientes.splice(index, 1);
    },
    cancelarEdicion() {
      this.limpiarFormulario();
      this.modoEdicion = false;
      this.indiceEdicion = null;
    },
    limpiarFormulario() {
      this.nuevoPaciente = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        telefono: '',
        direccion: '',
        historiaClinica: '',
        afiliacion: ''
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
