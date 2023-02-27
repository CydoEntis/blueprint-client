import { IInput,} from "@/features/authentication/register/RegisterForm";
import React, { FocusEvent, useEffect, useState } from "react";

import FormControl from "./FormControl";
import Input from "./Input";
import Label from "./Label";
type Props =  {
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: number;
  name: string;
  type: string;
  errorMsg: string;
  label: string;
  pattern: string;
  required: boolean
};

const FormInput = ({ className, onChange, value, type, name, errorMsg, label, pattern }: Props) => {
  const [isBlur, setBlur] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isValid) {
      return;
    }

    const timer = setTimeout(() => {
      setIsValid(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isValid]);

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setBlur(true);

      if (errorMsg) {
        if (type === "email") {
          if (!value.includes("@")) {
            setIsValid(false);
          } else {
            setIsValid(true);
          }
        } else {
          if (!value.match(new RegExp(pattern))) {
            setIsValid(false);
          } else {
            setIsValid(true);
          }
        }
      }
  }

  return (
    <FormControl className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {isBlur && !isValid && (
        <span className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
          {errorMsg}
        </span>
      )}
    </FormControl>
  );
};

export default FormInput;
