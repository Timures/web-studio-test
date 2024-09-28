<script setup lang="ts">
const props = defineProps<{
    link: {
        url: string,
        title: string
    }
}>()

const scrollToSection = (event: { preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => any; }; }) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80; // 60px отступ
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};
</script>

<template>
    <a :href="link.url" @click="scrollToSection" class="text-white text-xl hover:text-custom-blue">{{ link.title
        }}</a>
</template>

<style lang="scss" scoped></style>