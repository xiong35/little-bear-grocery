import { TOKEN_PREFIX } from "@/constants";
import type { delicaciesData as _delicaciesData } from "@/data/delicacies";
import type { Delicacies } from "@/ts";
import { onMounted, watch } from "vue";

const DELICACIES_KEY = `${TOKEN_PREFIX}-delicacies`;

export function useDelicacies(delicaciesData: typeof _delicaciesData) {
  onMounted(() => {
    const storedDelicaciesDataStr =
      localStorage.getItem(DELICACIES_KEY) || "[]";

    try {
      const storedDelicaciesData: Delicacies[] = JSON.parse(
        storedDelicaciesDataStr
      );
      delicaciesData.length = 0;
      storedDelicaciesData.forEach((data) => {
        delicaciesData.push(data);
      });
    } catch {
      localStorage.removeItem(DELICACIES_KEY);
    }
  });

  watch(
    delicaciesData,
    (newValue) => {
      localStorage.setItem(DELICACIES_KEY, JSON.stringify(newValue));
    },
    { deep: true, immediate: false }
  );
}
