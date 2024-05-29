<template>

    <thead class="table-container__table__thead">

        <tr class="table-container__table__tr">
            <th class="table-container__table__th_header" style="width: 44px;">
                <UIResizeLine></UIResizeLine>
            </th>
            <th class="table-container__table__th_header" style="width: 22px;">
                <UIResizeLine></UIResizeLine>
            </th>

            <th 
                
                draggable="true" 
                @drop="dropColumn(index)" 
                @dragover.prevent
                @dragenter.prevent
                @dragstart="dragColumn(index)" 
                v-for="(column, index) in props.tableColumns"
                :style="{ width: headerWidths[index] + 'px' }" 
                class="table-container__table__th_header">
                <UIResizeLine @click="onMouseDown($event, index)"></UIResizeLine>{{ column.columnName }}
            </th>


        </tr>
    </thead>
</template>


<script lang="ts" setup>

import type { ITableData } from '~/interfaces/ITableData';

const props = defineProps<{
    tableColumns: ITableData[]
}>()
const {dragColumn, dropColumn} = useRowsColumnDrag()
const {headerWidths, onMouseDown} = useColumnWidth()
</script>



<style scoped>
.table-container__table__thead {
    border: 2px solid #eeeff1;
}
.table-container__table__th_header {
   cursor: grab;
    user-select: none;
}
.table-container__table__th_header {
    height: 44px;
    text-align: left;

    position: relative;
  
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
   


}


</style>