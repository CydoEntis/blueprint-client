import Form from "../../components/shared/form/Form";
import Modal from "../../components/shared/modal/Modal";

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
