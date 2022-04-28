import React, { useReducer } from "react";

export default function CheckBox() {
  const [checked, toggle] = useReducer(
      checked => !checked,
      false
  );

  return (
      <>
        <label htmlFor="checkbox">
            {checked ? "checked" : "not checked"}    
        </label>  
        <input type="checkbox" value={checked} onChange={toggle} id="checkbox" />
      </>
  );
};