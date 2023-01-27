import { Form, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "@/components/buttons/Button";
import FormControl from "@/components/form/FormControl";
import FormInput from "@/components/form/FormInput";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Typography from "@/components/typography/Typography";

type Props = {};

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IInput {
  id: number;
  name: string;
  type: string;
  errorMsg: string;
  label: string;
  pattern?: string;
  required: boolean;
}

const RegisterForm = (props: Props) => {
  const [inputValues, setInputValues] = useState<IRegisterUser>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const inputs: IInput[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMsg:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMsg: "Please enter a valid email address",
      pattern:
        "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      errorMsg:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      errorMsg: "Passwords don't match!",
      label: "Confirm Password",
      pattern: inputValues.password,
      required: true,
    },
  ];

  useEffect(() => {
    if (!errMsg) {
      setIsError(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [errMsg]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues);
    console.log("Name: ", e.target.name);
    console.log("Value: ", e.target.value);
  }

  function registerUserHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !inputValues.username ||
      !inputValues.email ||
      !inputValues.password ||
      !inputValues.confirmPassword
    ) {
      setIsError(true);
      setErrMsg("Please provide all values");
      return;
    } else {
      setIsError(false);
      setErrMsg("");
    }
  }

  return (
    <div className="w-1/3 rounded-2xl bg-white p-5 drop-shadow-2xl">
      <div className="border-b-2 border-blue-30 p-8">
        <Typography
          className="text-center text-[2rem] text-grey-40"
          text="Sign up to Blueprint"
        />
        <p className="text-center text-sm text-grey-20">
          A project management application, work, plan and achieve amazing
          things together.
        </p>
      </div>

      <Form className="pt-10" onSubmit={registerUserHandler}>
        {isError && (
          <p className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
            {errMsg}
          </p>
        )}
        {inputs.map((inputProps) => (
          <FormInput
            key={inputProps.id}
            className="flex flex-col"
            {...inputProps}
            value={inputValues[inputProps.name as keyof IRegisterUser]}
            onChange={onChange}
          />
        ))}

        <FormControl>
          <Button
            type="submit"
            className="w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Register
          </Button>
        </FormControl>
        <p className="p-5 text-grey-30">
          Already have an account?{" "}
          <Link className="font-bold text-blue-40 underline" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterForm;
