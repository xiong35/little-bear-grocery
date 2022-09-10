<script lang="ts" setup>
import { delicaciesData } from "@/data/delicacies";
import { NButton, NPopconfirm } from "naive-ui";
import DelicaciesTable from "../components/DelicaciesTable.vue";

function clearData() {
  delicaciesData.length = 0;
}
</script>

<template>
  <div class="delicacies-view">
    <DelicaciesTable></DelicaciesTable>

    <div class="actions">
      <NButton ghost @click="delicaciesData.push({})">➕ 添加</NButton>

      <NPopconfirm
        @positive-click="clearData"
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
  </div>
</template>

<style lang="less" scoped>
.delicacies-view {
  padding: 30px 5px 10px;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 5px 10px;
}
</style>
