<template>
  <button
    class="button-component"
    :class="{
      'radius-none': radius === 'none',
      'radius-small': radius === 'small',
      'radius-medium': radius === 'medium',
      'radius-large': radius === 'large',
      'radius-xl': radius === 'xl',
      'radius-2xl': radius === '2xl',
      'radius-3xl': radius === '3xl',
      'radius-full': radius === 'full',

      'width-auto': width === 'auto',
      'width-full': width === 'full',

      'color-neutral': color === 'neutral',
      'color-blue': color === 'blue',
      'color-red': color === 'red',
      'color-green': color === 'green',

      'size-small': size === 'small',
      'size-default': size === 'default',
      'size-large': size === 'large',
    }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: "Button",
      required: false,
    },
    radius: {
      type: String,
      default: "default",
      required: false,
    },
    width: {
      type: String,
      default: "auto",
      required: false,
    },
    color: {
      type: String,
      default: "blue",
      required: false,
    },
    size: {
      type: String,
      default: "default",
      required: false,
    },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    //   required: false,
    // },
  },
  data() {
    return {
      // schema for Configurator.vue to generate docs
      schema: [
        {
          name: "text",
          type: "String",
          description: "",
          default: "-",
          required: false,
          value: {
            value: "Button",
            type: "input",
          },
        },
        {
          name: "radius",
          type: "String",
          description: "",
          default: "medium",
          required: false,
          value: {
            value: "medium",
            type: "select",
            options: [
              {
                text: "none",
                value: "none",
              },
              {
                text: "small",
                value: "small",
              },
              {
                text: "medium",
                value: "medium",
              },
              {
                text: "large",
                value: "large",
              },
              {
                text: "xl",
                value: "xl",
              },
              {
                text: "2xl",
                value: "2xl",
              },
              {
                text: "3xl",
                value: "3xl",
              },
              {
                text: "full",
                value: "full",
              },
            ],
          },
        },
        {
          name: "width",
          type: "String",
          description: "",
          default: "auto",
          required: false,
          value: {
            value: "auto",
            type: "select",
            options: [
              {
                text: "auto",
                value: "auto",
              },
              {
                text: "full",
                value: "full",
              },
            ],
          },
        },
        {
          name: "color",
          type: "String",
          description: "",
          default: "neutral",
          required: false,
          value: {
            value: "neutral",
            type: "select",
            options: [
              {
                text: "neutral",
                value: "neutral",
              },
              {
                text: "blue",
                value: "blue",
              },
              {
                text: "red",
                value: "red",
              },
              {
                text: "green",
                value: "green",
              },
            ],
          },
        },
        {
          name: "size",
          type: "String",
          description: "",
          default: "default",
          required: false,
          value: {
            value: "default",
            type: "select",
            options: [
              {
                text: "small",
                value: "small",
              },
              {
                text: "default",
                value: "default",
              },
              {
                text: "large",
                value: "large",
              },
            ],
          },
        },

        // todo
        // {
        //   name: "disabled",
        //   type: "Boolean",
        //   description: "Description.",
        //   default: false,
        //   required: false,
        //   value: {
        //     value: false,
        //     type: "checkbox",
        //   },
        // },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.button-component {
  @apply transition-all;

  &.radius {
    &-none {
      @apply rounded-none;
    }
    &-small {
      @apply rounded-sm;
    }
    &-medium {
      @apply rounded-md;
    }
    &-large {
      @apply rounded-lg;
    }
    &-xl {
      @apply rounded-xl;
    }
    &-2xl {
      @apply rounded-2xl;
    }
    &-3xl {
      @apply rounded-3xl;
    }
    &-full {
      @apply rounded-full;
    }
  }

  &.width {
    &-auto {
      @apply w-auto;
    }
    &-full {
      @apply w-full;
    }
  }

  &.color {
    &-neutral {
      @apply bg-gray-200 text-gray-700 hover:bg-neutral-300;
    }
    &-blue {
      @apply bg-blue-600 text-white hover:bg-blue-500;
    }
    &-red {
      @apply bg-red-600 text-white hover:bg-red-500;
    }
    &-green {
      @apply bg-green-600 text-white hover:bg-green-500;
    }
  }

  &.size {
    &-small {
      @apply min-h-[24px] min-w-[24px] px-2 py-1 text-xs font-medium;
    }
    &-default {
      @apply min-h-[36px] min-w-[36px] px-3 py-2 text-sm font-semibold;
    }
    &-large {
      @apply min-h-[44px] min-w-[44px] px-4 py-2 text-lg font-semibold;
    }
  }
}
</style>
