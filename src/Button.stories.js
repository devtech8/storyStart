import React from 'react';
import { wInfo } from './utli';

import {storiesOf} from '@storybook/react'
import {Button} from './Button'

storiesOf('Button', module)
.addWithJSX(
  'with background', wInfo('this is the component') (() => (
  <Button bg="palegoldenrod">Hello World!</Button>
)))
.addWithJSX(
  'with background 2', wInfo('this is the same component with different background') (() => (
  <Button bg="green">Hello World 2!</Button>
)));
