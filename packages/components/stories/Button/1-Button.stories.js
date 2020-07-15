import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { theme } from '@megazord/styleguide'

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>
  <span style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>Hello World!</span>
</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool" >
      😀 😎 👍 💯
    </span>
  </Button>
);
