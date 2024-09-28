<script setup lang="ts">
const props = defineProps<{
    link: {
        url: string,
        title: string
    }
}>()
</script>

<template>
    <NuxtLink :to="link.url" class="text-white text-xl hover:text-custom-blue">{{ link.title }}</NuxtLink>
</template>

<style lang="scss" scoped></style>