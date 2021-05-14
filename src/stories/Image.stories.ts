import { Meta, Story } from '@storybook/angular/types-6-0';
import Image from '../app/image/image.component';


export default {
    title: 'Example/Image',
    Component: Image,
} as Meta;

const Template: Story<Image> = (args: Image) => ({    
    props: args,
    Component: Image,
}) ;

export const ImageNoCaption = Template.bind({});
ImageNoCaption.args = {
    imageCaption: 'dsfsddsf',
};

export const CompleteImage = Template.bind({});
CompleteImage.args = {
    imageOpacity: 1,
};



