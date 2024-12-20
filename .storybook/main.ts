import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['./doc/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../src/public'],
};
export default config;
