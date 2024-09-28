<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
    <footer class="bg-transparent text-white py-4">
        <div class="container mx-auto text-center flex flex-col gap-2 sm:flex-row justify-between px-2">
            <p>&copy; {{ new Date().getFullYear() }} {{ config.public.title }}. Все права защищены.</p>
            <p>
                Разработано: &nbsp;
                <a href="https://github.com/Timures" target="_blank" rel="noopener noreferrer"
                    class="text-custom-blue hover:underline">
                    Timures
                </a>
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>