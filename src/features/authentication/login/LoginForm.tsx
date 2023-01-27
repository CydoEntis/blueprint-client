import { Form, Link, useNavigate } from "react-router-dom";
import { IUser, addUser, loginUser } from "@/store/features/userSlice";
import React, { useEffect, useState } from "react";

import Button from "@/components/buttons/Button";
import FormControl from "@/components/form/FormControl";
import FormInput from "@/components/form/FormInput";
import Typography from "@/components/typography/Typography";
import { useAppDispatch } from "@/store/store";

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

  const inputs: ILoginInput[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Password",
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
    <div className="flex w-full flex-col bg-white p-3 drop-shadow-2xl md:max-w-[650px] md:items-center md:justify-center md:rounded-2xl md:p-5">
      <div className="border-b-2 border-blue-30 py-5 px-3 lg:p-8">
        <Typography
          className="p-3 text-center text-2xl text-grey-40 lg:text-[2rem]"
          text="Sign up to Blueprint"
        />
        <p className="text-center text-xs text-grey-20 sm:text-sm lg:text-sm">
          A project management application, work, plan and achieve amazing
          things together.
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
          <div className="py-1">
            <h4 className="underline">Demo Admin Account</h4>
            <p>
              Username: <span className="text-grey-40">admin@admin.com</span>
            </p>
            <p>
              Password: <span className="text-grey-40">admin123!</span>
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
        {inputs.map((inputProps) => (
          <FormInput
            key={inputProps.id}
            className="flex flex-col"
            {...inputProps}
            value={
              inputValues[inputProps.name as keyof Omit<IUser, "username">]
            }
            onChange={onChange}
          />
        ))}

        <FormControl>
          <Button
            type="submit"
            className="w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Login
          </Button>
        </FormControl>
        <p className="p-5 text-grey-30">
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
