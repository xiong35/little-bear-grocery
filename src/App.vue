<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { NTabs, NTab } from "naive-ui";
import { useDelicacies } from "./hooks/delicacies";
import { delicaciesData } from "./data/delicacies";

useDelicacies(delicaciesData);
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
  <div class="main-page">
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
a {
  color: unset;
  text-decoration: none;
}

.n-tabs-tab-wrapper {
  margin: 0 10px;
}

.main-page {
  max-width: 500px;
  margin: auto;
  padding: 45px 10px 10px;
}

.n-tabs {
  position: fixed;
  top: 0;
}
</style>

<style>
body {
  min-height: 100vh;
}
</style>
