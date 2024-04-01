import { createPortal } from "react-dom";
import { useImperativeHandle, forwardRef, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  //exposing a function that can be called
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
