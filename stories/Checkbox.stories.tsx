import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../packages';

const CheckboxExample: ComponentMeta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
};

export default CheckboxExample;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'beige',
};
