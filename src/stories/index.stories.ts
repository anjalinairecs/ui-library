import { storiesOf, moduleMetadata, addDecorator, addParameters } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { centered } from '@storybook/addon-centered/angular';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, number, boolean, array, select, radios, color, date, button } from '@storybook/addon-knobs';

import { ButtonComponent } from '../../projects/ui-library/src/lib/button/button.component';


// addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withNotes);

const ui = storiesOf('ui components', module);


ui.add('hsbc-button', () => ({
  component: ButtonComponent,
  props: {
    buttonText: text('Button text', 'hi hsbc ppl 👋'),
    click: action('You clicked me...')
  },
}),
{
  notes: 'Insert notes and relevant information here',
});
