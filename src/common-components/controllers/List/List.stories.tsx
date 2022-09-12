import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import List, { Props as ListProps } from './index';

export default {
	title: 'Design System/controllers/List',
	component: List,
	argTypes: {
	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
	headLine: 'Drinks',
	filteredDrinks: [
		{ idDrink: '1', strDrink: 'item1', strCategory: 'category1' },
		{ idDrink: '2', strDrink: 'item2', strCategory: 'category2' },
		{ idDrink: '3', strDrink: 'item3', strCategory: 'category3' },
	]
} as ListProps;
