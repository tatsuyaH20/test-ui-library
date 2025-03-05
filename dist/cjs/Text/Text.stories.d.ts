import type { StoryObj } from '@storybook/react';
import React from 'react';
declare const meta: {
    title: string;
    component: ({ children }: {
        children: React.ReactNode;
        width?: `w-[${number}px]`;
    }) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BaseText: Story;
