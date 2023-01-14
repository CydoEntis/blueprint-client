import { ChildrenProps } from "@/types/layout-types";
import { IoMdClose } from "react-icons/io";

type Props = ChildrenProps & {
  onClose: () => void;
};

const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="absolute top-0 left-1/2 z-40 w-11/12  -translate-x-1/2 transform rounded-2xl bg-white p-5 drop-shadow-lg lg:top-10 lg:w-1/2">
      <IoMdClose
        className="text-grey-30: absolute top-3 right-3 h-8 w-8 cursor-pointer hover:text-red-400"
        onClick={onClose}
      />
      {children}
    </div>
  );
};

export default Modal;
