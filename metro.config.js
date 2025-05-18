// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const { withNativeWind } = require("nativewind/metro");

const withStorybook = require("@storybook/react-native/metro/withStorybook");
const nativeWindConfig = withNativeWind(config, { input: "./global.css" });
const storybookConfig = withStorybook(nativeWindConfig, {
  configPath: ".rnstorybook",
});

module.exports = storybookConfig;
