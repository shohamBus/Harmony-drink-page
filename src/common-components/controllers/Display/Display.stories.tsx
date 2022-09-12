/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Display, { Props as DisplayProps } from './index';

export default {
	title: 'Design System/controllers/Display',
	component: Display,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Display> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
	headLine: 'Drink Details',
	display: {
		idDrink: '1',
		strDrink: 'drink',
		strCategory: 'category',
		ingredient: ['ingredient1', 'ingredient2', 'ingredient3'],
		dateModified: '25/07/1993',
		strDrinkThumb: './Buskilas.png',
		strGlass: 'Glass',
		strInstructions: 'make...',
		strTags: 'Tags'
	}
} as DisplayProps;
