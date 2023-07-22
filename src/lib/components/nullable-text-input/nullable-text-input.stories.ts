import type { Meta, StoryObj } from '@storybook/svelte';

import NullableTextInput from './nullable-text-input.svelte';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'Components/Nullable Text Input',
    component: NullableTextInput,
    tags: ['autodocs'],
    argTypes: {
		nullable: {control: { type: 'boolean' }},
		labelText: {control: { type: 'text' }},
		placeholder: {control: { type: 'text' }},
    },
} satisfies Meta<NullableTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
    args: {
		nullable: true,
		labelText: "Label",
		placeholder: "",
    },
};

