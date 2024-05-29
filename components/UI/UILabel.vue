<template >

<label v-if="innerWidth < 1200" class="table-container__table__label"><slot></slot></label>
</template>


<script lang="ts" setup>
const innerWidth = ref(1920)
onMounted(() => {
    innerWidth.value = window.innerWidth
})
</script>

<style scoped>
.table-container__table__label {
    font-size: 10px;
    color: #8f8f8f;
    margin-left: 15px;
}
</style>
