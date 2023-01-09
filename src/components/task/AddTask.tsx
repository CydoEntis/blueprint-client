import React from "react";
import ActionButton from "../buttons/ActionButton";
import Form from "../shared/form/Form";
import Modal from "../shared/modal/Modal";

type Props = {
  onClose: () => void;
};

const AddTask = ({ onClose }: Props) => {
  const onSubmit = () => {
    console.log("Do something");
  };
  return (
    <Modal onClose={onClose}>
      <Form onSubmit={onSubmit} title="Create Task" btnText="Create Task" />
    </Modal>
  );
};

export default AddTask;
