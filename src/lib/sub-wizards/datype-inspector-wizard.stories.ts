import type { Meta, StoryObj } from '@storybook/svelte';
import { withActions } from '@storybook/addon-actions/decorator';
import DatypeInspectorWizard from './datype-inspector-wizard.svelte';
import { xml } from '../x/xml-tag';


// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'Sub Wizards/DAType Inspector Wizard',
    component: DatypeInspectorWizard,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
		actions: {
			handles: [
				'oscd-edit', 
				'oscd-wizard-finished',
			],
		},
	  },
	decorators: [withActions],
} satisfies Meta<DatypeInspectorWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
    args: {
        element: getMockDAType().documentElement,
    },
};




function getMockDAType(): Document{
	return xml`
		<DAType id="OpenSCD_Cell2D" desc="A two dimensional cell">
			<BDA name="xStart" bType="FLOAT32" />
			<BDA name="xEnd" bType="FLOAT32" />
			<BDA name="yStart" bType="FLOAT32" />
			<BDA name="yEnd" bType="FLOAT32" />
		</DAType>
	`
}

