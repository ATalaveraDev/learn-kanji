import { Meta, StoryObj } from '@storybook/react';
import InputsList from '../components/UI/InputsList';

const meta = {
  title: 'Example/InputsList',
  component: InputsList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { title: 'MyTit' },
} satisfies Meta<typeof InputsList>;

export default meta;
type Story = StoryObj<typeof InputsList>;

export const List: Story = {
  args: {
    title: 'Button',
  },
};