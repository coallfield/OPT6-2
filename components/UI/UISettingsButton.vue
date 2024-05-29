<template>
    
    <img v-if="innerWidth > 1200" class="settings-button" src="/settings.svg">
</template>

<script lang="ts" setup>
const innerWidth = ref(1920)
onMounted(() => {
    innerWidth.value = window.innerWidth
})
</script>

<style scoped>
.settings-button {
    cursor: pointer;
}

</style>
