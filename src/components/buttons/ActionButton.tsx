import { ButtonProps } from "@/types/button-types";

const ActionButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
