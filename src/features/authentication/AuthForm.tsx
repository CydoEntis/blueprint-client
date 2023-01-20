import Form from "@/components/form/Form";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Typography from "@/components/typography/Typography";
import React from "react";

type Props = {};

const AuthForm = (props: Props) => {
  return (
    <Form
      className="w-1/2 rounded-2xl bg-white p-5 drop-shadow-2xl"
      onSubmit={() => {
        console.log("Submit");
      }}
    >
      <Typography
        className="text-center text-[2rem] text-grey-30"
        text="Login"
      />
      <FormControl className="flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" />
      </FormControl>
      <FormControl className="flex flex-col">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" />
      </FormControl>
      <FormControl className="flex flex-col">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
      </FormControl>
      <FormControl></FormControl>
    </Form>
  );
};

export default AuthForm;
