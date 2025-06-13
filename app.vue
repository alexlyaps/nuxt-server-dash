<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtPage />
    </UApp>
  </div>
</template>

<script setup>
const { $pusher } = useNuxtApp();
console.log("Pusher instance:", $pusher); // Должен вывести объект Pusher
</script>
