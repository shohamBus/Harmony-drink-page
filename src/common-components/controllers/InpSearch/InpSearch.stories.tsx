/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import InpSearch, { Props as InpSearchProps } from './index';

export default {
	title: 'Design System/controllers/inpSearch',
	component: InpSearch,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof InpSearch> = (args) => <InpSearch {...args} />;

export const Default = Template.bind({});
Default.args = {

} as InpSearchProps;
