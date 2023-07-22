import type { Meta, StoryObj } from '@storybook/svelte';
import { withActions } from '@storybook/addon-actions/decorator';
import TemplateWizard from './template-wizard.svelte';
import { xml } from '../x/xml-tag';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
    title: 'Template Wizard',
    component: TemplateWizard,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
		actions: {
			handles: [
				'oscd-edit', 
				'oscd-wizard-finished',
			],
		},
	  },
	decorators: [withActions],
} satisfies Meta<TemplateWizard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
    args: {
        templates: getMockTemplate(),
        parent: xml`<DataTypeTemplates></DataTypeTemplates>`.documentElement
        // primary: true,
        // label: 'Button',
    },
};


function getMockTemplate(): Document{
    return xml`
    <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4">
        <Header id="OpenSCD_DataTypeTemplates"/>
        <DataTypeTemplates>
            <DAType id="OpenSCD_Cell2D">
                <BDA name="xStart" bType="FLOAT32"/>
                <BDA name="xEnd" bType="FLOAT32"/>
                <BDA name="yStart" bType="FLOAT32"/>
                <BDA name="yEnd" bType="FLOAT32"/>
            </DAType>
            <DAType id="OpenSCD_Cell1D">
                <BDA name="xStart" bType="FLOAT32"/>
                <BDA name="xEnd" bType="FLOAT32"/>
            </DAType>
        </DataTypeTemplates>
    </SCL>	
    `
}
