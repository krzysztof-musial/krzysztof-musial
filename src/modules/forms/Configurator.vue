<template>
  <div>
    <div class="preview">
      <component :is="component" v-bind="models" />
    </div>

    <div class="w-full max-w-full overflow-x-auto">
      <table v-if="schema">
        <tr>
          <th v-for="(value, property) in schema[0]">{{ property }}</th>
        </tr>
        <tr v-for="prop in schema" :key="prop.name">
          <td v-for="(value, property) in prop">
            <template v-if="property === 'value'">
              <input
                v-if="value.type === 'input'"
                type="text"
                v-model="models[prop.name]"
              />
              <input
                v-else-if="value.type === 'checkbox'"
                type="checkbox"
                v-model="models[prop.name]"
              />
              <select
                v-else-if="value.type === 'select'"
                v-model="models[prop.name]"
              >
                <option v-for="option in value.options" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </template>
            <template v-else>{{ value }}</template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import components from "./main";

const props = defineProps({
  component: {
    type: String,
    default: "Button",
  },
});

const component: any = components[props.component];
const schema: any = ref(component.data().schema);
const models: any = ref(
  schema.value.reduce((acc: any, curr: any) => {
    acc[curr.name] = curr.value.value;
    return acc;
  }, {})
);
</script>

<style lang="scss" scoped>
.preview {
  @apply flex w-full items-center justify-center rounded-lg border border-primary-300 p-16 dark:border-primary-700;
  opacity: 0.8;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.1) 1px,
    rgba(0, 0, 0, 0) 1px
  );
  background-size: 10px 10px;
}
.dark .preview {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    rgba(255, 255, 255, 0) 1px
  );
}
table {
  @apply w-full;

  th,
  td {
    @apply border border-primary-200 p-2 dark:border-primary-800;
  }

  th {
    @apply bg-primary-100 dark:bg-primary-800/50;
  }

  input[type="text"],
  select {
    @apply w-full min-w-[100px] rounded border-primary-200 px-2 py-1 dark:border-primary-700 dark:bg-primary-800;
  }
  input[type="checkbox"] {
    @apply h-4 w-4 rounded border-primary-200 dark:border-primary-700 dark:bg-primary-800;
  }
}
</style>
