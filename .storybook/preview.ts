import type { Preview } from '@storybook/react';
import '../app/globals.css';
import 'tailwindcss/lib/css/preflight.css'; // 将来的にPathが変わるのが怖いなら内製でCSSを置いちゃうのも一案

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
