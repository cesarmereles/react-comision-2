import { useState } from "react";

export function useForm(initialValue) {
  const [form, setForm] = useState(initialValue);
  const handleChage = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };
  return { form, handleChage };
}
