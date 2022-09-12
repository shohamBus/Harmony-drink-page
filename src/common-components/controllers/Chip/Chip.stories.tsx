/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Chip, { Props as ChipProps } from './index';

export default {
	title: 'Design System/controllers/Chip',
	component: Chip,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
	search: [
		{ key: 1, value: 'item1' },
		{ key: 2, value: 'item2' },
		{ key: 3, value: 'item3' },
		{ key: 4, value: 'item4' },
		{ key: 5, value: 'item5' },
	]

} as ChipProps;
