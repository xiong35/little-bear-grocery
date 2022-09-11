import { TOKEN_PREFIX } from "@/constants";
import { onMounted, watch } from "vue";

export function useSyncStorageArray<T>(
  source: T[],
  key: string,
  defaultValue?: T[]
) {
  key = `${TOKEN_PREFIX}-${key}`;

  onMounted(() => {
    const dataStr = localStorage.getItem(key);

    try {
      let storedData: T[];
      if (dataStr) {
        storedData = JSON.parse(dataStr);
      } else if (defaultValue) {
        storedData = defaultValue;
      } else {
        storedData = [];
      }

      source.length = 0;

      storedData.forEach((data) => {
        source.push(data);
      });
    } catch {
      localStorage.removeItem(key);
    }
  });

  watch(
    source,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true, immediate: false }
  );
}
