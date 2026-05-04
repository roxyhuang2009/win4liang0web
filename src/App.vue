<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
/* 讓全站都套用漂亮的漸層背景 */
body {
  margin: 0;
  background: linear-gradient(135deg, #d6ecff 0%, #ffffff 100%);
  min-height: 100vh;
  font-family: "Helvetica Neue", "微軟正黑體", sans-serif;
  color: #333;
}
</style>