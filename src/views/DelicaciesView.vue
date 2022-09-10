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
        <NButton
          :style="{ margin: '10px auto', display: 'flex' }"
          strong
          round
          type="error"
        >
          🚮 删除全部
        </NButton>
      </template>
      确定清除当前界面吗🥹
    </NPopconfirm>
  </div>
</template>

<style lang="less" scoped>
.delicacies-view {
  padding: 30px 5px 10px;
}
</style>
