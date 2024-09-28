<script setup lang="ts">

</script>

<template>
    <section id="promo" class="relative container mx-auto h-svh md:h-full max-w-1670  mt-16 md:mt-0 pb-8 md:pb-16">
        <div class="flex flex-col sm:flex-row justify-center">
            <div class="flex items-center w-full md:w-1/2 pl-2 md:pl-8 order-2 sm:order-1">
                <ul class="flex flex-col gap-5">
                    <li class="text-custom-blue text-4xl text-center md:text-left">
                        Быстрая, надежная, качественная <span class="leading-9 animate-scale-up-down">❤️️</span></li>
                    <li class="text-white text-4xl text-center md:text-left">
                        Студия онлайн разработки 🔥
                    </li>
                    <li class="text-custom-gray text-2xl text-center md:text-left">
                        Команда с лучшими веб разработчиками в СНГ 🚀
                    </li>

                </ul>
            </div>

            <div class="flex items-center w-full md:w-1/2 p-2 order-1 sm:order-2">
                <NuxtImg src="/images/web-studio-promo2x.webp" />
            </div>
        </div>
        <div class="flex justify-center absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2">
            <NuxtImg src="/icons/arrow-down.svg" width="auto" height="70px" class="animate-up-down"
                alt="arrow down icon" />
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
        transform: translateY(-36px);
    }
}

.animate-up-down {
    animation: move-up-down 1s ease-in-out infinite;
}

@keyframes scale-up-down {

    0%,
    100% {
        font-size: 36px;
    }

    50% {
        font-size: 38px;
    }
}

.animate-scale-up-down {
    animation: scale-up-down 1s ease-in-out infinite;
}
</style>