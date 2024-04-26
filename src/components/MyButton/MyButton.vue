<template>
  <el-button :type="type" :disabled="disabled" :size="size">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: String,
    disabled: Boolean,
    size: String,
  },
};
</script>

<style scoped>
/* 样式可以根据需要自行修改 */
</style>
