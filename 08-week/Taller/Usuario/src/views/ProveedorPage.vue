<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Proveedores</h1>
    
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proveedor in proveedores" :key="proveedor.documento" class="border">
          <td class="border p-2">{{ proveedor.nombre }}</td>
          <td class="border p-2">{{ proveedor.apellido }}</td>
          <td class="border p-2">{{ proveedor.correo }}</td>
          <td class="border p-2">{{ proveedor.empresa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseData from '@/components/BaseData.vue';

export default {
  data() {
    return {
      proveedores: BaseData.data().proveedores
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: rgb(0, 200, 0);
  border-radius: 8px;
}
</style>
