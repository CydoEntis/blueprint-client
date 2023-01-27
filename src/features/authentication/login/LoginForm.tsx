import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import { Link } from "react-router-dom";
import Typography from "@/components/typography/Typography";

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-1/3 rounded-2xl bg-white p-5 drop-shadow-2xl">
      <Typography
        className="text-center text-[2rem] text-grey-30"
        text="Welcome Back"
      />
      <p className="text-md text-center text-grey-20">
        Enter your credentials to access your account
      </p>
      <Form
        className=""
        onSubmit={() => {
          console.log("Submit");
        }}
      >
        <FormControl className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" value={email} />
        </FormControl>
        <FormControl className="flex flex-col">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" value={password} />
        </FormControl>
        <FormControl>
          <Button
            type="submit"
            className="mr-2  w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Login
          </Button>
        </FormControl>
      </Form>
      <p className="p-5 text-grey-30">
        Don't have an account?{" "}
        <Link className="font-bold text-blue-40 underline" to="/login">
          Create one!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
