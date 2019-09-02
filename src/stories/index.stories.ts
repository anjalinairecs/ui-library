import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/ui-library/src/lib/button/button.component';

storiesOf('ui components', module)
.add('hsbc-button', () => ({
  component: ButtonComponent,
  props: {
    text: 'Hello',
    click: action('You clicked me...')
  }
}));
