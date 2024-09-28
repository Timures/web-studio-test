<script setup lang="ts">
const teamList = [
    { id: 1, avatar: 'stamp_qw.webp', name: 'stamp_qw', position: 'founder\\\ full-stack developer' },
    { id: 1, avatar: 'gladiator.webp', name: 'gladiator', position: 'founder\\\ full-stack developer' },
    { id: 1, avatar: 'timures.webp', name: 'timures', position: 'founder\\\ frontend developer' }
]
</script>

<template>
    <ul class="w-full mt-16 flex flex-col gap-5 md:gap-3 sm:flex-row justify-between px-2 md:px-12 xl:px-24 2xl:px-52">
        <li v-for="teammate in teamList" :key="teammate.id">
            <TeamItem :teammate />
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>