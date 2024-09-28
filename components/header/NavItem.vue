<script setup lang="ts">

const props = defineProps<{
    link: {
        url: string;
        title: string;
    }
}>();

const scrollToSection = (event: MouseEvent) => {
    event.preventDefault();
    const targetId = props.link.url; // Используем props для получения URL
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80; // 80px отступ
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};
</script>

<template>
    <a :href="link.url" @click="scrollToSection" class="text-white text-xl hover:text-custom-blue focus:text-white">
        {{ link.title }}
    </a>
</template>

<style lang="scss" scoped></style>