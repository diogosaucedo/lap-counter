import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '.';
import ButtonType from './type';

export default {
  title: 'Components / Form / Button',
  component: Button,
  argTypes: {
    props: {
      background: { control: 'color' },
      color: { control: 'color' },
    },
  },
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const basic = Template.bind({});

basic.args = {
  children: 'Button',
};

export const custom = Template.bind({});

const sendAlert = () => alert('Clicked!');

custom.args = {
  children: 'Button',
  onClick: sendAlert,
  width: '96px',
  height: '48px',
  borderRadius: '4px',
  background: 'white',
  border: 'none',
  color: 'gray',
  fontSize: '16px',
  hover: 'color: black',
};
