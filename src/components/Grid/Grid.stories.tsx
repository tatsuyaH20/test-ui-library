import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Grid } from './Grid';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseGrid: Story = {
  args: {
    children: (
      <>
        <Text>aaaaa</Text>
        <Text>bbbbb</Text>
      </>
    ),
    column: 2,
  },
};

export const Column3Grid: Story = {
  args: {
    children: (
      <>
        <Text>aaaaa</Text>
        <Text>bbbbb</Text>
        <Text>ccccc</Text>
      </>
    ),
    column: 3,
  },
};
