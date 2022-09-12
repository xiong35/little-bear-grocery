<script lang="ts" setup>
import IngredientTable from "../components/IngredientTable.vue";
import AddOrDropBar from "../components/AddOrDropBar.vue";
import { rawIngredientsData } from "@/data/ingredients";
</script>

<template>
  <div class="ingredients-settings-view">
    <IngredientTable></IngredientTable>
    <AddOrDropBar
      :onDrop="() => (rawIngredientsData.length = 0)"
      :onAdd="() => rawIngredientsData.push({})"
    ></AddOrDropBar>
  </div>
</template>
