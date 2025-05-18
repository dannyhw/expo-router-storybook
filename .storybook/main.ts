import type { StorybookConfig } from "@storybook/react-native-web-vite";

const main: StorybookConfig = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],

  addons: ["@storybook/addon-essentials"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        jsxImportSource: "nativewind",
        babel: {
          presets: ["nativewind/babel"],
        },
      },
    },
  },
};

export default main;
