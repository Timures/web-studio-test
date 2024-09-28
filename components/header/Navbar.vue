<script setup lang="ts">
const mainNav = [
    { id: 1, url: '#team', title: "команда" },
    { id: 2, url: '#about', title: "о нас" }
]

</script>

<template>
    <nav>
        <ul class="flex gap-5 gap-10:md">
            <li v-for="link in mainNav" :key="link.id">
                <HeaderNavItem :link="link" />
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>