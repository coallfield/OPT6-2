
export const useColumnWidth = () => {
    

    const headerWidths = reactive<Array<number>>([300, 300, 300, 300]);
    const resizing = ref(false);
    const currentColumnIndex = ref(-1);
    const startX = ref(0);
    const startWidth = ref(0);

    const onMouseDown = (event: MouseEvent, index: number) => {
      resizing.value = true;
      currentColumnIndex.value = index;
      startX.value = event.pageX;
      startWidth.value = headerWidths[index];

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (resizing.value) {
        const newWidth = startWidth.value + (event.pageX - startX.value);
        if (currentColumnIndex.value !== -1) {
          headerWidths[currentColumnIndex.value] = newWidth;
        }
      }
    };

    const onMouseUp = () => {
      resizing.value = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
   
    onMounted(() => {
      document.addEventListener('mouseup', onMouseUp);
    });

    return {headerWidths, onMouseDown}
}