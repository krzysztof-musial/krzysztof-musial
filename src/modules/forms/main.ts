import Configurator from "./Configurator.vue";
import Button from "./buttons/Button.vue";

import type { Component } from "vue";

interface Components {
  [key: string]: Component;
}

const components: Components = {
  Configurator,
  Button,
};

export default components;
