<template>
    <tbody class="table-container__table">
    
            <tr 
                :class="{ 'table-container__table__tr_over': tableStore.tableData[index].isOver }" 
                class="table-container__table__tr"
               
                v-for="(item, index) in props.tableItems[0].rowItems" 
                draggable="true" 
                @drop="dropRows(index), tableStore.tableData[index].isOver = false" 
                @dragover.prevent="tableStore.tableData[index].isOver = true" 
                @dragleave.prevent="tableStore.tableData[index].isOver = false" 
                @dragenter.prevent="watchEnter(index)"
                @dragstart="dragRows(index)">
                    <UILabel>Номер строки</UILabel>
                    <th 
                        class="table-container__table__th table-container__table__th_drag">
                        <UIDragButton></UIDragButton><span>{{ index + 1 }}</span>
                    </th>
                    <UILabel>Действие</UILabel>
                    <th @click="tableStore.deleteRow(index)" class="table-container__table__th table-container__table__th_delete">
                        <UIActionButton ></UIActionButton>
                    </th>
                    
                    <UIThElement :item="i" :index="index" v-for="(i) in props.tableItems.filter(el => el.isActivated === true)">{{ i.rowItems[index] }}</UIThElement>
                    
            </tr>
    </tbody>

</template>

<script lang="ts" setup>

import type { ITableData } from '~/interfaces/ITableData';
const tableStore = useTableDataStore()
const props = defineProps<{
    tableItems: ITableData[]
}>()

const {dragRows, dropRows, watchEnter} = useRowsColumnDrag()
</script>

<style scoped>
.table-container__table__th_drag {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    cursor: grab;
    position: relative;
    width: 44px;
    height: 44px;

 }

 .table-container__table__th_delete {
  
    cursor: pointer;
    width: 22px;
    height: 22px;
 }

.table-container__table__tr_over {
    border-radius: 5px;
    border: dashed 2px #a6b7d4;
    background-color: #fbfcfd;
    
}
.table-container__table__tr_over > * {
   opacity: 0;
}

@media(max-width: 1200px) {
    .table-container__table__tr {
        display: flex;
        flex-direction: column;
        grid-gap: 5px;
        padding: 15px 15px 25px ;
  border-radius: 10px;

  border: solid 1px #eeeff1;
  background-color: #fff;
    }
    .table-container__table {
        padding: 15px 15px 25px;
        display: flex;
        flex-direction: column;
        grid-gap: 5px;
        background-color: rgb(253, 253, 253);
    }
}
</style>