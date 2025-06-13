<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">ServerDash 🚀</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ServerCard v-for="server in servers" :key="server.id" :server="server" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useServersStore } from "~/stores/useServersStore";

const serversStore = useServersStore();
const { servers } = storeToRefs(serversStore);

// Загружаем данные при монтировании
onMounted(() => {
  console.log("page mounted");
  serversStore.fetchServers();
});
</script>
