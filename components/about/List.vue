<script setup lang="ts">
const aboutList = [
    { id: 1, emoji: '🤓', title: 'Команда основана в 2019 году', desc: 'Сначала это были маленькие пет проекты' },
    { id: 2, emoji: '🥳', title: 'Старт фриланс карьеры в 2020', desc: 'Начали брать мелкие заказы на фриланс' },
    { id: 3, emoji: '🚀', title: 'Набор сотрудников в команду', desc: 'В настоящее время расширяем состав команды' },
    { id: 4, emoji: '📈', title: 'Работа с большими компаниями', desc: 'в 2022 начали работать с большими компаниями' }
]
</script>

<template>
    <ul
        class="rounded-0 md:rounded-3xl bg-white px-2 py-12 md:px-12 xl:px-28 md:py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-24 mt-16">
        <li v-for="item in aboutList" :key="item.id">
            <AboutItem :item />
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>