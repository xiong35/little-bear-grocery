<script lang="ts" setup>
import { regenerateToBuyData } from "@/data/toBuy";
import { NButton } from "naive-ui";
import ToBuyTable from "../components/ToBuyTable.vue";
// import { defineProps } from "vue";

// const props = defineProps<{
//   name: type;
// }>();
</script>

<template>
  <div class="to-buy-view">
    <ToBuyTable></ToBuyTable>

    <div class="actions">
      <NButton @click="regenerateToBuyData">进行计算 🧮</NButton>
    </div>
  </div>
</template>

<style lang="less">
.to-buy-view {
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 5px 10px;
  }
}
</style>
