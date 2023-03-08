import { Form, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import userSlice, {
  IUser,
  clearError,
  loginUser,
} from "@/store/features/userSlice";

import Button from "@/components/buttons/Button";
import FormControl from "@/components/form/FormControl";
import Typography from "@/components/typography/Typography";
import Input from "@/components/form/input/Input";

import { IInput } from "../register/RegisterForm";
import Label from "@/components/form/label/Label";

type Props = {};

export interface ILoginInput {
  id: number;
  name: string;
  type: string;
  label: string;
  required: boolean;
}

const LoginForm = (props: Props) => {
  const [inputValues, setInputValues] = useState<Omit<IUser, "username">>({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let error = useAppSelector((state) => state.user.errorMsg);

  const inputs: IInput[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      errorMsg: "",
      pattern: "",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
      required: true,
      errorMsg: "",
      pattern: "",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearError());
      setIsError(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isError, error]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  }

  async function loginUserHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputValues.email || !inputValues.password) {
      setIsError(true);
      setErrMsg("Please provide all values");
      return;
    } else {
      setIsError(false);
      setErrMsg("");
    }

    await dispatch(loginUser(inputValues));
    navigate("/");
  }

  return (
    <div className="flex w-full flex-col bg-white p-3 drop-shadow-2xl dark:bg-zinc-800 md:max-w-[650px] md:items-center md:justify-center md:rounded-2xl md:p-5">
      <div className="border-b-2 border-blue-30 py-5 px-3 lg:p-8">
        <Typography
          className="p-3 text-center text-2xl text-grey-40 dark:text-off-white lg:text-[2rem]"
          text="Welcome Back!"
        />
        <p className="text-center text-xs text-grey-20 sm:text-sm lg:text-sm">
          Sign in to your account to track all current and future job
          applications
        </p>

        <div className="my-3 rounded-lg border border-blue-40 bg-blue-10 p-3 text-sm font-bold text-blue-40">
          <p className="text-center text-grey-40 underline">
            Feel free to try out a demo account.
          </p>
          <div className="py-1">
            <h4 className="underline">Demo User Account</h4>
            <p>
              Username: <span className="text-grey-40">user@user.com</span>
            </p>
            <p>
              Password: <span className="text-grey-40">user123!</span>
            </p>
          </div>
        </div>
      </div>

      <Form className="h-full w-full lg:pt-10" onSubmit={loginUserHandler}>
        {isError && (
          <p className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
            {errMsg}
          </p>
        )}
        {error !== "" ? (
          <p className="mt-2 rounded-lg border border-red-30 bg-red-10 px-2 py-2 text-sm  text-red-40">
            {error}
          </p>
        ) : null}
        <FormControl>
          <Label text="Email" />
          <Input
            type="email"
            name="email"
            value={inputValues.email}
            onChange={onChangeHandler}
          />
        </FormControl>
        <FormControl>
          <Label text="Password" />
          <Input
            type="password"
            name="password"
            value={inputValues.password}
            onChange={onChangeHandler}
          />
        </FormControl>

        <FormControl className="my-3">
          <Button
            type="submit"
            className="w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Login
          </Button>
        </FormControl>
        <p className="p-5 text-grey-30 dark:text-off-white">
          Need an acount?{" "}
          <Link className="font-bold text-blue-40 underline" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
