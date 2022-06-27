import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../packages';

const ButtonExample: ComponentMeta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
};

export default ButtonExample;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '测试Tailwind',
};
