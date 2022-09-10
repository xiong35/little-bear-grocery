<script lang="ts" setup>
import { defineProps } from "vue";
import { NButton, NPopconfirm } from "naive-ui";

defineProps<{
  onAdd: () => void;
  onDrop: () => void;
}>();
</script>

<template>
  <div class="add-or-drop-bar">
    <NButton ghost @click="onAdd">➕ 添加</NButton>

    <NPopconfirm
      @positive-click="onDrop"
      positiveText="✅"
      negativeText="❌"
      :positiveButtonProps="{
        ghost: true,
      }"
      :negativeButtonProps="{
        ghost: true,
        type: 'error',
      }"
    >
      <template #trigger>
        <NButton strong round type="error"> 🚮 删除全部 </NButton>
      </template>
      确定清除当前界面吗🥹
    </NPopconfirm>
  </div>
</template>

<style lang="less" scoped>
.add-or-drop-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 5px 10px;
}
</style>
