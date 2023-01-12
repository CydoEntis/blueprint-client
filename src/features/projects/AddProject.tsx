import React from "react";
import ActionButton from "../../components/buttons/ActionButton";
import Form from "../../components/shared/form/Form";
import Modal from "../../components/shared/modal/Modal";

type Props = {
  onClose: () => void;
};

const AddProject = ({ onClose }: Props) => {
  const onSubmit = () => {
    console.log("Do something");
  };
  return (
    <Modal onClose={onClose}>
      <Form
        onSubmit={onSubmit}
        title="Create Project"
        btnText="Create Project"
      />
    </Modal>
  );
};

export default AddProject;
