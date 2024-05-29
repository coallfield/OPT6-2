export const useRowsColumnDrag = () => {
    const tableStore = useTableDataStore()
    let dragStart: number, dragDrop: number

    const dragColumn = (index: number) => {
        dragStart = index
    }
    const dropColumn = (index: number) => {
        dragDrop = index
        tableStore.changeDragDropColumns(dragStart, dragDrop)
    }

    const dragRows = (index: number) => {
        dragStart = index
    }
    const dropRows = (index: number) => {
        dragDrop = index
        tableStore.changeDragDropRows(dragStart, dragDrop)
    }
    const watchEnter = (index: number) => {
        const temp = dragStart
        dragStart = index
        index = temp
        tableStore.changeDragDropRows(dragStart, index)
        
    }

    return {dragColumn, dropColumn, dragRows, dropRows, watchEnter}
}
