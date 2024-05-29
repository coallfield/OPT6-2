<template>
<div class="filter-items">
    <div v-for="(column, index) in tableStore.tableData" class="filter-items__item">
        <input type="checkbox" v-model="column.isActivated">
        <label>{{ column.columnName }}</label>
    </div>
</div>

</template>


<script lang="ts" setup>
const tableStore = useTableDataStore()



</script>


<style scoped>
.filter-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
    padding: 20px 0px 20px 10px;
    height:auto;
    width: 300px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.7);
    border: solid 1px #eeeff1;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    z-index: 9999 !important;
}

.filter-items__item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    grid-gap: 5px;
  

}
</style>