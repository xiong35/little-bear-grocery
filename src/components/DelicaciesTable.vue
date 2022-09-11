<script lang="ts" setup>
import { h, nextTick } from "vue";
import { NDataTable, NDatePicker, NButton } from "naive-ui";
import ShowOrEdit, { type ShowOrEditProps } from "./ShowOrEdit.vue";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";
import { delicaciesData, sortByTime } from "@/data/delicacies";
import type { Delicacies } from "@/ts";
import { ingredientsData, rawIngredientsData } from "@/data/ingredients";

const columns: TableColumns<Delicacies> = [
  {
    title: "菜品",
    key: "name",
    width: 100,
    fixed: "left",
    align: "center",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.name || "-",
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
    width: 145,
    render(row, index) {
      return h(NDatePicker, {
        value: row.schedule,
        size: "small",
        onUpdateValue(v) {
          delicaciesData[index].schedule = v;
          nextTick(sortByTime);
        },
      });
    },
  },
  {
    title: "原料表 / g",
    key: "ingredients",
    children: ingredientsData.value.map((ingred) => ({
      key: ingred.name,
      title() {
        return h(
          "div",
          {
            style: {
              transform:
                ingred.name.match(/./gu)!.length > 3 ? "scale(.8)" : undefined,
            },
          },
          ingred.name
        );
      },
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
            rawIngredientsData.find((d) => d.name === ingred.name)!.lastUsedAt =
              Math.floor(Date.now() / 1000);
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

const rowKey = (row: Delicacies) => row.name || "";
</script>

<template>
  <NDataTable
    :rowKey="rowKey"
    :columns="columns"
    striped
    :data="delicaciesData"
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
