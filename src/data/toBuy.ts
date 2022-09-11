import type { ToBuy } from "@/ts";
import { computed, reactive, watch } from "vue";
import { delicaciesData } from "./delicacies";
import { ingredientsData } from "./ingredients";

type UseRecord = {
  usedBy?: string;
  usedGram: number;
};

// export const toBuyData =
function calcToBuy() {
  const toBuyMap: Record<string, UseRecord[]> = {};

  delicaciesData.forEach((d) => {
    if (!d.ingredients) return;
    for (const ingred of Object.keys(d.ingredients)) {
      toBuyMap[ingred] ??= [];
      toBuyMap[ingred].push({
        usedBy: d.name,
        usedGram: d.ingredients[ingred],
      });
    }
  });

  return toBuyMap;
}

export const toBuyData = reactive<ToBuy[]>([]);

export const sortedToBuyData = computed(() => {
  return [...toBuyData].sort((d1, d2) => {
    if (d1.isBought !== d2.isBought) {
      return d1.isBought ? 1 : -1;
    } else {
      if (d1.buyFrom !== d2.buyFrom) {
        return d1.buyFrom === "offline" ? 1 : -1;
      } else {
        return 0;
      }
    }
  });
});

export function regenerateToBuyData() {
  toBuyData.length = 0;

  const toBuyMap = calcToBuy();

  for (const ingred of Object.keys(toBuyMap)) {
    let totalGram = 0;
    const descriptions: string[] = [];

    toBuyMap[ingred].forEach(({ usedGram, usedBy }) => {
      totalGram += usedGram;
      if (usedBy) {
        descriptions.push(`${usedBy}: ${usedGram}g`);
      }
    });

    const totalUnits =
      totalGram /
      (ingredientsData.value.find((i) => i.name === ingred)?.gramPerUnit ??
        Infinity);

    toBuyData.push({
      buyFrom: "offline",
      description: descriptions.length === 0 ? "-" : descriptions.join("，"),
      ingredName: ingred,
      isBought: false,
      totalGram,
      totalUnits,
    });
  }
}
