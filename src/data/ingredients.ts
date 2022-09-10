import type { Ingredient } from "@/ts";
import { computed, reactive } from "vue";
type ValidIngred = Required<Pick<Ingredient, "name">> &
  Omit<Ingredient, "name">;

export const ingredientsData = computed<ValidIngred[]>(() => {
  const validIngreds = rawIngredientsData.filter(
    (i) => i.name !== undefined
  ) as ValidIngred[];

  if (validIngreds.length > 0) return validIngreds;
  else return [{ name: "西北风" }];
});

export const rawIngredientsData = reactive<Ingredient[]>([
  { name: "土豆" },
  { name: "青菜" },
]);
