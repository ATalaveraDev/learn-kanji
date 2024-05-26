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
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    title: 'My Title',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aQEhKIInQtcgywQuH4d5bE/Wireframe?type=design&node-id=0%3A1&mode=design&t=XkJAplSQZrXHsdxw-1'
    }
  }
};

export const List2: Story = {
  args: {
    title: 'My Title 222',
  },
};