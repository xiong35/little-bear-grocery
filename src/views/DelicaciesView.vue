<script lang="ts" setup>
import { delicaciesData } from "@/data/delicacies";
import DelicaciesTable from "../components/DelicaciesTable.vue";
import AddOrDropBar from "../components/AddOrDropBar.vue";
</script>

<template>
  <div class="delicacies-view">
    <DelicaciesTable></DelicaciesTable>

    <AddOrDropBar
      :onDrop="() => (delicaciesData.length = 0)"
      :onAdd="() => delicaciesData.push({})"
    ></AddOrDropBar>
  </div>
</template>

<style lang="less">
.delicacies-view {
  padding: 30px 5px 10px;

  .n-data-table-th {
    white-space: pre;
  }
}
</style>
