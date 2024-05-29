<template>
    <div class="add-items-popup">
        <div @click="emits('rename')" v-for="i in 5">Другой материал, 30кг</div>
    </div>

</template>

<script lang="ts" setup>
const emits = defineEmits(['rename'])
</script>



<style>
.add-items-popup {
    margin-top: 30px;
    margin-left: 83px;
    position:fixed;
    width: 603px;
    height: auto;
    padding: 7px 317px 7px 10px;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    grid-gap: 14px;
    z-index: 99999999999
}

.add-items-popup>* {
    font-size: 14px;
    padding: 7px;
}

.add-items-popup>*:hover {
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;
    text-wrap: nowrap;
}

@media(max-width: 765px) {
    .add-items-popup {
        right: 0%;
        left: 0%;
        margin-top: 50px;
        width: 400px;
        position:absolute;
    }
}

</style>