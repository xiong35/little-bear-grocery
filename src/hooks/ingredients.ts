import { TOKEN_PREFIX } from "@/constants";
import type { rawIngredientsData as _rawIngredientsData } from "@/data/ingredients";
import type { Ingredient } from "@/ts";
import { onMounted, watch } from "vue";

const INGREDIENTS_KEY = `${TOKEN_PREFIX}-ingredients`;

export function useIngredients(rawIngredientsData: typeof _rawIngredientsData) {
  onMounted(() => {
    const storedDelicaciesDataStr =
      localStorage.getItem(INGREDIENTS_KEY) || "[]";

    try {
      const storedDelicaciesData: Ingredient[] = JSON.parse(
        storedDelicaciesDataStr
      );
      rawIngredientsData.length = 0;
      storedDelicaciesData.forEach((data) => {
        rawIngredientsData.push(data);
      });
    } catch {
      localStorage.removeItem(INGREDIENTS_KEY);
    }
  });

  watch(
    rawIngredientsData,
    (newValue) => {
      localStorage.setItem(INGREDIENTS_KEY, JSON.stringify(newValue));
    },
    { deep: true, immediate: false }
  );
}
