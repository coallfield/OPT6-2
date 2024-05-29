

<template>
    <section>

        <div class="table__title">
            <span>Проведение ТО и мелкий ремонт</span>
        </div>
        <div class="table__navbar">
            <div class="table__navbar__links">
                <span class="table__navbar__links__link">Общие</span>
                <span class="table__navbar__links__link table__navbar__links__link_active">Товары</span>
                <span class="table__navbar__links__link">Доп.расходы</span>
            </div>
            <div class="table__navbar__settings">
                <UISettingsButton></UISettingsButton>
            </div>
        </div>
        <div class="table__button-container">
            <button class="table__button-container__button"><img src="../public/plus.svg"><span>Добавить строку</span></button>
         
                    
        </div>
    </section>

</template>

<script lang=ts setup>
const tableStore = useTableDataStore()
</script>

<style scoped>
.table__title {
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
}

.table__navbar {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.table__navbar__links {
    display: flex;
    flex-direction: row;
    grid-gap: 25px
}
.table__navbar__links__link {
    cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1253a2;
}
.table__navbar__links__link_active {
    color: #000;
    cursor: default;
}
.table__navbar__settings {
    margin-right: 15px;
    cursor: pointer;
}

.table__button-container {
    margin-top: 25px;
    width: 100%;
    max-width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.7);
  border: solid 1px #eeeff1;
  background-color: #fff;
}

.table__button-container__button {
    margin-left: 25px;
    width: 146px;
  height: 35px;
  padding: 10px 15px 10px 10px;
  border-radius: 5px;
  background-color: #2f8cff;
  border: none;
  outline: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-gap: 7px;
  cursor: pointer;
  transition: ease-in-out 0.3s;
}
.table__button-container__button:hover {
    background-color: #3f87df;
}

</style>