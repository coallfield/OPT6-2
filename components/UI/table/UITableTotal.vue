<template>

    <div class="table-container__total">
        <div class="table-container__total__items">
            <div class="table-container__total__items__whole-info">
                <div class="table-container__total__items__whole-info__item">
                    <span>Сумма:</span>
                    <span class="table-container__total__items__whole-info__item_count">{{totalData(TotalKey.PRICE)}}руб</span>
                </div>
                <div class="table-container__total__items__whole-info__item">
                    <span>Кол-во:</span>
                    <span class="table-container__total__items__whole-info__item_count">{{totalData(TotalKey.COUNT)}}шт</span>
                </div>
                <div class="table-container__total__items__whole-info__item">
                    <span>Общий вес:</span>
                    <span class="table-container__total__items__whole-info__item_count">{{totalData(TotalKey.WEIGHT)}}кг</span>
                </div>
            </div>
            <div class="table-container__total__items__total-price">
                <div class="table-container__total__items__total-price__item">
                    <span>Общая сумма:</span>
                    <span class="table-container__total__items__whole-info__item_count">{{totalData(TotalKey.PRICE)}}руб</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { TotalKey } from '~/enums/totalKey';
    const tableStore = useTableDataStore()

const totalData = (key: TotalKey) => {
    let total: number = 0
    tableStore.tableData.filter(el => el.isActivated === true).forEach((el) => {

        if (el.columnName === key) {
            if (el.columnName === TotalKey.WEIGHT) {
                el.rowItems.forEach((el) => {
                    if (typeof el === 'string')
                    total += Number(el.match(/\d+(?=кг)/)) 
                })
            } else {
                el.rowItems.forEach((el) => {
                    if (typeof el === 'number')
                        total += el
                })

            }

        }
    })
    return total
}

</script>

<style scoped>
.table-container__total {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content:flex-end;
    
}
.table-container__total__items {
    margin-right: 15px;
    width: 304px;
  
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
  
}
 
.table-container__total__items__whole-info {
    height: 105px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: solid 1px #eeeff1;
    background-color: #fbfcfd;
    display: flex;
    flex-direction: column;
    grid-gap: 15px
    
}
.table-container__total__items__whole-info__item {
    display: flex;
    justify-content: space-between;
    
    font-size: 14px;  
    color: #8f8f8f;

}
.table-container__total__items__whole-info__item_count {
    color: black;
}

.table-container__total__items__total-price {
    height: 45px;
    border-radius: 5px;
    border: solid 1px #eeeff1;
    background-color: #fbfcfd;
    padding: 15px;
}
.table-container__total__items__total-price > * {
    color: black;
    font-weight:600;
    
}
.table-container__total__items__total-price__item {
    display: flex;
    justify-content: space-between;
    
}
@media(max-width: 1200px) {
    .table-container__total {
        justify-content: center;
    }
}
</style>