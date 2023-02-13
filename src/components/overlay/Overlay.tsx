import React from "react";
import { createPortal } from "react-dom";

type Props = {
    onClose: () => void;
};

const Overlay = ({onClose}: Props) => {
  //     const overlay = <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-zinc-800 opacity-90">Overlay</div>

  //   return (
  //     createPortal(overlay, document.getElementById("overlay")!)
  //   )

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-zinc-800 opacity-90 z-40" onClick={onClose}>
    </div>
  );
};

export default Overlay;
