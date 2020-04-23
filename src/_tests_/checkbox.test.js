// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

test('The button clicks succesfully', () => {
  const Buttons = mount(<App />);

  expect(Buttons.text()).toEqual('Click!Do not click!');

  Buttons.find('.clickButton').simulate('click');

  expect(Buttons.text()).toEqual('Click!Do not click!Clicked');

  Buttons.find('.putin').simulate('change', { target: { value: 'Hullo' } });

  expect(Buttons.find('h1').text()).toEqual('Hullo');

  Buttons.find('.clickButton').simulate('click');

  expect(Buttons.find('h2').text()).toEqual('Hullo');
});

// test('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn='On' labelOff='Off' />);

//   expect(checkbox.text()).toEqual('Off');

//   checkbox.find('input').simulate('change');

//   expect(checkbox.text()).toEqual('On');
// });
