import type { Meta, StoryObj } from '@storybook/svelte';

import WizarCardStory from './wizard-card.story.svelte';
// import WizardCard from './wizard-card.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'Components/Wizard Card',
    component: WizarCardStory,
    tags: ['autodocs'],
    argTypes: {
        width: {control:{ type: 'range', min: 100, max: 500, step: 10 }},
		height: {control: { type: 'range', min: 100, max: 500, step: 10 }},
    },
} satisfies Meta<WizarCardStory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
    args: {
        width: 300,
        height: 300
    },
};
