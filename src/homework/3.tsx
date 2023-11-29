import { ChangeEvent, useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };  

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
