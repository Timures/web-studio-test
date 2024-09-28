<script setup lang="ts">
const props = defineProps<{
    teammate: {
        name: string,
        avatar: string,
        position: string
    }
}>()
</script>

<template>
    <div class="bg-white rounded-3xl p-8 flex flex-col items-center">
        <NuxtImg :src="`/images/avatars/${teammate.avatar}`"
            class="rounded-full w-full h-full md:w-56 md:h-56 object-cover" width="100%" height="100%"
            :alt="teammate.name" />
        <h4 class="text-black text-3xl xl:text-5xl">{{ teammate.name }}</h4>
        <p class="text-custom-text-gray text-sm md:text-xl mt-1">{{ teammate.position }}</p>
    </div>
</template>

<style lang="scss" scoped></style>