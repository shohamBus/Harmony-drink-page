/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import DropDown, { Props as DropDownProps } from './index';

export default {
	title: 'Design System/controllers/DropDown',
	component: DropDown,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Sort by',
	Names: ['Name', 'Date'],
} as DropDownProps;
