<script lang="ts" setup>
import { NInput } from "naive-ui";
import { defineProps, nextTick, ref, type VNodeRef } from "vue";

const props = defineProps<{
  value: string;
  // eslint-disable-next-line no-unused-vars
  onUpdateValue: (s: string) => void;
}>();

const isEdit = ref(false);
const inputRef = ref<VNodeRef | undefined>();
const inputValue = ref(props.value);

function handleEditStart() {
  isEdit.value = true;
  nextTick(() => {
    if (inputRef.value instanceof HTMLInputElement) {
      inputRef.value.focus();
    }
  });
}

function handleChangeEnd() {
  props.onUpdateValue(inputValue.value);
  isEdit.value = false;
}
</script>

<template>
  <NInput
    :value="inputValue"
    v-if="isEdit"
    :ref="inputRef"
    @updateValue="(v: string)=> inputValue = v"
    @change="handleChangeEnd"
    @blur="handleChangeEnd"
  ></NInput>
  <span @dblclick="handleEditStart" v-else>{{ props.value }}</span>
</template>
