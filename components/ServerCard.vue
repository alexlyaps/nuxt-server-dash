<template>
  <div class="p-4 rounded-lg shadow border border-emerald-200">
    <h3 class="font-bold">{{ server.name }}</h3>
    <p>CPU: {{ server.cpu }}%</p>
    <p>RAM: {{ server.ram }}%</p>
  </div>
</template>

<script setup>
defineProps({
  server: Object,
});
</script>
