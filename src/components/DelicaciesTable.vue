<script lang="ts" setup>
import { h } from "vue";
import { NDataTable, NDatePicker, NButton } from "naive-ui";
import ShowOrEdit, { type ShowOrEditProps } from "./ShowOrEdit.vue";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";
import { delicaciesData } from "@/data/delicacies";
import type { DelicaciesData } from "@/ts";
import { ingredientsData } from "@/data/ingredients";

const columns: TableColumns<DelicaciesData> = [
  {
    title: "菜品",
    key: "name",
    width: 100,
    align: "center",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row?.name || "-",
        onUpdateValue(v) {
          delicaciesData[index].name = v;
        },
      });
    },
  },
  {
    title: "时间",
    key: "schedule",
    align: "center",
    width: 130,
    render(row, index) {
      return h(NDatePicker, {
        value: row?.schedule,
        size: "small",
        onUpdateValue(v) {
          delicaciesData[index].schedule = v;
        },
      });
    },
  },
  {
    title: "原料表",
    align: "center",
    key: "ingredients",
    children: ingredientsData.value
      .map((ingred) => ({
        key: ingred.name,
        title: ingred.name,
        width: 70,
        render(row, rowIndex) {
          const gradNum = row?.ingredients?.[ingred.name] || "-";

          return h<ShowOrEditProps>(ShowOrEdit, {
            value: gradNum.toString(),
            inputProps: {
              inputProps: {
                type: "number",
              },
            },
            onUpdateValue(v) {
              const number = parseFloat(v);
              if (isNaN(number)) return;

              delicaciesData[rowIndex].ingredients ??= {};

              delicaciesData[rowIndex].ingredients![ingred.name] = number;
            },
          });
        },
      })),
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
            delicaciesData.splice(index, 1);
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
  <NDataTable
    :key="(((row: any) => row.key) as any as string)"
    :columns="columns"
    striped
    :data="delicaciesData"
    :pagination="{ pageSize: 10 }"
    :scrollX="500"
  />
</template>

<style lang="less">
.n-data-table .n-data-table-table.n-data-table-table {
  word-break: keep-all;
  width: unset;
  min-width: 500px;
}
</style>