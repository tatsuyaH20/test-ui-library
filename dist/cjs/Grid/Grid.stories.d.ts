import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ children, column }: {
        children: React.ReactNode;
        column: 1 | 2 | 3;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BaseGrid: Story;
export declare const Column3Grid: Story;
