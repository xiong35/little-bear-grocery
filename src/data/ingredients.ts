import type { Ingredient } from "@/ts";
import { computed, reactive } from "vue";

export const ingredientsData = computed(
  () =>
    rawIngredientsData.filter((i) => i.name !== undefined) as (Required<
      Pick<Ingredient, "name">
    > &
      Omit<Ingredient, "name">)[]
);

export const rawIngredientsData = reactive<Ingredient[]>([
  { name: "土豆" },
  { name: "青菜" },
]);
