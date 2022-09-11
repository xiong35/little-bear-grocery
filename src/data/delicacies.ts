import type { Delicacies } from "@/ts";
import { reactive } from "vue";

export const delicaciesData = reactive<Delicacies[]>([]);

export function sortByTime() {
  delicaciesData.sort((a, b) => {
    if (a.schedule === undefined && b.schedule === undefined) {
      return 0;
    } else if (a.schedule !== undefined && b.schedule !== undefined) {
      return a.schedule - b.schedule;
    } else {
      return a.schedule === undefined ? 1 : -1;
    }
  });
}
