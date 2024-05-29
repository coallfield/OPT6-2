<template>
    <UILabel>{{ item.columnName }}</UILabel>
    <th class="table-container__table__th">
        
        <div class="table-container__table__th__item-container">
           
            <slot></slot>
            <UIArrowButton  @click="togglePopup(props.index)"
                v-if="(props.item.columnName === 'Наименование единицы' || props.item.columnName === 'Название товара') && props.item.rowItems[index] !== ''">
            </UIArrowButton>
            
        </div>
        <UITableAddItemsPopup @rename="renameItem()" v-if="isPopupVisible(props.index)"></UITableAddItemsPopup>
    </th>
    
</template>

<script lang="ts" setup>





import type { ITableData } from '~/interfaces/ITableData';
const tableStore = useTableDataStore()
const props = defineProps<{
    item: ITableData,
    index: number
}>()
const visiblePopups = ref<{ [key: string]: boolean }>({});
const isPopupVisible = (index: number) => {
            const key = `${index}`;
            return !!visiblePopups.value[key];
        };
        const togglePopup = (index: number) => {
            const key = `${index}`;
            if (visiblePopups.value[key]) {
                visiblePopups.value[key] = !visiblePopups.value[key];
            } else {
                visiblePopups.value[key] = true;
            }
        };
const renameItem = () => {
    tableStore.renameRowItem(props.index, props.item)
}

</script>

<style scoped>
.table-container__table__th {
    height: 44px;
    text-align: left;
    padding-left: 10px;
    position: relative;

    font-size: 16px;

    
}
.table-container__table__th__item-container {

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
    height: 35px;
    padding: 0px 0px 0px 15px ;
    border-radius: 5px;
    border: solid 1px #ccc;
    background-color: #fff;
    position: absolute; 
    left: 0; 
    right: 0; 
    bottom: 0;
    top: 0;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    
}

</style>