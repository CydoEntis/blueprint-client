import { ChildrenProps } from "@/types/layout-types";
import { IoMdClose } from "react-icons/io";

type Props = ChildrenProps & {
  onClose: () => void;
};

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="absolute left-1/2 top-10  z-40 w-1/2 -translate-x-1/2 transform rounded-2xl bg-white p-5 drop-shadow-lg">
      <IoMdClose
        className="text-grey-30: absolute top-3 right-3 h-8 w-8 cursor-pointer hover:text-red-400"
        onClick={onClose}
      />
      {children}
    </div>
  );
};

export default Modal;
