<script lang="ts" setup>
import { h } from "vue";
import { type DataTableRowKey, NDataTable, NTooltip, NSwitch } from "naive-ui";
import type { ToBuy } from "@/ts";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";
import { toBuyData, sortedToBuyData } from "@/data/toBuy";

const columns: TableColumns<ToBuy> = [
  {
    type: "selection",
    width: 20,
  },
  {
    title: "渠道",
    key: "totalGram",
    width: 50,
    align: "center",
    render(row) {
      // <n-switch v-model:value="active" />
      return h(
        NSwitch,
        {
          value: row.buyFrom === "online",
          onUpdateValue(v) {
            toBuyData.find((d) => d.ingredName === row.ingredName)!.buyFrom = v
              ? "online"
              : "offline";
          },
          size: "small",
        },
        { checked: () => "🛒", unchecked: () => "📦" }
      );
    },
  },
  {
    title: "食材",
    key: "ingredName",
    width: 70,
    align: "center",
    render(row) {
      return row.ingredName;
    },
  },
  {
    title: "总重",
    key: "totalGram",
    width: 50,
    align: "center",
    render(row) {
      if (!row.description) return row.totalGram;

      return h(
        NTooltip,
        {
          trigger: "click",
        },
        { trigger: () => row.totalGram, default: () => row.description }
      );
    },
  },
  {
    title: "参考份数",
    key: "totalUnits",
    width: 40,
    align: "center",
    render(row) {
      if (!row.totalUnits) return "-";
      return row.totalUnits?.toFixed(2);
    },
  },
  // {
  //   title: "参考份数",
  //   key: "totalGram",
  //   width: 70,
  //   align: "center",
  //   render(row) {
  //     return row.;
  //   },
  // },
];

const rowKey = (row: ToBuy) => row.ingredName;

function handleCheck(rowKeys: DataTableRowKey[]) {
  const checkedKeys = new Set(rowKeys);
  toBuyData.forEach((d) => {
    d.isBought = checkedKeys.has(d.ingredName);
  });
}
</script>

<template>
  <div class="to-buy-table">
    <NDataTable
      :rowKey="rowKey"
      :columns="columns"
      :checkedRowKeys="
        toBuyData.filter((d) => d.isBought).map((d) => d.ingredName)
      "
      striped
      :data="sortedToBuyData"
      @update:checkedRowKeys="handleCheck"
    />
  </div>
</template>

<style lang="less">
.to-buy-table {
  .n-data-table .n-data-table-table {
    word-break: keep-all;
    width: unset;
    min-width: calc(100vw - 20px);
  }

  .n-switch.n-switch--active .n-switch__rail {
    background-color: var(--n-rail-color);
  }
}
</style>
