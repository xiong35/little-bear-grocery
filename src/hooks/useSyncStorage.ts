import { TOKEN_PREFIX } from "@/constants";
import { onMounted, watch } from "vue";

export function useSyncStorageArray<T>(source: T[], key: string) {
  key = `${TOKEN_PREFIX}-${key}`;

  onMounted(() => {
    const ataStr = localStorage.getItem(key) || "[]";

    try {
      const storedData: T[] = JSON.parse(ataStr);
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
