// CheckboxWithLabel.js

import React, { useState } from 'react';

const CheckboxWithLabel = ({ labelOn, labelOff }) => {
  const [checked, setChecked] = useState({ isChecked: false });

  const onChange = () => {
    setChecked({ ...checked, isChecked: true });
  };

  return (
    <label>
      <input
        type='checkbox'
        checked={checked.isChecked}
        onChange={() => onChange()}
      />
      {checked.isChecked ? labelOn : labelOff}
    </label>
  );
};

export default CheckboxWithLabel;
