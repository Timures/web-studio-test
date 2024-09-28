<script setup lang="ts">
const config = useRuntimeConfig();
useHead({
  title: config.public.title,
  meta: [
    { name: 'description', content: config.public.description }
  ],
  htmlAttrs: {
    class: 'scroll-smooth'
  },

})
</script>


<template>
  <NuxtLayout>
    <AppPromo />
    <AppTeam />
    <AppAbout />
  </NuxtLayout>
</template>
