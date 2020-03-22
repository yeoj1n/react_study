import React, { useState } from "react";

// common input type
/*
export default function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
      const {value} = e.target;
  }
  return { value, onChange };
}
*/

// validator input
export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;

    if (typeof validator) {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}
