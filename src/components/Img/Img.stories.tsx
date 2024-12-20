import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Img } from './Img';

const meta = {
  title: 'Example/Img',
  component: Img,
  tags: ['autodocs'],
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseImg: Story = {
  args: {
    src: '/dummy.png',
    width: 600,
    height: 400,
  },
};

export const LinkImg: Story = {
  args: {
    src: '/dummy.png',
    width: 600,
    height: 400,
    href: '/dummy',
  },
};
