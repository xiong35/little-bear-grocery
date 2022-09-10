<script lang="ts" setup>
import { NInput, type InputProps } from "naive-ui";
import { defineProps, ref } from "vue";
export type ShowOrEditProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onUpdateValue: (s: string) => void;
  inputProps?: InputProps;
};

const props = defineProps<ShowOrEditProps>();

const isEdit = ref(false);
const inputValue = ref(props.value === "-" ? "" : props.value);

function handleEditStart() {
  isEdit.value = true;
}

function handleChangeEnd() {
  props.onUpdateValue(inputValue.value);
  inputValue.value = "";
  isEdit.value = false;
}
</script>

<template>
  <NInput
    :value="inputValue"
    placeholder="🤔"
    size="small"
    v-if="isEdit"
    @updateValue="(v: string)=> inputValue = v"
    @blur="handleChangeEnd"
    @vnodeMounted="(v)=> (v.el as HTMLDivElement).querySelector('input')?.focus()"
  ></NInput>
  <div :style="{ padding: 5 }" @click="handleEditStart" v-else>
    {{ props.value }}
  </div>
</template>
