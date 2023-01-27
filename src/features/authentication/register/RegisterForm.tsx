import React, { useState } from "react";

import Button from "@/components/buttons/Button";
import { Form } from "react-router-dom";
import FormControl from "@/components/form/FormControl";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import Typography from "@/components/typography/Typography";

type Props = {};

const RegisterForm = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Form
        className="pt-10"
        onSubmit={() => {
          console.log("Submit");
        }}
      >
        <div className="flex">
          <FormControl className="flex w-1/2 flex-col">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl className="flex w-1/2 flex-col">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </div>
        <FormControl className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl className="flex flex-col">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button
            type="submit"
            className="mr-2  w-48 border-accent-30 bg-accent-10 py-2 px-5 text-accent-40 hover:bg-accent-40 hover:text-white"
          >
            Register
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default RegisterForm;
