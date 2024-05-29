<template>
    <div class="main-page" @click="isFilter=false">
        <section class="sidebar" v-if="innerWidth > 1200"></section>
        <section class="content">
            <div class="table">
                <TableHeader></TableHeader>
                <section>
                    <div class="table-container">
                        <div v-if="innerWidth > 1200" class="table-container__save">
                            <span @click="tableStore.sendFakeData(tableStore.tableData), isChange=false" v-if="isChange" class="table-container__save__text">Сохранить изменения</span>
                            <UISettingsButton  @click.stop="isFilter=true"></UISettingsButton>
                            <UIFilter @click.stop v-if="isFilter"></UIFilter>
                        </div>

                        <UITable></UITable>
                        
                        <UITableTotal></UITableTotal>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">



const tableStore = useTableDataStore()

const isChange = ref(false)

watch(() => tableStore.tableData, () => {
    isChange.value = true
}, {deep: true})

const isFilter = ref(false)
const innerWidth = ref(1920)
onMounted(() => {
    innerWidth.value = window.innerWidth
})

</script>

<style >
.main-page {
    display: flex;
    flex-direction: row;
}

.sidebar {
    width: 229px;
    height: 100vh;

    background-image: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
}

.content {
    width: 100%;
    padding: 25px 25px 0px 25px;
}

.table-container {
    position: relative;
    width: 100%;
    height: auto;
    margin: 25px 25px 0px 0px;
    padding: 9px 1px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.7);
    border: solid 1px #eeeff1;
    background-color: #fff;
    display: flex;
    flex-direction: column;

}

.table-container__save {
    padding-right: 15px;
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    grid-gap: 20px;
    align-items: center;
    position: relative;
    
}
.table-container__table {
    table-layout:fixed;
 
   border-collapse: collapse;
}

.table-container__save__text {
    color: #a6b7d4;
    cursor: pointer;
}

.table-container__table__thead {
    border: 2px solid #eeeff1;
}


@media(max-width: 1200px) {
    
    
    .table-container {
        margin: 25px 0px;
        box-shadow: none;
        border: none;
        
    }
    
}
</style>

