<script setup lang="ts">

</script>

<template>
    <section id="promo"
        class="container mx-auto h-svh md:h-full max-w-1670 flex justify-center flex-wrap md:flex-nowrap mt-16 md:mt-0">
        <div class="flex items-center w-full md:w-1/2 pl-2 md:pl-8">
            <ul class="flex flex-col gap-5 mt-24 mt-0:md">
                <li class="text-custom-blue text-4xl text-center md:text-left">
                    Быстрая, надежная, качественная ❤️️</li>
                <li class="text-white text-4xl text-center md:text-left">
                    Студия онлайн разработки 🔥
                </li>
                <li class="text-custom-gray text-2xl text-center md:text-left">
                    Команда с лучшими веб разработчиками в СНГ 🚀
                </li>

            </ul>
        </div>

        <div class="flex items-center w-full md:w-1/2 p-2">
            <NuxtImg src="/images/web-studio-promo2x.webp" class="animate-up-down" />
        </div>
    </section>
</template>

<style lang="css">
@keyframes move-up-down {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-24px);
    }
}

.animate-up-down {
    animation: move-up-down 4s ease-in-out infinite;
}
</style>