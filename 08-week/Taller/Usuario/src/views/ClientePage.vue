<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Clientes</h1>
    
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Apellido</th>
          <th class="border p-2">Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clientes" :key="client.documento" class="border">
          <td class="border p-2">{{ client.nombre }}</td>
          <td class="border p-2">{{ client.apellido }}</td>
          <td class="border p-2">{{ client.correo }}</td>
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
      clientes: BaseData.data().clientes
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: rgb(255, 0, 0);
  border-radius: 8px;
}
</style>
