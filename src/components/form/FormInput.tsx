import React, { FocusEvent, useEffect, useState } from "react";

import FormControl from "./FormControl";
import { IInput } from "@/features/authentication/register/RegisterForm";
import Input from "./Input";
import Label from "./Label";

type Props = IInput & {
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMsg: string;
};

const FormInput = ({ className, onChange, value, ...inputProps }: Props) => {
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

    if (inputProps.type === "email") {
      if (!value.includes("@")) {
        console.log("incorrect email");
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      if (!value.match(new RegExp(inputProps.pattern!))) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }

  return (
    <FormControl className={className}>
      <Label htmlFor={inputProps.name}>{inputProps.label}</Label>
      <Input
        id={inputProps.name}
        type={inputProps.type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {isBlur && !isValid && (
        <span className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
          {inputProps.errorMsg}
        </span>
      )}
    </FormControl>
  );
};

export default FormInput;
