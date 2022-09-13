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
		{
			idDrink: '1',
			strDrink: 'str1',
			strCategory: 'category1',
			ingredient: ['item1', 'item2', 'item3'],
			dateModified: '01/08/2222',
			strDrinkThumb: 'strDrinkThumb1',
			strGlass: 'strGlass1',
			strInstructions: 'strInstructions',
			strTags: 'strTags1'
		},
		{
			idDrink: '2',
			strDrink: 'str2',
			strCategory: 'category2',
			ingredient: ['item2', 'item2', 'item3'],
			dateModified: '02/08/2222',
			strDrinkThumb: 'strDrinkThumb2',
			strGlass: 'strGlass2',
			strInstructions: 'strInstructions',
			strTags: 'strTags2'
		},
	]
} as unknown as ListProps;
