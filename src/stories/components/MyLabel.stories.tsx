import { Component } from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Mylabel } from '../../components/mylabel';

export default {
  title: 'UI/MyLabel',
  component: Mylabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" }
  }
} as ComponentMeta<typeof Mylabel>

const Template: ComponentStory<typeof Mylabel> = (args) => <Mylabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Este es le titulo que puse",
  size: "h1",
  allCaps: false,
  color: "primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: "h2",
  allCaps: true,
  color: "secondary"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  size: "h3",
  color: "tertiary"
}