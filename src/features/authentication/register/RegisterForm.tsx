import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import { IUser, createUser } from "@/store/features/userSlice";
import React, { useEffect, useState } from "react";

import Button from "@/components/buttons/Button";
import FormControl from "@/components/form/FormControl";
import FormInput from "@/components/form/FormInput";
import Typography from "@/components/typography/Typography";
import { useAppDispatch } from "@/store/store";

type Props = {};

export interface IRegisterUser extends IUser {
  confirmPassword: string;
}

export interface IInput {
  id: number;
  name: string;
  type: string;
  errorMsg: string;
  label: string;
  pattern: string;
  required?: boolean;
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
  }, [isError]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
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
    console.log(inputValues)
    dispatch(createUser(inputValues));
    navigate("/login");
  }

  return (
    <div className="flex w-full flex-col bg-white p-5 drop-shadow-2xl md:max-w-[650px] md:items-center md:justify-center md:rounded-2xl dark:bg-zinc-800">
      <div className="border-b-2 border-blue-30 py-5 px-3 lg:p-8">
        <Typography
          className="p-3 text-center text-2xl text-grey-40 lg:text-[2rem] dark:text-off-white"
          text="Sign up to Blueprint"
        />
        <p className="text-center text-xs text-grey-20 sm:text-sm lg:text-sm ">
          A job application tracker, easily keep track of all current and future jobs you apply for
        </p>
      </div>

      <Form className="h-full w-full lg:pt-10" onSubmit={registerUserHandler}>
        {isError && (
          <p className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
            {errMsg}
          </p>
        )}
        {inputs.map((inputProps: any) => (
          <FormInput
            key={inputProps.id}
            className="flex flex-col"
            {...inputProps}
            value={inputValues[inputProps.name as keyof IRegisterUser]}
            onChange={onChange}
          />
        ))}

        <FormControl className="my-3">
          <Button
            type="submit"
            className="w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Register
          </Button>
        </FormControl>
        <p className="p-5 text-grey-30 dark:text-off-white">
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
