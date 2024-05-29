
import type { ITableData } from "~/interfaces/ITableData"


export const useTableDataStore = defineStore('tableStore', () => {
    const isAdding = ref(false)
    const tableData = ref<ITableData[]>([
        {   
            isActivated: true,
            columnName: 'Наименование единицы',
            isOver: false,
            rowItems: ['Мраморный щебень фр. 2-5 мм, 25кг', 'Мраморный щебень фр. 2-5 мм, 25кг', 'Мраморный щебень фр. 2-5 мм, 25кг', 'Мраморный щебень фр. 2-5 мм, 25кг']
        },
        {   
            isActivated: true,
            columnName: 'Цена',
            isOver: false,
            rowItems: [1231, 1231, 1231, 1231]
        },
        {   
            isActivated: true,
            columnName: 'Кол-во',
            isOver: false,
            rowItems: [12, 12, 1, 12]
        },
        {   
            isActivated: true,
            columnName: 'Название товара',
            isOver: false,
            rowItems: ['Мраморный щебель', 'Мраморный щебель', '', 'Мраморный щебель']
        },
        {   
            isActivated: true,
            columnName: 'Итого',
            isOver: false,
            rowItems: [1231, 1231, 1231, 1231]
        }
    ])

    const changeDragDropColumns = (dragStart: number, dragDrop: number) => {

        const activatedColumns = tableData.value.filter(col => col.isActivated);


        if (activatedColumns.length === 0 || dragStart >= activatedColumns.length || dragDrop >= activatedColumns.length) {
            return;
        }


        const realDragStartIndex = tableData.value.findIndex(col => col === activatedColumns[dragStart]);
        const realDragDropIndex = tableData.value.findIndex(col => col === activatedColumns[dragDrop]);


        const tempCol = tableData.value[realDragStartIndex];
        tableData.value[realDragStartIndex] = tableData.value[realDragDropIndex];
        tableData.value[realDragDropIndex] = tempCol;
    }
    const changeDragDropRows = (dragStart: number, dragDrop: number) => {

        tableData.value.forEach((el: ITableData) => {
            const tempCol = el.rowItems[dragStart]
            el.rowItems[dragStart] = el.rowItems[dragDrop]
            el.rowItems[dragDrop] = tempCol
        })
    }

    const deleteRow = (index: number) => {
        tableData.value.forEach(el => {
            el.rowItems.splice(index, 1);
        })
    }

   
    const renameRowItem = (index: number, item: ITableData) => {
        tableData.value.forEach((el) => {
            if(el === item) {
                el.rowItems[index] = 'Другой материал, 30кг'
            }
        })
    }

    const sendFakeData = async (data: ITableData[]) => {
        try {
            const response = await fetch('https//api/fake-api', {
                method: 'POST',
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                throw new Error('Не удалось сохранить данные')
            }
            
        } catch (error) {
            console.log(error)
        }
        

    }


    return {changeDragDropColumns, changeDragDropRows, deleteRow, tableData, isAdding, renameRowItem, sendFakeData}
})