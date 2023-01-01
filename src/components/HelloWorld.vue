<template>
  <div class="hello text-left">
    <h1>{{ msg }}</h1>
    <el-button type="primary" class="my-4">Primary</el-button>
    <p>
      {{ $t("hello") }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    console.log("123");
  },
});
</script>

<style scoped lang="scss"></style>
