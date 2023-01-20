import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import React from "react";

type Props = {};

const AuthForm = (props: Props) => {
  return (
    <Form
      className="w-90 "
      onSubmit={() => {
        console.log("Submit");
      }}
    >
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" />
    </Form>
  );
};

export default AuthForm;
