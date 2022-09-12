/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Modal, { Props as ModalProps } from './index';

export default {
	title: 'Design System/controllers/Modal',
	component: Modal,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
	open: true,
	setOpen: '',
	imgSrc: './Buskilas.png',
} as ModalProps;
