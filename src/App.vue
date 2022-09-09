<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { NTabs, NTab } from "naive-ui";
</script>

<template>
  <NTabs
    justify-content="center"
    type="line"
    animated
    :value="$route.name?.toString()"
  >
    <NTab name="delicacies" tab="delicacies">
      <RouterLink :to="{ name: 'delicacies' }">佳肴😍</RouterLink>
    </NTab>
    <NTab name="to-buy" tab="to-buy">
      <RouterLink :to="{ name: 'to-buy' }">要买的🛒</RouterLink>
    </NTab>
    <NTab name="ingredients-settings" tab="ingredients-settings">
      <RouterLink :to="{ name: 'ingredients-settings' }">食材设置🥔</RouterLink>
    </NTab>
  </NTabs>
  <RouterView />
</template>

<style scoped>
a {
  color: unset;
  text-decoration: none;
}

.n-tabs-tab-wrapper {
  margin: 0 10px;
}
</style>
