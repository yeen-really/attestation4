import { MyInput } from "./MyInput";

export default {
    title: 'MyInput',
    component: MyInput,
    argTypes: {
        type: {
            type: 'string',
            description: 'choose style',
            defaultValue: 'checked',
            control: {
                type: "radio",

            },
            options: ['checked', 'error', 'disabled', 'input-style'],

        },
        isDisabled: {
            control: 'boolean'
        },
        text: {
            type: 'string',
            description: 'button text',
        }

    }
}

const Template = (arg) => <MyInput {...arg} />

export const Default = Template.bind({})

Default.args = {
    type: 'primary'
}

// export const Default = () => <MyButton>Кнопка</MyButton>