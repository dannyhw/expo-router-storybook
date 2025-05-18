// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
// const { withNativeWind } = require("nativewind/metro");

const withStorybook = require("@storybook/react-native/metro/withStorybook");
// const nativeWindConfig = withNativeWind(config);
const storybookConfig = withStorybook(config);

// storybookConfig.resolver.resolveRequest =
//   nativeWindConfig.resolver.resolveRequest;

module.exports = storybookConfig;

// storybookConfig.resolver.resolveRequest = config.resolver.resolveRequest;

// module.exports = storybookConfig;
