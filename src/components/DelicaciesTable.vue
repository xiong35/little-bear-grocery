<script lang="ts" setup>
import { h, ref } from "vue";
import { NDataTable } from "naive-ui";
import ShowOrEdit from "./ShowOrEdit.vue";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";

const createData = () => [
  {
    key: 0,
    name: "John Brown",
    age: "32",
    address: "New York No. 1 Lake Park",
  },
  {
    key: 1,
    name: "Jim Green",
    age: "42",
    address: "London No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Joe Black",
    age: "32",
    address: "Sidney No. 1 Lake Park",
  },
];

const data = ref(createData());
const columns: TableColumns<string> = [
  {
    title: "Name",
    key: "name",
    width: 150,
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.name,
        onUpdateValue(v) {
          data.value[index].name = v;
        },
      });
    },
  },
  {
    title: "Age",
    key: "age",
    width: 100,
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.age,
        onUpdateValue(v) {
          data.value[index].age = v;
        },
      });
    },
  },
  {
    title: "Address",
    key: "address",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.address,
        onUpdateValue(v) {
          data.value[index].address = v;
        },
      });
    },
  },
];
</script>

<template>
  <NDataTable
    :key="(row) => row.key"
    :columns="columns"
    :data="data"
    :pagination="{ pageSize: 10 }"
  />
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>
