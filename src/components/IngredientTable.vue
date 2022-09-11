<script lang="ts" setup>
import { h } from "vue";
import { NDataTable, NButton } from "naive-ui";
import ShowOrEdit from "./ShowOrEdit.vue";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";
import type { Ingredient } from "@/ts";
import { rawIngredientsData } from "@/data/ingredients";

const columns: TableColumns<Ingredient> = [
  {
    title: "食材",
    key: "name",
    width: 120,
    align: "center",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row?.name || "-",
        onUpdateValue(v) {
          rawIngredientsData[index].name = v;
        },
      });
    },
  },
  {
    title: "每单位重量 / g",
    key: "gramPerUnit",
    align: "center",
    width: 100,
    render(row, index) {
      return h(ShowOrEdit, {
        value: row?.gramPerUnit?.toString() || "-",
        onUpdateValue(v) {
          const number = parseFloat(v);
          if (isNaN(number)) return;

          rawIngredientsData[index].gramPerUnit = number;
        },
      });
    },
  },
  {
    title: "删除",
    key: "delete",
    width: 50,
    align: "center",
    render(row, index) {
      return h(
        NButton,
        {
          onClick: () => {
            rawIngredientsData.splice(index, 1);
          },
          ghost: true,
        },
        {
          default: () => "🗑",
        }
      );
    },
  },
];
</script>

<template>
  <div class="ingredient-table">
    <NDataTable
      :key="(row: Ingredient) => row.name || ''"
      :columns="columns"
      striped
      :data="rawIngredientsData"
      :pagination="{ pageSize: 10 }"
    />
  </div>
</template>

<style lang="less">
.ingredient-table {
  // .n-data-table .n-data-table-table {
  //   word-break: keep-all;
  //   width: unset;
  //   min-width: 300px;
  // }
}
</style>
