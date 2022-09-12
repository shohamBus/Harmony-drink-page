/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import MainSearch, { Props as MainSearchProps } from './index';

export default {
	title: 'Design System/controllers/MainSearch',
	component: MainSearch,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof MainSearch> = (args) => <MainSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
	lable: 'Search name of cocktail..',
	buttonText: 'SEARCH',
	withButton: true,
} as MainSearchProps;
