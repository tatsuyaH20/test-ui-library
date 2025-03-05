import type { Meta, StoryObj } from '@storybook/react';
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
    src: '/dummy.webp',
    width: 600,
    height: 400,
  },
};

export const LinkImg: Story = {
  args: {
    src: '/dummy.webp',
    width: 600,
    height: 400,
    href: '/dummy',
  },
};
