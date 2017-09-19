import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ListItem from '../client/components/ListItem';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('ListItem', module)
    .add('Start to render', () => (
        <ListItem
            {...{
                name: 'test',
                description: 'test desc',
                url: 'https://www.google.com',
                stars: '888',
                language: 'Python'
            }}
        />
    ));
