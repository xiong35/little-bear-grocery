import type { Ingredient } from "@/ts";
import { reactive } from "vue";

export const ingredientsData = reactive<Ingredient[]>([
  { name: "土豆" },
  { name: "青菜" },
]);
