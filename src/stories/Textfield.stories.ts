// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import TextField from '../app/textfield/textfield.component';

export default {
  title: 'Example/TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextField> = (args: TextField) => ({
  props: args,
});

export const TextValue = Template.bind({});
TextValue.args = {
    textValue : `Value goes here`,
};

export const TextBGColor = Template.bind({});
TextBGColor.args = {
  textBGColor: `yellow`,
};

