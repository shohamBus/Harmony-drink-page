/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Header, { Props as HeaderProps } from './index';

export default {
	title: 'Design System/Business Components/Header',
	component: Header,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
	ImageSrc: './Buskilas.png',
	ImageAlt: 'Cocktails',

} as HeaderProps;
