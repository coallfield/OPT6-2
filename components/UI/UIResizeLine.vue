<template>
    <span class="table-container__names__resize-line"></span>
</template>

<script lang="ts" setup>
   

   

</script>

<style scoped>
.table-container__names__resize-line {
    height: 100%;
    width: 2px;
    background-color: #eeeff1;
    cursor: col-resize;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
}
.table-container__names__resize-line:active{
  height:400px;
}

.table-container__names__resize-line:hover{
  height:400px;
}


</style>