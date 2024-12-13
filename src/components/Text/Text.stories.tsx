import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseText: Story = {
  args: {
    children: <span>text</span>,
  },
};
