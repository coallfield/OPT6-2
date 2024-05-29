<template>
    <table class="table-container__table">
        <UITableHead v-if="innerWidth > 1200" :tableColumns="tableStore.tableData.filter(el => el.isActivated === true)"></UITableHead>
        <UITableBody :tableItems="tableStore.tableData"></UITableBody>
      
    </table>
   
</template>

<script lang="ts" setup>


const tableStore = useTableDataStore()
const innerWidth = ref(1920)
onMounted(() => {
    innerWidth.value = window.innerWidth
})
</script>



<style scoped>
.table-container__table {
    table-layout: fixed;
    overflow: hidden;
    margin-top: 10px;
}
</style>