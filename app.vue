<script setup lang="ts">
const config = useRuntimeConfig();
useHead({
  title: config.public.title,
  meta: [
    { name: 'description', content: config.public.description }
  ],
  bodyAttrs: {
    class: 'test'
  },
  htmlAttrs: {
    class: 'scroll- smooth'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>


<template>
  <NuxtLayout>
    <AppPromo />
    <AppTeam />
    <AppAbout />
  </NuxtLayout>
</template>
