<script setup lang="ts">
const props = defineProps<{
    item: {
        emoji: string,
        title: string,
        desc: string
    }
}>()
</script>

<template>
    <div class="flex flex-col justify-center items-center p-8 rounded-3xl bg-custom-about-gray h-full">
        <span aria-hidden="true" class="text-5xl md:text-7xl xl:text-9xl">{{ item.emoji }}</span>
        <h5 class="text-2xl md:text-3xl xl:text-4xl text-black mt-3 xl:mt-0 text-center md:text-left">{{ item.title }}
        </h5>
        <p class="text-custom-dark-gray text-xl md:text-2xl mt-3 md:mt-0 text-center md:text-left">{{ item.desc }}</p>
    </div>
</template>

<style lang="scss" scoped></style>